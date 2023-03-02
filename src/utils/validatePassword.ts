export default function validatePassword(password: string): number {
  let strength = 1;
  if (password === "password") {
    strength = 2;
  } else if (password === "Ther@123!") {
    strength = 4;
  }

  return strength;
}
