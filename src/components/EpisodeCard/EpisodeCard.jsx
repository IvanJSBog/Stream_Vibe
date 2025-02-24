import "./EpisodeCard.scss"
import Icon from "@/components/Icon"

import { ReactComponent as SVGPLayCircle } from "@/assets/icons/play-circle.svg"
import { ReactComponent as SVGClock_S } from "@/assets/icons/clock_stroke.svg"

const EpisodeCard = (props) => {
  const { number, title, description, duration, video } = props

  const playButtonTitle = "Play video"

  return (
    <div className="episode-card">
      <div className="episode-card__number">{number}</div>
      <div className="episode-card__player" data-js-video-player="">
        <video
          src={video.src}
          poster={video.poster}
          className="episode-card__video"
          width={172}
          height={118}
          data-js-video-player-video=""
        />
        <button
          className="episode-card__play-button is-active"
          aria-label={playButtonTitle}
          title={playButtonTitle}
          data-js-video-player-play-button=""
        >
          <Icon
            className="episode-card__play-button-icon"
            name="play-circle"
            FallbackSVG={SVGPLayCircle}
          />
        </button>
      </div>
      <div className="episode-card__body">
        <div className="episode-card__info">
          <h4 className="episode-card__title h6">{title}</h4>
          <div className="episode-card__duration">
            <Icon
              name="clock_stroke"
              ariaLabel="Duration"
              FallbackSVG={SVGClock_S}
            />
            <span>{duration}</span>
          </div>
        </div>
        <div className="episode-card__description hidden-mobile">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default EpisodeCard
