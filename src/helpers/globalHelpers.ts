export function getOptionTitle(value: string): string {
  const titleArr = value.split("_");

  return capitalize(titleArr[0]) + " " + capitalize(titleArr[1]);
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
