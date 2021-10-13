export function convertAcresToSqft(acres) {
  return Math.round(acres * 43560.04).toLocaleString();
}