import "./MovieDetails.scss"
import SliderNavigation from "@/components/Slider/components"
import Slider from "@/components/Slider"
import PersonCard from "@/components/PersonCard"
import Button from "@/components/Button"
import ReviewCard from "@/components/ReviewCard"
import Icon from "@/components/Icon"

import { ReactComponent as plusSVG } from "@/assets/icons/plus.svg"
import { ReactComponent as calendarSVG } from "@/assets/icons/calendar.svg"
import { ReactComponent as translateSVG } from "@/assets/icons/translate.svg"
import { ReactComponent as starSVG } from "@/assets/icons/star.svg"
import { ReactComponent as genresSVG } from "@/assets/icons/genres.svg"
import Tags from "@/components/Tags"
import Ratings from "@/components/Ratings"

const MovieDetails = (props) => {
  const { seasons } = props
  const titleId = "movie-details-title"
  const castSliderNavigationId = "movie-card-slider-navigation"

  const castItems = [
    { imgSrc: "/images/people/cast.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/images/people/cast.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/images/people/cast.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/images/people/cast.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/images/people/cast.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/images/people/cast.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/images/people/cast.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/images/people/cast.jpg", imgAlt: "Ivan Ivanov" },
    { imgSrc: "/images/people/cast.jpg", imgAlt: "Ivan Ivanov" },
  ]

  const reviewItems = [
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
  ]

  return (
    <section className="movie-details container" aria-labelledby={titleId}>
      <h2 className="visually-hidden" id={titleId}>
        Detailed movie information
      </h2>
      <div className="movie-details__main">
        {seasons && (
          <div className="movie-details__panel movie-details__panel--seasons">
            <div className="movie-details__group movie-details__group--big-gap-y">
              <h3 className="h4">Seasons and Episodes</h3>
              {seasons}
            </div>
          </div>
        )}
        <div className="movie-details__panel movie-details__panel--description">
          <div className="movie-details__group">
            <h3 className="movie-details__title">Description</h3>
          </div>
          <div className="movie-details__description">
            <p>
              A fiery young man clashes with an unflinching forest officer in a
              south Indian village where spirituality, fate and folklore rule
              the lands.
            </p>
          </div>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Cast</h3>
            <SliderNavigation
              id={castSliderNavigationId}
              hasPagination={false}
              mode="rounded"
              buttonMode="black-08"
            />
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollBarOnMobile={false}
            sliderParams={{
              slidesPerView: "auto",
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                },
              },
            }}
          >
            {castItems.map((castItem, i) => (
              <PersonCard {...castItem} key={i} />
            ))}
          </Slider>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Reviews</h3>
            <Button
              IconFallbackSVG={plusSVG}
              mode="black-08"
              iconName="plus"
              label="Add Your Review"
              href="/"
            />
          </header>
          <Slider
            navigationMode="rounded"
            isNavigationHiddenMobile={false}
            hasScrollBarOnMobile={false}
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                },
              },
            }}
          >
            {reviewItems.map((reviewItem, i) => (
              <ReviewCard {...reviewItem} key={i} />
            ))}
          </Slider>
        </div>
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel">
          <div className="movie-details__groups">
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="calendar" FallbackSVG={calendarSVG} />
                <span>Released Year</span>
              </h3>
              <div className="movies-details__description">
                <time className="h6">2022</time>
              </div>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="translate" FallbackSVG={translateSVG} />
                <span>Available Languages</span>
              </h3>
              <Tags
                items={["English", "Hindi", "Tamil", "Telegu", "Kannada"]}
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="star" FallbackSVG={starSVG} />
                <span>Ratings</span>
              </h3>
              <Ratings
                items={[
                  { title: "IMDb", ratingValue: 4.5 },
                  { title: "Streamvibe", ratingValue: 4 },
                ]}
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="genres" FallbackSVG={genresSVG} />
                <span>Genres</span>
              </h3>
              <Tags items={["Action", "Adventure"]} />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Director</h3>
              <PersonCard
                name="Rishab Shetty"
                subtitle="From India"
                imgSrc="/images/people/director.jpg"
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Music</h3>
              <PersonCard
                name="B. Ajaneesh Loknath"
                subtitle="From India"
                imgSrc="/images/people/music.jpg"
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default MovieDetails
