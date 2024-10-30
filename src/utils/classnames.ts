// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cls = (...args: any[]) => {
  let result = ""

  args.forEach((value) => {
    if (typeof value === "string") {
      result += `${value} `
    }
  })

  return result.trimEnd()
}
