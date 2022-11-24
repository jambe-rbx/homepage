import type { ThumbnailResponse } from "../pages/api/thumbnails/experience"

import { useEffect, useState } from "react"
import { useFetch } from "usehooks-ts"

type UseThumbnailProps = {
  id: number
  size?: "768x432" | "576x324" | "480x270" | "384x216" | "256x144"
}

export default function useThumbnail({
  id,
  size = "768x432",
}: UseThumbnailProps) {
  const [completed, setCompleted] = useState(false)

  const { data, error } = useFetch<ThumbnailResponse>(
    `/api/thumbnails/experience?id=${id}&size=${size}`
  )

  useEffect(() => {
    if (data?.success && data?.state === "completed") {
      setCompleted(true)
    }
  }, [data])

  return { data, error, completed }
}
