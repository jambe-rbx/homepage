import { FC, useEffect } from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import { Icon } from "@iconify/react"
import Typography from "../Typography"

type Props = {
  id: number
  // universeId: number
  name: string
  socialLinks?: { [key: string]: string }
}

const ExperienceCard: FC<Props> = ({ id, name, socialLinks }) => {
  return (
    <Link href={`https://roblox.com/games/${id}`} passHref>
      <a className="flex flex-col flex-1 flex-grow gap-2 min-w-[256px] max-w-lg">
        {/* Thumbnail */}
        <div className="w-full h-0 aspect-h-8 aspect-w-16 md:aspect-h-9">
          <Image
            src={`https://www.roblox.com/asset-thumbnail/image?assetId=${id}&width=768&height=432&format=png`}
            alt={`${name} thumbnail`}
            className="w-full rounded-md"
            layout="fill"
            objectFit="cover"
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
