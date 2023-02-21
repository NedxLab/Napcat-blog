import {
  aboutLinks,
  serviceLinks,
  learnLinks,
  productLinks,
  supportLinks,
} from "@/data/footerLinks";
import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaMedium,
} from "react-icons/fa";

const Footer = () => {
  return (
    <ul className="flex flex-row justify-evenly">
      <li>
        About us{" "}
        <ul className="flex flex-col justify-evenly">
          {aboutLinks.map((link, index) => (
            <li key={index}>{link.name}</li>
          ))}
        </ul>
      </li>
      <li>
        Products{" "}
        <ul className="flex flex-col justify-evenly">
          {productLinks.map((link, index) => (
            <li key={index}>{link.name}</li>
          ))}
        </ul>
      </li>
      <li>
        Service{" "}
        <ul className="flex flex-col justify-evenly">
          {serviceLinks.map((link, index) => (
            <li key={index}>{link.name}</li>
          ))}
        </ul>
      </li>
      <li>
        Support{" "}
        <ul className="flex flex-col justify-evenly">
          {supportLinks.map((link, index) => (
            <li key={index}>{link.name}</li>
          ))}
        </ul>
      </li>
      <li>
        Learn{" "}
        <ul className="flex flex-col justify-evenly">
          {learnLinks.map((link, index) => (
            <li key={index}>{link.name}</li>
          ))}
        </ul>
      </li>
      <li>
        Community{" "}
        <ul className="flex flex-row space-x-4 flex-wrap  justify-evenly">
          <FaDiscord />
          <FaFacebook />
          <FaTwitter /> <br />
          <FaInstagram />
          <FaMedium />
          <FaPinterest />
        </ul>
      </li>
    </ul>
  );
};

export default Footer;
