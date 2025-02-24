import "./ShowsBanner.scss"

import MovieBannerCard from "@/components/MovieBannerCard"

const ShowsBanner = () => {
  const titleId = "show-banner-title"
  return (
    <section className="container shows-banner" aria-labelledby={titleId}>
      <MovieBannerCard
        titleId={titleId}
        title="Stranger Things"
        isSmallPaddingY
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        imgSrc="/images/movie-banner/3.jpg"
      />
    </section>
  )
}

export default ShowsBanner
