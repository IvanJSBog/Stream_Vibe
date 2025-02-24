import getParams from "@/utils/getParams"
import BaseComponent from "@/modules/generic/BaseComponent"

const rootSelector = "[data-js-tabs]"

class Tabs extends BaseComponent {
  selectors = {
    root: rootSelector,
    navigation: "[data-js-tabs-navigation]",
    button: "[data-js-tabs-button]",
    content: "[data-js-tabs-content]",
  }
  stateClasses = {
    isActive: "is-active",
  }
  stateCssVariables = {
    activeButtonWidth: "--tabsActiveButtonWidth",
    activeButtonOffsetLeft: "--tabsActiveButtonOffsetLeft",
  }
  constructor(element) {
    super()
    this.rootElement = element
    this.params = getParams(this.rootElement, this.selectors.root)
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation)
    this.buttonElements = [
      ...this.navigationElement.querySelectorAll(this.selectors.button),
    ]
    this.contentElements = [
      ...this.rootElement.querySelectorAll(this.selectors.content),
    ]
    this.state = this.getProxyState({
      activeTabIndex: this.buttonElements.findIndex(
        ({ ariaSelected }) => ariaSelected,
      ),
    })
    this.limitTabsIndex = this.buttonElements.length - 1
    this.bindEvents()
    setTimeout(this.bindObservers, 500)
  }

  updateUI() {
    const { activeTabIndex } = this.state

    this.buttonElements.forEach((buttonElement, index) => {
      const isActive = activeTabIndex === index
      buttonElement.classList.toggle(this.stateClasses.isActive, isActive)
      buttonElement.ariaSelected = isActive
      buttonElement.tabIndex = isActive ? 0 : -1
    })

    this.contentElements.forEach((contentElement, index) => {
      const isActive = activeTabIndex === index
      contentElement.classList.toggle(this.stateClasses.isActive, isActive)
    })

    this.updateNavigationCssVars()
  }

  updateNavigationCssVars() {
    const activeButtonElement = this.buttonElements[this.state.activeTabIndex]
    const { width, left } = activeButtonElement.getBoundingClientRect()
    const offsetLeft =
      left - this.navigationElement.getBoundingClientRect().left
    this.navigationElement.style.setProperty(
      this.stateCssVariables.activeButtonWidth,
      `${width}px`,
    )
    this.navigationElement.style.setProperty(
      this.stateCssVariables.activeButtonOffsetLeft,
      `${offsetLeft}px`,
    )
  }

  activateTab(index) {
    this.state.activeTabIndex = index
    this.buttonElements[index].focus()
  }

  previousTab = () => {
    const newTabIndex =
      this.state.activeTabIndex === 0
        ? this.limitTabsIndex
        : this.state.activeTabIndex - 1
    this.activateTab(newTabIndex)
  }
  nextTab = () => {
    const newTabIndex =
      this.state.activeTabIndex === this.limitTabsIndex
        ? 0
        : this.state.activeTabIndex + 1
    this.activateTab(newTabIndex)
  }
  firstTab = () => {
    this.activateTab(0)
  }
  lastTab = () => {
    this.activateTab(this.limitTabsIndex)
  }

  onButtonClick(buttonIndex) {
    this.state.activeTabIndex = buttonIndex
  }

  onKeyDown = (event) => {
    const { target, code } = event
    const isTabsContentFocused = this.contentElements.some(
      (contentElement) => contentElement === target,
    )
    const isTabsButtonsFocused = this.buttonElements.some(
      (buttonElement) => buttonElement === target,
    )
    if (!isTabsContentFocused && !isTabsButtonsFocused) {
      return
    }

    const action = {
      ArrowLeft: this.previousTab,
      ArrowRight: this.nextTab,
      Home: this.firstTab,
      End: this.lastTab,
    }[code]

    action?.()
  }

  bindEvents() {
    this.buttonElements.forEach((buttonElement, i) => {
      buttonElement.addEventListener("click", () => this.onButtonClick(i))
    })
    document.addEventListener("keydown", this.onKeyDown)
  }

  onResize = () => {
    this.updateNavigationCssVars()
  }

  bindObservers = () => {
    const resizeObserver = new ResizeObserver(this.onResize)
    resizeObserver.observe(this.navigationElement)
  }
}

class TabsCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((elem) => {
      new Tabs(elem)
    })
  }
}

export default TabsCollection
