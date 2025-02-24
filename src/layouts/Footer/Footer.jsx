import "./Footer.scss"

import Socials from "@/components/Socials"

import { ReactComponent as SVGLinked } from "@/assets/icons/linked-in.svg"
import { ReactComponent as SVGTwitter } from "@/assets/icons/twitter.svg"
import { ReactComponent as SVGFacebook } from "@/assets/icons/facebook.svg"

const Footer = () => {
  const menuItems = [
    {
      title: "Home",
      links: ["Categories", "Devices", "Pricing", "FAQ"],
      href: "/",
    },
    {
      title: "Movies",
      links: ["Genres", "Trending", "New Release", "Popular"],
      href: "/movies",
    },
    {
      title: "Shows",
      links: ["Genres", "Trending", "New Release", "Popular"],
      href: "/shows",
    },
    {
      title: "Support",
      links: ["Contact Us"],
      href: "/support",
    },
    {
      title: "Subscription",
      links: ["Plans", "Features"],
      href: "/subscription",
    },
    {
      title: "Connect With Us",
      socialLinks: [
        {
          label: "Facebook",
          iconName: "facebook",
          soc1alSVG: SVGLinked,
          href: "https://www.facebook.com/",
        },
        {
          label: "Twitter",
          iconName: "twitter",
          soc1alSVG: SVGTwitter,
          href: "https://x.com/",
        },
        {
          label: "LinkedIn",
          iconName: "linked-in",
          soc1alSVG: SVGFacebook,
          href: "https://careers.linkedin.cn/",
        },
      ],
      href: "/connectWithUs",
    },
  ]

  const extraLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(
            ({ title, href, links, socialLinks, soc1alSVG }, index) => (
              <div className="footer__menu-column" key={index}>
                <a href={href} className="footer__menu-title h6">
                  {title}
                </a>
                {links?.length > 0 && (
                  <ul className="footer__menu-list">
                    {links.map((link, i) => (
                      <li className="footer__menu-item" key={index}>
                        <a href="/" className="footer__menu-link">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {socialLinks?.length > 0 && (
                  <Socials className="footer__soc1als" links={socialLinks} />
                )}
              </div>
            ),
          )}
        </nav>
        <div className="footer__extra">
          <p className="footer__copyright">
            @2023 streamvib, All Rights Reserved
          </p>
          <div className="footer__extra-links">
            {extraLinks.map((link, i) => (
              <a href="" className="footer__extra-link" key={i}>
                {i === extraLinks.length - 1 ? link : `${link} | `}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
