import { FC, useEffect } from "react"

import clsx from "clsx"
import useThumbnail from "../../hooks/useThumbnail"

import { Transition } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"
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
  const { data, error, completed } = useThumbnail({ id: universeId })

  const imageUrl = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`

  useEffect(() => {
    console.log({ data, error, completed })
  }, [data, error, completed])

  return (
    <Link
      href={`https://roblox.com/games/${rootPlaceId}`}
      className="flex flex-col flex-1 flex-grow gap-2 min-w-[256px] max-w-lg"
      passHref
    >
      {/* Thumbnail */}
      <div
        className={clsx(
          "w-full h-0 aspect-h-9 aspect-w-16 bg-light-100 rounded relative",
          {
            "animate-pulse bg-light-300": !completed,
          }
        )}
      >
        <Transition
          show={completed}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          {completed && data?.success && (
            <Image
              src={data.url}
              alt={`${name} thumbnail`}
              className="rounded-md"
              fill
            />
          )}
        </Transition>
      </div>

      <div className="flex flex-col">
        {/* Name+Rating */}
        <div className="flex flex-row gap-2 items-center">
          <Typography variant="h2" className="truncate">
            {name}
          </Typography>
        </div>
      </div>
    </Link>
  )
}

export default ExperienceCard
