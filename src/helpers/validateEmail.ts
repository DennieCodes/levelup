// Here's a low level email validator which can be expanded in the future or replaced
// with a more robust package

const validateEmail = (email: string): boolean => {
  const orgName = email.slice(email.lastIndexOf("@") + 1, email.length);
  const domExtension = orgName.slice(
    orgName.lastIndexOf(".") + 1,
    orgName.length
  );

  if (email.includes("@") && orgName.includes(".") && domExtension.length > 1)
    return true;
  return false;
};

export default validateEmail;
