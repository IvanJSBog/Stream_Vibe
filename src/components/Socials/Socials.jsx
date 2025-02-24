import "./Socials.scss"
import Button from "@/components/Button"
import classNames from "classnames"

const Socials = (props) => {
  const { className, links = [] } = props

  return (
    <div className={classNames(className, "soc1als")}>
      <ul className="soc1als__list">
        {links.map(({ label, iconName, soc1alSVG, href }, i) => (
          <li className="soc1als__item" key={i}>
            <Button
              className="soc1als__item__link"
              href={href}
              target="_blank"
              mode="black-10"
              label={label}
              isLabelHidden
              IconFallbackSVG={soc1alSVG}
              iconName={iconName}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
