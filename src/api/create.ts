import instance from ".";

// 랜덤 방생성
export const randomRoomCreateApi = async () => {
  const res = await instance.post("/room/match");
  return res;
};

// 방 코드를 사용하여 입장
export const roomCodeApi = async (roomId: string) => {
  const res = await instance.get(`/room/join/${roomId}`);
  return res;
};
