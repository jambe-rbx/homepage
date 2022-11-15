import type { FC } from "react"

import Image from "next/image"
import { useState } from "react"
import clsx from "clsx"

import { Icon } from "@iconify/react"

import TextLink from "../Button/TextLink"
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
  url: string;
  name: string;
  networkName: string;
  icon: string;
}> = ({ url, name, networkName, icon }) => (
  <TextLink href={url} newTab title={`${name} on ${networkName}`}>
    <Icon icon={icon} />
  </TextLink>
)

const TeamMemberCard: FC<Props> = ({
  robloxId,
  name,
  socialLinks,
  role,
  photo,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="flex flex-row md:flex-col items-center gap-4 md:gap-2 w-full md:w-fit">
      <figure
        className={clsx(
          "relative h-32 w-32 flex-shrink rounded-full overflow-clip bg-light-100",
          {
            "animate-pulse": !imageLoaded,
          }
        )}
      >
        <Image
          src={
            photo ||
            `https://www.roblox.com/headshot-thumbnail/image?userId=${robloxId}&width=420&height=420&format=png`
          }
          alt={`${name}'s Profile Picture`}
          fill
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </figure>

      <div className="flex flex-col md:items-center gap-2">
        <div className="flex flex-col md:items-center gap-0">
          <Typography className="font-bold text-xl">{name}</Typography>
          {role && (
            <Typography className="text-primary font-semibold text-sm">
              {role}
            </Typography>
          )}
        </div>

        <div className="flex flex-row flex-wrap gap-2 text-xl">
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
