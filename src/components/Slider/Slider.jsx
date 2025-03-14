import "swiper/css"
import "./Slider.scss"
import SliderNavigation from "@/components/Slider/components"

const defaultSliderParams = {
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    498: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 20,
    },
    1441: {
      spaceBetween: 30,
    },
  },
}

const Slider = (props) => {
  const {
    children,
    navigationTargetElementId = null,
    sliderParams = defaultSliderParams,
    hasScrollBar = true,
    // '' (default) | 'abs-bottom'
    navigationPosition,
    isNavigationHiddenMobile = true,
    navigationMode,
  } = props
  return (
    <div
      className="slider"
      data-js-slider={JSON.stringify({
        sliderParams,
        navigationTargetElementId,
      })}
    >
      <div className="slider__swiper swiper" data-js-slider-swiper="">
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, i) => (
            <li className="slider__item swiper-slide" key={i}>
              {slide}
            </li>
          ))}
        </ul>
      </div>

      {!navigationTargetElementId && (
        <SliderNavigation
          className="slider__navigation"
          position={navigationPosition}
          isHiddenMobile={isNavigationHiddenMobile}
          mode={navigationMode}
        />
      )}

      {hasScrollBar && (
        <div
          className="slider__scrollbar visible-mobile"
          data-js-slider-scrollbar=""
        />
      )}
    </div>
  )
}

export default Slider
