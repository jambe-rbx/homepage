import { Icon } from "@iconify/react"
import Link from "next/link"

import WordmarkShort from "./Logos/WordmarkShort"
import Typography from "./Typography"

const FOOTER_LINKS = [
  {
    title: "JamBE on Roblox",
    icon: "simple-icons:roblox",
    url: "https://www.roblox.com/groups/3989593",
  },
  {
    title: "Follow us!",
    icon: "akar-icons:twitter-fill",
    url: "https://twitter.com/jambe_rbx",
  },
  {
    title: "Subscribe",
    icon: "akar-icons:youtube-fill",
    url: "https://www.youtube.com/@jambe-rbx",
  },
]

export default function Footer() {
  return (
    <footer className="flex flex-col justify-end gap-0 bg-dark-800 text-light">
      <section className="be-section">
        <div className="be-container flex flex-col items-center gap-4 md:gap-1 md:flex-row">
          {/* Logo */}
          <div className="flex flex-col gap-1">
            <WordmarkShort className="w-12 h-12" />
          </div>

          {/* Links */}
          <div className="flex flex-col w-full items-center md:items-end gap-2 md:gap-0">
            {FOOTER_LINKS.map((link) => (
              <Link
                href={link.url}
                key={link.title}
                className="hover:underline flex gap-2 items-center"
              >
                {link.title}

                <Icon icon={link.icon} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="be-section flex justify-center">
        <Typography className="opacity-75">
          &copy; {new Date().getFullYear()} JamBE
        </Typography>
      </section>
    </footer>
  )
}
