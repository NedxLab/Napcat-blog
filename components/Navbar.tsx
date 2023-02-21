import { FaMoon } from "react-icons/fa";

const Navbar = () => {
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
    <div className="flex flex-row justify-evenly w-full">
      <h1>Napcat</h1>
      <ul className="flex flex-row space-x-3">
        {navlists.map((navlist, index) => (
          <li key={index}>{navlist}</li>
        ))}
      </ul>
      <button>Log in</button>
      <button>Register</button>
      <button>
        <FaMoon />
      </button>
    </div>
  );
};

export default Navbar;
