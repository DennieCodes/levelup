import { hash, genSalt, compare } from "bcrypt";

export async function hashPassword(password: string) {
  const salt = await genSalt(12);

  const hashedPassword = await hash(password, salt);
  return hashedPassword;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
