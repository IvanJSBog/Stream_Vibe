import "./SliderNavigation.scss"
import classNames from "classnames"
import Button from "@/components/Button"

import { ReactComponent as SVGArrowRight } from "@/assets/icons/arrow-right.svg"
import { ReactComponent as SVGArrowLeft } from "@/assets/icons/arrow-left.svg"

const SliderNavigation = (props) => {
  const {
    className,
    id,
    hasPagination = true,
    // '' (default) | 'tile' | 'rounded'
    mode = "",
    // '' (default) | 'abs-bottom'
    position = "",
    isHiddenMobile,
    buttonMode = "black-10",
  } = props

  return (
    <div
      className={classNames(className, "slider-navigation", {
        [`slider-navigation--${mode}`]: mode,
        [`slider-navigation--${position}`]: position,
        ["hidden-mobile"]: isHiddenMobile,
      })}
      id={id}
      data-js-slider-navigation=""
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        mode={buttonMode}
        iconName="arrow-left"
        label="Previous slide"
        isLabelHidden
        IconFallbackSVG={SVGArrowLeft}
        extraAttrs={{
          "data-js-slider-previous-button": "",
        }}
      />
      {hasPagination && (
        <div
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        />
      )}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode={buttonMode}
        iconName="arrow-right"
        label="Next slide"
        isLabelHidden
        IconFallbackSVG={SVGArrowRight}
        extraAttrs={{
          "data-js-slider-next-button": "",
        }}
      />
    </div>
  )
}

export default SliderNavigation
