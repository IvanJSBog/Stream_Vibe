class OverlayMenu {
  selectors = {
    root: "[data-js-overlay-menu]",
    dialog: "[data-js-overlay-menu-dialog]",
    burgerButton: "[data-js-overlay-menu-burger-button]",
  }
  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton,
    )
    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.dialogElement.open = !this.dialogElement.open
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }
  onWindowScroll = () => {
    if (window.scrollY !== 0) {
      this.rootElement.classList.add("is-active")
    } else {
      this.rootElement.classList.remove("is-active")
    }
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener("click", this.onBurgerButtonClick)
    window.addEventListener("scroll", this.onWindowScroll)
  }
}

export default OverlayMenu
