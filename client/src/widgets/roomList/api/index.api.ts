import instance from "../../../shared/api/instance";

export const getCurrentRooms = async () => {
  const res = await instance.get("/rooms/current");
  return res.data;
};

export const createRoom = async (roomName: string) => {
  const res = await instance.post("/rooms/create", { roomName });
  return res.data;
};
