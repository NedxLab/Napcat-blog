import { FaMoon, FaTimes } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import Link from "next/link";
import { useThemeContext } from "@/theme";
import { Mode } from "@/types/theme";
import { AiOutlineBars } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { x: 0 },
  closed: {
    x: 400,
  },
  show: {
    display: "fixed",
  },
  hide: {
    display: "none",
  },
};

const Navbar = () => {
  const { mode, changeMode } = useThemeContext();
  const [active, setActive] = useState(false);
  console.log(active);

  const toggleMode = () => {
    changeMode(mode === Mode.Light ? Mode.Dark : Mode.Light);
  };

  const navlists = [
    "buy crypto",
    "markets",
    "products",
    "trades",
    "derivatives",
    "earn",
    "finance",
  ];
  return (
    <>
      <div
        className="hidden flex-row justify-evenly items-center w-full pb-2 pt-4 relative mld:flex"
        style={{
          boxShadow:
            "12px 12px 32px rgba(13, 39, 80, 0.25), -10px -10px 15px white",
        }}
      >
        <h1 className=" font-extrabold text-2xl">Napcat</h1>
        <ul className="capitalize font-medium flex flex-row space-x-4">
          {navlists.map((navlist, index) => (
            <li key={index}>
              <Link href={"/"} className="hover:font-bold">
                {" "}
                {navlist}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row space-x-4">
          <button className="rounded-md border py-1 px-5 bg-gradient-to-r  from-green-200 to-indigo-400">
            Log in
          </button>
          <button className="rounded-md border py-1 px-5 bg-gradient-to-r  from-green-200 to-indigo-400">
            Register
          </button>
          <button onClick={toggleMode}>
            {mode == "light" ? <FaMoon /> : <MdLightMode />}
          </button>
        </div>
      </div>{" "}
      <div
        className="flex flex-row justify-between items-center w-full px-3 pb-2 pt-4 relative mld:hidden"
        style={{
          boxShadow:
            "12px 12px 32px rgba(13, 39, 80, 0.25), -10px -10px 15px white",
        }}
      >
        <h1 className=" font-extrabold text-2xl">Napcat</h1>

        <div className="flex flex-row space-x-4">
          <button className="rounded-md border py-1 px-5 bg-gradient-to-r  from-green-200 to-indigo-400">
            Register
          </button>
          <button onClick={() => setActive(true)} className="text-2xl">
            <AiOutlineBars />
          </button>
        </div>
        <div className="w-screen h-screen top-0 fixed  z-10">
          <motion.div
            initial={{ x: 400 }}
            animate={active ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="capitalize px-6 pt-14 font-medium flex relative flex-col z-20 w-96 float-right border bg-[#e8eaec] h-screen space-y-8"
          >
            <FaTimes
              onClick={() => setActive(false)}
              className="absolute top-6 text-2xl cursor-pointer right-10"
            />
            <div className="flex flex-col text-center space-y-2">
              <button className="w-11/12 rounded-md border py-1 px-5 bg-gradient-to-r  from-green-200 to-indigo-400">
                Log in
              </button>
              <button className="w-11/12 rounded-md border py-1 px-5 bg-gradient-to-r  from-green-200 to-indigo-400">
                Register
              </button>
              <button onClick={toggleMode} className="text-2xl">
                {mode == "light" ? <FaMoon /> : <MdLightMode />}
              </button>
            </div>
            <ul className=" space-y-4 text-left">
              {navlists.map((navlist, index) => (
                <li key={index}>
                  <Link href={"/"} className="hover:font-bold">
                    {" "}
                    {navlist}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
