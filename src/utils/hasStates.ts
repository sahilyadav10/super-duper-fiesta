export default function hasStates(country: string): boolean {
  if (
    country === "United States" ||
    country === "Australia" ||
    country === "India"
  ) {
    return true;
  }
  return false;
}
