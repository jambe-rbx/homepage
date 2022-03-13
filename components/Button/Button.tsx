import type { FC } from "react"

import Link, { LinkProps } from "next/link"

const styles = {
  default:
    "flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium",
  primary: "text-light bg-primary hover:bg-primary-400",
  secondary:
    "text-primary-600 bg-light hover:bg-light-200 hover:text-primary-800",
}

type Props = LinkProps & {
  newTab?: boolean
  title?: string
  variant?: "primary" | "secondary"
}

const Button: FC<Props> = ({
  children,
  newTab,
  variant = "primary",
  title,
  ...rest
}) => (
  <Link passHref {...rest}>
    <a
      className={`${styles.default} ${styles[variant]}`}
      target={newTab ? "_blank" : "_self"}
      rel="noopener"
      title={title}
    >
      {children}
    </a>
  </Link>
)

export default Button
