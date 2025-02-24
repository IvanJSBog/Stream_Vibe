import "./CategoryCard.scss"
import { Image } from "minista"
import Icon from "@/components/Icon"

import { ReactComponent as SVGArrowRight } from "@/assets/icons/arrow-right.svg"
import Badge from "@/components/Badge"

const CategoryCard = (props) => {
  const { title, images = [], badge } = props
  return (
    <a className="category-card" href="./movies">
      <div className="category-card__images">
        {images.map((imageSrc, index) => (
          <img
            alt=""
            className="category-card__image"
            src={imageSrc}
            key={index}
          />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">
          {badge && (
            <Badge className="category-card__badge" isBig mode="accent">
              {badge}
            </Badge>
          )}
          <span>{title}</span>
        </h3>
        <Icon
          className="category-card__icon"
          name="arrow-right"
          FallbackSVG={SVGArrowRight}
        />
      </div>
    </a>
  )
}
export default CategoryCard
