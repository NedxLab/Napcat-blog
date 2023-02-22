import { footerLinks } from "@/data/footerLinks";
import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaMedium,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <ul className="flex flex-row justify-evenly mt-10 mmd:hidden">
        {footerLinks.map((el, i) => (
          <li className="font-bold py-2 msd:py-8">
            <div className="flex flex-row justify-between">
              <h1> {el.name}</h1>
              <button className="hidden mmd:block">
                <FaPlus />
              </button>
            </div>
            <ul className="flex flex-col gap-1 font-light overflow-hidden mt-2">
              {el.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.slug}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}

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

      <ul className="hidden  flex-row justify-evenly mt-10 mmd:flex-col mmd:flex">
        {footerLinks.map((el, i) => (
          <Menu as="li" className="font-bold py-2 msd:py-8">
            <div className="flex flex-row justify-between">
              <h1> {el.name}</h1>
              <Menu.Button className="hidden mmd:block">
                <FaPlus />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition-h ease-out duration-500"
              enterFrom="h-0"
              enterTo="h-64"
              leave="transition-h ease-in duration-500"
              leaveFrom=" h-64"
              leaveTo=" h-0"
            >
              <Menu.Items className="flex flex-col gap-1 font-light overflow-hidden mt-2">
                {el.links.map((link, index) => (
                  <Menu.Item key={index}>
                    <Link href={link.slug}>{link.name}</Link>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        ))}

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
