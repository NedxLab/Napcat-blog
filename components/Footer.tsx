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
    <>
      <ul className="flex flex-row justify-evenly mt-10">
        <li className="font-bold py-8">
          About us{" "}
          <ul className="flex flex-col justify-evenly font-light">
            {aboutLinks.map((link, index) => (
              <li key={index}>{link.name}</li>
            ))}
          </ul>
        </li>
        <li className="font-bold py-8">
          Products{" "}
          <ul className="flex flex-col justify-evenly font-light">
            {productLinks.map((link, index) => (
              <li key={index}>{link.name}</li>
            ))}
          </ul>
        </li>
        <li className="font-bold py-8">
          Service{" "}
          <ul className="flex flex-col justify-evenly font-light">
            {serviceLinks.map((link, index) => (
              <li key={index}>{link.name}</li>
            ))}
          </ul>
        </li>
        <li className="font-bold py-8">
          Support{" "}
          <ul className="flex flex-col justify-evenly font-light">
            {supportLinks.map((link, index) => (
              <li key={index}>{link.name}</li>
            ))}
          </ul>
        </li>
        <li className="font-bold py-8">
          Learn{" "}
          <ul className="flex flex-col justify-evenly font-light">
            {learnLinks.map((link, index) => (
              <li key={index}>{link.name}</li>
            ))}
          </ul>
        </li>
        <li className="font-bold py-8">
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

      <span className="text-center block">
        Napcat-Blog &copy; {new Date().getFullYear()}
      </span>
    </>
  );
};

export default Footer;
