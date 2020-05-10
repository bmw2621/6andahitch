import React from "react"
import { Link } from 'gatsby';

// Import Images
const youtubeLogo = require("../images/youtube_logo.png")
const facebookLogo = require("../images/facebook_logo.png")
const instagramLogo = require("../images/instagram_logo.png")
const twitterLogo = require("../images/twitter_logo.png")
const siteLogo = require("../images/6+Hitch_Logo.png")

const Header = () => (
  <header>
    <div id="splash"><div id="layer"></div></div>
    <nav id="primaryNav">
      <a href="https://www.youtube.com/channel/UCU-yYMrVatHS5nqe7x6-VCQ"><img className="socialLink" src={youtubeLogo} alt="YouTube Channel"/></a>
      <a href="https://www.facebook.com/6-a-Hitch-107970910848155/"><img className="socialLink" src={facebookLogo} alt="Facebook Page"/></a>
      <Link to="/" id="primaryLogoContainer"><img id="primaryLogo" src={siteLogo} alt=""/></Link>
      <a href="https://www.instagram.com/6andahitch/"><img className="socialLink" src={instagramLogo} alt="Instagram Page"/></a>
      <a href="https://twitter.com/6andahitch"><img className="socialLink" src={twitterLogo} alt="Twitter Feed"/></a>
    </nav>
  </header>
)

export default Header
