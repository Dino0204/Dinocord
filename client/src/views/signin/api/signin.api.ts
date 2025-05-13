import type { SigninProps } from "../model/auth";
import instance from "../../../shared/api/instance";

export const signin = async ({ name, email, password }: SigninProps) => {
  const res = await instance.post("/auth/signin", {
    name,
    email,
    password,
  });

  return res.data;
};
