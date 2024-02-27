import axios from "axios";

// url instance 세팅
const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});


// interceptors response 토큰 담기
instance.interceptors.response.use( // instance를 intercept해서 처리
    (response) => {
        return response;
    },
    async (error) => { // 만약 error가 발생할 경우(토큰이 만료된 경우) 재발급 처리
        const {
            response: { status },
        } = error;
        if (status === 403) {
            localStorage.removeItem("name");
            localStorage.removeItem("token");
            alert("로그인이 필요한 서비스입니다.");
            window.location.replace("/");
        } else if (status === 401) {
            // localStorage.removeItem("name");
            // localStorage.removeItem("token");
            // alert("재로그인이 필요한 서비스입니다.");
            // window.location.replace("/");
        }
        return Promise.reject(error);
    }
);


// interceptor request 토큰 헤더에 싣기
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers["token"] = token;
        };

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;