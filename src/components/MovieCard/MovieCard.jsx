import "./MovieCard.scss"
import Badge from "@/components/Badge"
import RatingView from "@/components/RatingView"

import { ReactComponent as SVGEye } from "@/assets/icons/eye.svg"
import { ReactComponent as SVGClock } from "@/assets/icons/clock.svg"
import { ReactComponent as SVGCatalog } from "@/assets/icons/catalog.svg"

const MovieCard = (props) => {
  const {
    title,
    imgSrc,
    duration,
    views,
    rating,
    season,
    label,
    href = "/movie",
  } = props
  return (
    <a className="movie-card" href={href} title={title}>
      <h3 className="visually-hidden"></h3>
      <img src={imgSrc} alt="" className="movie-card__image" />
      <div className="movie-card__body">
        {duration && (
          <Badge
            IconFallbackSVG={SVGClock}
            iconName="clock"
            iconAriaLabel="Duration"
          >
            {duration}
          </Badge>
        )}
        {season && (
          <Badge IconFallbackSVG={SVGCatalog} iconName="catalog">
            {season}
          </Badge>
        )}
        {rating && (
          <Badge>
            <RatingView {...rating} />
          </Badge>
        )}
        {views && (
          <Badge IconFallbackSVG={SVGEye} iconName="eye" iconAriaLabel="Views">
            {views}
          </Badge>
        )}
        {label && (
          <Badge className="movie-card__released-badge">
            Released at
            <span className="movie-card__released-badge-label">{label}</span>
          </Badge>
        )}
      </div>
    </a>
  )
}

export default MovieCard
