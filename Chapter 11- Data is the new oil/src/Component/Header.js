import { LOGO_URL } from "../utils/constants";
import { useEffect, useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  // let btnName = "login";

  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("Header rendered");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser)

  //if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)

  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnNameReact]);

  return (
    <div className="bg-neutral-900 text-yellow-400 flex justify-between    shadow-lg  items-center p-4 ">
      {/* Logo + Text */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <img
            className="w-20 h-20 object-contain rounded-full"
            src={LOGO_URL}
          />
        </div>
        <h1 className="text-4xl font-extrabold tracking-wide">
          <span className="text-yellow-400">Eat</span>
          <span className="text-white">24</span>
        </h1>
      </div>

      {/* Navbar */}
      <div className="flex items-center space-x-6">
        <ul className="flex m-4 p-4">
          <li className="px-4 text-white hover:text-yellow-400">
            Online Status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 text-white hover:text-yellow-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-white hover:text-yellow-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-white hover:text-yellow-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-white hover:text-yellow-400">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-white hover:text-yellow-400">
            <Link to="/cart">Cart</Link>
          </li>

          <button
            className="bg-yellow-400 text-black px-4 py-0.5 rounded-xl hover:bg-yellow-500 transition flex items-center ml-5"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              // console.log(btnNameReact)
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 text-white font-bold hover:text-yellow-400">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
