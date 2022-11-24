import { Icon } from "@iconify/react"
import { FC } from "react"
import Button from "./Button/Button"
import Typography from "./Typography"

type Props = {
  show?: boolean
  summary?: string
  action?: {
    text?: string
    url?: any
  }
}

const Announcement: FC<Props> = ({ show, action, summary, children }) => {
  if (!children || !show) {
    return null
  }

  return (
    <div className="bg-primary-900 text-light">
      <div className="max-w-7xl mx-auto p-3 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className="md:w-0 flex-grow flex items-center">
            <span className="flex p-2 rounded-lg bg-primary-800 text-light text-2xl">
              <Icon icon="mdi:bullhorn" />
            </span>

            <p className="ml-3 font-medium line-clamp-2">
              <Typography className="md:hidden">
                {summary ?? children}
              </Typography>

              <Typography className="hidden md:inline">{children}</Typography>
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:mt-0 sm:w-auto">
            <Button variant="secondary" href={action?.url} newTab>
              {action?.text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcement
