import type { NextPage } from "next"

import Head from "next/head"

import siteData from "/public/data.yml"

import Announcement from "../components/Announcement"
import TextLink from "../components/Button/TextLink"
import Footer from "../components/Footer"
import Header from "../components/Hero"
import ExperienceCard from "../components/Home/ExperienceCard"
import TeamMemberCard from "../components/Home/TeamMemberCard"
import WordmarkShort from "../components/Logos/WordmarkShort"
import Typography from "../components/Typography"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>JamBE</title>

        <link rel="icon" href="/wordmark-short.svg" type="image/svg+xml" />

        <meta property="og:title" content="JamBE" />
        <meta property="og:url" content="https://jambe.uk/" />
        <meta
          property="og:image"
          content="https://jambe.uk/YouTube%20Banner.png"
        />
        <meta property="og:type" content="website" />

        <meta
          name="description"
          content="An independent studio, hand-crafting games and experiences on the Roblox platform."
        />
      </Head>

      <Announcement
        action={siteData?.announcement?.action}
        summary={siteData?.announcement?.summary}
        show={siteData?.announcement?.show ?? true}
      >
        {siteData?.announcement?.text}
      </Announcement>

      <header>
        <Header />
      </header>

      <main>
        <section className="be-section bg-dark-800 text-light">
          <div className="be-container">
            <Typography variant="h2">About</Typography>

            <Typography>
              We are an independent studio, hand-crafting games and experiences
              on the Roblox platform, founded by{" "}
              <TextLink href="https://twitter.com/csqrI">csqrl</TextLink> and{" "}
              <TextLink href="https://twitter.com/justybloxyt">
                justyblox
              </TextLink>
              .
            </Typography>
          </div>
        </section>

        {/* <section className="be-section bg-dark text-light">
          <div className="be-container">
            <Typography variant="h2">Stats</Typography>
          </div>
        </section> */}

        <section className="be-section bg-light text-dark">
          <div className="be-container">
            <Typography variant="h2">
              Games<span className="text-primary">+</span>Experiences
            </Typography>

            <div className="flex flex-wrap flex-row w-full gap-2 mt-3">
              {siteData?.experiences?.length ? (
                siteData?.experiences?.map((experience: any, index: number) => (
                  <ExperienceCard
                    key={index}
                    rootPlaceId={experience.rootPlaceId}
                    universeId={experience.universeId}
                    name={experience.name}
                    socialLinks={experience.socialLinks}
                  />
                ))
              ) : (
                <div className="w-full h-64 flex flex-col justify-center items-center content-center opacity-75 gap-2">
                  <WordmarkShort className="w-12 h-12 saturate-0" />
                  <Typography variant="custom" className="text-sm">
                    Check back later
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="be-section bg-primary text-dark">
          <div className="be-container">
            <Typography variant="h2">Community</Typography>
            <Typography>
              Join us on our socials to keep up to date with the latest news and
              announcements!
            </Typography>
          </div>
        </section>

        <section className="be-section bg-white text-dark">
          <div className="be-container">
            <Typography variant="h2">Meet the Team</Typography>
            <Typography>
              JamBE is an independent UK-based studio on Roblox, co-founded by
              csqrl and justyblox in 2017.
            </Typography>

            <div className="flex flex-row flex-wrap gap-4 justify-center mt-8">
              {siteData.team.map((member: any, index: number) => (
                <TeamMemberCard
                  name={member.name}
                  socialLinks={member.socialLinks}
                  robloxId={member.id}
                  role={member.role}
                  key={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
