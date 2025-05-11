import axios from "axios";

export const signin = async (name: string) => {
  const res = await axios.post(
    import.meta.env.VITE_SERVER_URL + "api/users/signin",
    {
      name: name,
    }
  );

  return res.data;
};
