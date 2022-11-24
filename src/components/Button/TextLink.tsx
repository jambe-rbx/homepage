import type { FC } from "react"

import Link, { LinkProps } from "next/link"

const styles = {
  default: "inline-flex items-center gap-2",
  obvious: "text-primary underline",
  discrete: "hover:text-primary hover:underline",
}

type Props = LinkProps & {
  newTab?: boolean
  discrete?: boolean
  title?: string
}

const LinkButton: FC<Props> = ({
  children,
  newTab,
  discrete,
  title,
  ...rest
}) => (
  <Link passHref {...rest}>
    <a
      className={`${styles.default} ${
        discrete ? styles.discrete : styles.obvious
      }`}
      target={newTab ? "_blank" : "_self"}
      rel="noopener"
      title={title}
    >
      {children}
    </a>
  </Link>
)

export default LinkButton
