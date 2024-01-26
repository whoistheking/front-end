import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.response.use(
    (response) => {
        return response;
    }
);

instance.interceptors.request.use(
    (config) => {
        return config;
    }
);

export default instance;