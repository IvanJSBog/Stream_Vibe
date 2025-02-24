import "./Collections.scss"
import Tabs from "@/components/Tabs"
import collectionGroups from "@/sections/Collections/collectionGroups"
import getIdFromTitle from "@/utils/getIdFromTitle"
import Section from "@/layouts/Section/"
import SliderNavigation from "@/components/Slider/components/"
import Slider from "@/components/Slider/Slider"
import CategoryCard from "@/components/CategoryCard/"
import MovieCard from "@/components/MovieCard"

const Collections = () => {
  return (
    <Tabs
      className="collections container"
      title="collections"
      isEnableOnMobile
      items={collectionGroups.map((collectionGroup) => ({
        isActive: collectionGroup.isActive,
        title: collectionGroup.title,
        children: (
          <div className="collections__group">
            <p className="collections__title hidden-mobile">
              {collectionGroup.title}
            </p>
            {collectionGroup.items.map((collectionItem, i) => {
              const { title, categoryItems, movieItems, sliderParams } =
                collectionItem

              const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`
              const titleId = `${titleFormatted}-title`
              const sliderNavigationId = `${titleFormatted}-slider-navigation`

              return (
                <Section
                  className="collections__section"
                  title={title}
                  titleId={titleId}
                  actions={
                    <SliderNavigation id={sliderNavigationId} mode="tile" />
                  }
                  isActionHiddenOnMobile
                  key={i}
                >
                  <Slider
                    sliderParams={sliderParams}
                    navigationTargetElementId={sliderNavigationId}
                  >
                    {categoryItems?.map((categoryItem, i) => (
                      <CategoryCard {...categoryItem} key={i} />
                    )) ??
                      movieItems?.map((movieItem, i) => (
                        <MovieCard {...movieItem} key={i} />
                      ))}
                  </Slider>
                </Section>
              )
            })}
          </div>
        ),
      }))}
    />
  )
}
export default Collections
