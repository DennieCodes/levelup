import { hash, genSalt } from "bcrypt";

export async function hashPassword(password) {
  const salt = await genSalt(12);

  const hashedPassword = await hash(password, salt);
  return hashedPassword;
}
