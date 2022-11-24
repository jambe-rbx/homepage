import { useFetch } from "usehooks-ts"

type UseThumbnailProps = {
  id: number
  size?: "768x432" | "576x324" | "480x270" | "384x216" | "256x144"
}

export default function useThumbnail({
  id,
  size = "768x432",
}: UseThumbnailProps) {
  const { data, error } = useFetch(
    `/api/thumbnails/experience?id=${id}&size=${size}`
  )

  return { data, error }
}
