import type { NextApiRequest, NextApiResponse } from "next"

import axios from "axios"

export type ThumbnailProps = {
  id: number
  size?: "768x432" | "576x324" | "480x270" | "384x216" | "256x144"
}

type ApiRequest = NextApiRequest & {
  query?: ThumbnailProps
}

export type ThumbnailResponse =
  | {
      success: true
      placeId: number
      url: string
      state: string
    }
  | {
      success: false
      error: string
    }

export default async function handler(
  req: ApiRequest,
  res: NextApiResponse<ThumbnailResponse>
) {
  if (!req.query?.id) {
    res.status(400).json({
      success: false,
      error: "Missing experience id",
    })

    return
  }

  const { id, size = "768x432" } = req.query

  const {
    data: { data },
  } = await axios({
    url: `https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${id}&countPerUniverse=1&defaults=true&size=${size}&format=Png&isCircular=false`,
  })

  if (data?.[0]?.error) {
    res.status(400).json({
      success: false,
      error: data[0].error?.message,
    })

    return
  }

  res
    .status(200)
    .setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
    .json({
      success: true,
      placeId: data[0].thumbnails[0].targetId,
      url: data[0].thumbnails[0].imageUrl,
      state: data[0].thumbnails[0].state.toLowerCase(),
    })
}
