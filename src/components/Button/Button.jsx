import "./Button.scss"
import classNames from "classnames"
import Icon from "@/components/Icon"

const Button = (props) => {
  const {
    className,
    label,
    isLabelHidden = false,
    iconName,

    href,
    target,

    type = "button",
    IconFallbackSVG,
    //(default) | transparent | black-10 | black-08 | black-06
    mode = "",

    //before | after
    iconPosition = "before",
    extraAttrs,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"

  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined

  const iconComponent = iconName && (
    <Icon
      className="button__icon"
      name={iconName}
      FallbackSVG={IconFallbackSVG}
    />
  )

  return (
    <Component
      title={title}
      aria-label={title}
      {...specificProps}
      {...extraAttrs}
      className={classNames(className, "button", {
        [`button--${mode}`]: mode,
      })}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}

export default Button
