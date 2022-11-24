import type { AppProps } from "next/app"

import { Poppins } from "@next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head"

import "../styles/globals.css"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JamBE</title>
        <meta name="title" content="JamBE" />
        <meta
          name="description"
          content="An independent studio, hand-crafting games and experiences on the Roblox platform."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jambe.uk/" />
        <meta property="og:title" content="JamBE" />
        <meta
          property="og:description"
          content="An independent studio, hand-crafting games and experiences on the Roblox platform."
        />
        <meta
          property="og:image"
          content="https://jambe.uk/YouTube%20Banner.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jambe.uk/" />
        <meta property="twitter:title" content="JamBE" />
        <meta
          property="twitter:description"
          content="An independent studio, hand-crafting games and experiences on the Roblox platform."
        />
        <meta
          property="twitter:image"
          content="https://jambe.uk/YouTube%20Banner.png"
        />
      </Head>

      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
