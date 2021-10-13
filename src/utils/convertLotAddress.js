export function convertLotAddress(address) {
  let street = address.toLowerCase().split(',')[0];
  return street.split(" ").join("-");
}