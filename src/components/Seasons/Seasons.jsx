import "./Seasons.scss"
import AccordionGroup from "@/components/AccordionGroup"
import seasonItems from "@/components/Seasons/seasonsItems"
import Accordion from "@/components/Accordion"
import EpisodeCard from "@/components/EpisodeCard"

const Seasons = () => {
  return (
    <AccordionGroup mode="dark" isOrderedList={false} className="seasons">
      {seasonItems.map(({ title, subtitle, episodes }, index) => (
        <Accordion
          title={title}
          subtitle={subtitle}
          titleLevelClassName="h4"
          id={`season-${index}`}
          name="seasons"
          isOpen={index === 0}
          key={index}
          isArrowButton
        >
          <ul className="seasons__list">
            {episodes.map((episode, index) => (
              <li className="seasons__item" key={index}>
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons
