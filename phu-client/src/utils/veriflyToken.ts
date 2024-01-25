import { jwtDecode } from "jwt-decode";
("jwt-decode");
export const verifyToken = (token: string) => {
  return jwtDecode(token);
};
