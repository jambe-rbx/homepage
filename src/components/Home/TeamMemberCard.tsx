import type { FC } from "react"

import clsx from "clsx"
import { useState } from "react"

import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"

import Typography from "../Typography"

type Props = {
  robloxId: number
  name: string
  role?: string
  photo?: string
  socialLinks?: {
    [key: string]: string
  }
}

const socialIcons: { [key: string]: string } = {
  roblox: "simple-icons:roblox",
  twitter: "akar-icons:twitter-fill",
  youtube: "akar-icons:youtube-fill",
  discord: "akar-icons:discord-fill",
  itchio: "simple-icons:itchdotio",
  github: "akar-icons:github-fill",
}

const SocialLink: FC<{
  url: string
  name: string
  networkName: string
  icon: string
}> = ({ url, name, networkName, icon }) => (
  <Link href={url} target="_blank" title={`${name} on ${networkName}`}>
    <Icon icon={icon} fill="currentColor" />
  </Link>
)

const TeamMemberCard: FC<Props> = ({
  robloxId,
  name,
  socialLinks,
  role,
  photo,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const imageUrl =
    photo ||
    `https://www.roblox.com/headshot-thumbnail/image?userId=${robloxId}&width=420&height=420&format=png`

  return (
    <div className="flex flex-row md:flex-col items-center gap-4 md:gap-2 w-full md:w-fit">
      <figure
        className={clsx(
          "relative h-32 w-32 flex-shrink rounded-full overflow-clip bg-light-100",
          {
            "animate-pulse bg-light-300": !imageLoaded,
          }
        )}
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={`${name}'s Profile Picture`}
            onLoadingComplete={() => setImageLoaded(true)}
            fill
          />
        )}
      </figure>

      <div className="flex flex-col md:items-center gap-2 text-primary-700">
        <div className="flex flex-col md:items-center gap-0">
          <Typography className="font-semibold text-xl text-black">
            {name}
          </Typography>
          {role && (
            <Typography className="font-medium text-sm">{role}</Typography>
          )}
        </div>

        <div className="flex flex-row flex-wrap gap-3 md:gap-2 text-xl">
          <SocialLink
            icon={socialIcons.roblox}
            name={name}
            networkName="roblox"
            url={`https://roblox.com/users/${robloxId}`}
          />

          {socialLinks &&
            Object.entries(socialLinks).map(
              ([networkName, url]: [string, string], index) => {
                const icon = socialIcons?.[networkName]

                if (!icon) {
                  return
                }

                return (
                  <SocialLink
                    key={index}
                    url={url}
                    name={name}
                    networkName={networkName}
                    icon={icon}
                  />
                )
              }
            )}
        </div>
      </div>
    </div>
  )
}

export default TeamMemberCard
