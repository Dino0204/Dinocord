import instance from "../../../shared/api/instance";

export const getCurrentUser = async () => {
  const res = await instance.get("/users/current");
  return res.data;
};
