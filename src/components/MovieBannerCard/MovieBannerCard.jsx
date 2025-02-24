import "./MovieBannerCard.scss"
import Button from "@/components/Button"
import { ReactComponent as playSVG } from "@/assets/icons/play.svg"
import { ReactComponent as plusSVG } from "@/assets/icons/plus.svg"
import { ReactComponent as likeSVG } from "@/assets/icons/like.svg"
import { ReactComponent as volumeSVG } from "@/assets/icons/volume.svg"
import classNames from "classnames"

const MovieBannerCard = (props) => {
  const { title, description, imgSrc, titleId, isSmallPaddingY = false } = props
  return (
    <div className="movie-banner-card">
      <img className="movie-banner-card__image" src={imgSrc} alt="" />
      <div
        className={classNames("movie-banner-card__inner", {
          "movie-banner-card__inner--small-padding-y": isSmallPaddingY,
        })}
      >
        <div className="movie-banner-card__body">
          <h2 className="movie-banner-card__title h3" id={titleId}>
            {title}
          </h2>
          <div className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <div className="movie-banner-card__footer">
          <Button
            IconFallbackSVG={playSVG}
            className="movie-banner-card__play-button"
            iconName="play"
            label="Play Now"
          />
          <div className="movie-banner-card__actions">
            <Button
              IconFallbackSVG={plusSVG}
              label="Add to playlist"
              iconName="plus"
              mode="black-06"
              isLabelHidden
            />
            <Button
              IconFallbackSVG={likeSVG}
              label="Like"
              iconName="like"
              mode="black-06"
              isLabelHidden
            />
            <Button
              IconFallbackSVG={volumeSVG}
              label="mute"
              iconName="volume"
              mode="black-06"
              isLabelHidden
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default MovieBannerCard
