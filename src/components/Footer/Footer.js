import React from "react";
import "./Footer.css";
import {
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  Copyright,
} from "phosphor-react";
const links = [
  {
    id: 1,
    logo: <LinkedinLogo size={32} />,
    url: "https://www.linkedin.com/in/ma-rufjon-mamatkulov-a57ba717b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9jKC36c5RFicehd1SUzilQ%3D%3D",
  },
  {
    id: 2,
    logo: <GithubLogo size={32} />,
    url: "https://github.com/mamatkulov95",
  },
  {
    id: 3,
    logo: <TwitterLogo size={32} />,
    url: "https://twitter.com/Marufjo07721300",
  },
];
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="copyright">
        <p className="copyright-text">Copyright</p>
        <Copyright size={18} />
        {year}
        <p>Archi's Academy</p>
      </div>
      <div className="social-links">
        {links.map((item) => {
          return (
            <a key={item} href={item.url} target="_blank">
              {item.logo}
            </a>
          );
        })}
      </div>
    </div>
  );
}
