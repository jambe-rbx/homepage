import type { FC } from "react"

type Props = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "span" | "custom"
  [key: string]: unknown
}

const styles = {
  h1: "text-xl font-semibold",
  h2: "text-lg font-semibold",
  h3: "text-md font-semibold",
  h4: "text-sm font-semibold",
  h5: "text-xs font-semibold",
  h6: "text-xs font-medium",
  body: "text-base",
  span: "text-base",
  custom: "",
}

const Typography: FC<Props> = ({
  variant = "body",
  className,
  children,
  ...rest
}) => {
  const HTMLTag: any = variant === "body" ? "p" : variant

  return (
    <HTMLTag className={`${styles[variant]} ${className}`} {...rest}>
      {children}
    </HTMLTag>
  )
}

export default Typography
