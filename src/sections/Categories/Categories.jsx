import Section from "@/layouts/Section"
import CategoryCard from "@/components/CategoryCard"
import Slider from "@/components/Slider"
import SliderNavigation from "@/components/Slider/components"
import categoryItems from "@/sections/Categories/catagoryItems"

const Categories = () => {
  const sliderNavigationId = "categories-slider-navigation"

  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={<SliderNavigation id={sliderNavigationId} mode="tile" />}
      isActionHiddenOnMobile
    >
      <Slider navigationTargetElementId={sliderNavigationId}>
        {categoryItems.map((categoryItem, i) => (
          <CategoryCard {...categoryItem} key={i} />
        ))}
      </Slider>
    </Section>
  )
}
export default Categories
