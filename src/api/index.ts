import axios from "axios";

// url instance 세팅
const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});


// interceptors response 토큰 담기
instance.interceptors.response.use( // instance를 intercept해서 처리
    (response) => {
        if (response.headers.accesstoken) { // res.headers에 accesstoken값이 있다면
            localStorage.setItem("accessToken", response.headers.accesstoken); // localStorage에 담기
        };
        if (response.headers.refreshtoken) {
            localStorage.setItem("refreshToken", response.headers.refreshtoken); // refreshtoken도 마찬가지
        };
        return response;
    },
    async (error) => { // 만약 error가 발생할 경우(토큰이 만료된 경우) 재발급 처리
        const {
            response: { status },
        } = error;
        if (status === 403) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("location");
            alert("로그인이 필요한 서비스입니다.");
            window.location.replace("/");
        } else if (status === 401) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("location");
            alert("로그인이 필요한 서비스입니다.");
            window.location.replace("/");
        }
        return Promise.reject(error);
    }
);


// interceptor request 토큰 헤더에 싣기
instance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");

        if (accessToken) {
            config.headers["accessToken"] = accessToken;
        };

        if (refreshToken) {
            config.headers["refreshToken"] = refreshToken;
        };

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;