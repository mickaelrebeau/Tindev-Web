export function Wait(seconds: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, seconds))
}
