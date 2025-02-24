import "./Icon.scss"

import { Icon as MinistaIcon } from "minista"
import classNames from "classnames"

const Icon = (props) => {
  const { className, name, hasFill = false, FallbackSVG, ariaLabel } = props

  const params = {
    fill: hasFill ? "currentColor" : "none",
    stroke: hasFill ? "none" : "currentColor",
  }

  return (
    <span className={classNames(className, "icon")} aria-label={ariaLabel}>
      {FallbackSVG ? (
        <FallbackSVG {...params} />
      ) : (
        <MinistaIcon iconId={name} {...params} />
      )}
    </span>
  )
}

export default Icon
