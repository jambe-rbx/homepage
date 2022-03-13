import { Icon } from "@iconify/react"
import LinkButton from "./Button/TextLink"
import WordmarkShort from "./Logos/WordmarkShort"
import Typography from "./Typography"

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
          <div className="flex flex-col w-full items-center md:items-end">
            <LinkButton
              discrete
              newTab
              href="https://www.roblox.com/groups/3989593"
            >
              JamBE on Roblox
              <Icon icon="simple-icons:roblox" />
            </LinkButton>

            <LinkButton discrete newTab href="https://twitter.com/jambe_rbx">
              Follow Us!
              <Icon icon="akar-icons:twitter-fill" />
            </LinkButton>

            <LinkButton
              discrete
              newTab
              href="https://www.youtube.com/channel/UC-_PJfvs5vRrj2mnK-hvLYg"
            >
              Subscribe
              <Icon icon="akar-icons:youtube-fill" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="be-section flex justify-center">
        <Typography className="opacity-50">
          &copy; {new Date().getFullYear()} JamBE
        </Typography>
      </section>
    </footer>
  )
}
