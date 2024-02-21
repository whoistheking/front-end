import instance from ".";

// 랜덤 방생성
export const randomRoomCreateAip = async () => {
  const res = await instance.post("/room/match");
  return res;
};
