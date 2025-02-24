import "./TabsNavigation.scss"
import getIdFromTitle from "@/utils/getIdFromTitle"
import classNames from "classnames"

const TabsNavigation = (props) => {
  // items - planGroups
  const { className, id, title, items = [] } = props

  const titleFormatted = getIdFromTitle(title)
  const titleId = `${titleFormatted}-title`

  return (
    <div
      id={id}
      role="tablist"
      aria-labelledby={titleId}
      // важное
      className={classNames(className, "tabs-navigation")}
      data-js-tabs-navigation=""
    >
      <h3 className="visually-hidden" id={titleId}>
        {title}
      </h3>

      {/*items - planGroups*/}
      {items.map((item, index) => {
        const titleFormatted = getIdFromTitle(item.title)
        const buttonId = `${titleFormatted}-tab`
        const contentId = `${titleFormatted}-tabpanel`

        return (
          <div
            id={buttonId}
            aria-controls={contentId}
            role="tab"
            aria-selected={item.isActive}
            tabIndex={item.isActive ? 0 : -1}
            key={index}
            // важное
            className={classNames("tabs-navigation__button", {
              "is-active": item.isActive,
            })}
            data-js-tabs-button=""
          >
            {item.title}
          </div>
        )
      })}
    </div>
  )
}

export default TabsNavigation
