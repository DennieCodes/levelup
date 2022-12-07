import { hash, genSalt } from "bcrypt";

export async function hashPassword(password: string) {
  const salt = await genSalt(process.env.SALT_ROUNDS);

  const hashedPassword = await hash(password, salt);
  return hashedPassword;
}
