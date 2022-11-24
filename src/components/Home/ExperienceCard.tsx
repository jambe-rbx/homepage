import { FC, useEffect } from "react"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import useThumbnail from "../../hooks/useThumbnail"
import Typography from "../Typography"

type Props = {
  rootPlaceId: number
  universeId: number
  name: string
  socialLinks?: { [key: string]: string }
}

const ExperienceCard: FC<Props> = ({
  universeId,
  rootPlaceId,
  name,
  socialLinks,
}) => {
  const { data, error } = useThumbnail({ id: universeId })

  const imageUrl = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`

  useEffect(() => {
    console.log({ data, error })
  }, [data, error])

  return (
    <Link href={`https://roblox.com/games/${rootPlaceId}`} passHref>
      <a className="flex flex-col flex-1 flex-grow gap-2 min-w-[256px] max-w-lg">
        {/* Thumbnail */}
        <div
          className={clsx(
            "w-full h-0 aspect-h-8 aspect-w-16 md:aspect-h-9 bg-light-100 rounded",
            {
              "animate-pulse bg-light-300": !error,
            }
          )}
        >
          <Image
            src={imageUrl}
            alt={`${name} thumbnail`}
            className="w-full rounded-md"
            width={768}
            height={432}
          />
        </div>

        <div className="flex flex-col">
          {/* Name+Rating */}
          <div className="flex flex-row gap-2 items-center">
            <Typography variant="h2" className="truncate">
              {name}
            </Typography>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ExperienceCard
