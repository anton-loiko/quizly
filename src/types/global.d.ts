declare module "*.module.css" {
  const classes: { [key: string]: string }
  export default classes
}

export declare global {
  type PropsWithClassName<V = object> = V & {
    className?: string
  }
}
