export const classParser = function(str: string): string{
  return str.trim().replaceAll("\n", " ").split(" ").filter( x => x.length >= 1).join(" ").trim()
}