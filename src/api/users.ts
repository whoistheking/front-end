import instance from ".";

// 로그아웃 api
export const postLogoutApi = async () => {
    const res = await instance.post("/users/logout");
    return res;
};

// 내 프로필 조회 api
export const getProfileApi = async () => {
    const res = await instance.get("/users/profile");
    return res;
};

// 내 프로필 닉네임 변경 api
export const patchProfileModifyApi = async () => {
    const res = await instance.patch("/users/modify/nickname");
    return res;
};