import ShowsBanner from "@/sections/ShowsBanner"
import MovieDetails from "@/sections/MovieDetails"
import Seasons from "@/components/Seasons"

export const metadata = {
  title: "Show - Stranger Things",
}

export default function () {
  return (
    <>
      <ShowsBanner />
      <MovieDetails seasons={<Seasons />} />
    </>
  )
}
