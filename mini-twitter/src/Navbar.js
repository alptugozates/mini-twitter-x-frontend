import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaList,
  FaUser,
  FaEllipsisH,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <div className="flex pl-14 pt-8">
      <div className="flex flex-col gap-4 text-center font-montserrat">
        <p className="flex items-center text-lg mb-4">
          <FaTwitter className="mr-6 text-5xl text-turquoise" />
        </p>
        <Link
          to="/"
          className={`flex items-center text-lg mb-4 ${
            isActive("/") ? "font-bold" : "hover:font-bold"
          } duration-300 cursor-pointer`}
        >
          <FaHome
            className={`mr-6 text-2xl ${
              isActive("/") ? "text-black" : "text-turquoise"
            }`}
          />
          Home
        </Link>
        <Link
          to="/explore"
          className={`flex items-center text-lg mb-4 ${
            isActive("/explore") ? "font-bold" : "hover:font-bold"
          } duration-300 cursor-pointer`}
        >
          <FaSearch
            className={`mr-6 text-2xl ${
              isActive("/explore") ? "text-black" : "text-turquoise"
            }`}
          />
          Explore
        </Link>
        <Link
          to="/notifications"
          className={`flex items-center text-lg mb-4 ${
            isActive("/notifications") ? "font-bold" : "hover:font-bold"
          } duration-300 cursor-pointer`}
        >
          <FaBell
            className={`mr-6 text-2xl ${
              isActive("/notifications") ? "text-black" : "text-turquoise"
            }`}
          />
          Notifications
        </Link>
        <Link
          to="/messages"
          className={`flex items-center text-lg mb-4 ${
            isActive("/messages") ? "font-bold" : "hover:font-bold"
          } duration-300 cursor-pointer`}
        >
          <FaEnvelope
            className={`mr-6 text-2xl ${
              isActive("/messages") ? "text-black" : "text-turquoise"
            }`}
          />
          Messages
        </Link>
        <Link
          to="/bookmark"
          className={`flex items-center text-lg mb-4 ${
            isActive("/bookmark") ? "font-bold" : "hover:font-bold"
          } duration-300 cursor-pointer`}
        >
          <FaBookmark
            className={`mr-6 text-2xl ${
              isActive("/bookmark") ? "text-black" : "text-turquoise"
            }`}
          />
          Bookmark
        </Link>
        <Link
          to="/lists"
          className={`flex items-center text-lg mb-4 ${
            isActive("/lists") ? "font-bold" : "hover:font-bold"
          } duration-300 cursor-pointer`}
        >
          <FaList
            className={`mr-6 text-2xl ${
              isActive("/lists") ? "text-black" : "text-turquoise"
            }`}
          />
          Lists
        </Link>
        <Link
          to="/profile"
          className={`flex items-center text-lg mb-4 ${
            isActive("/profile") ? "font-bold " : "hover:font-bold"
          } duration-300 cursor-pointer`}
        >
          <FaUser
            className={`mr-6 text-2xl ${
              isActive("/profile") ? "text-black" : "text-turquoise"
            }`}
          />
          Profile
        </Link>
        <Link
          to="/more"
          className={`flex items-center text-lg mb-4 ${
            isActive("/more") ? "font-bold" : "hover:font-bold"
          } duration-300 cursor-pointer`}
        >
          <FaEllipsisH
            className={`mr-6 text-2xl ${
              isActive("/more") ? "text-black" : "text-turquoise"
            }`}
          />
          More
        </Link>
        <button className="flex items-center text-center text-lg font-bold duration-300 px-20 py-4 text-custom-white rounded-3xl hover:bg-turquoise-400 bg-turquoise border-2 ">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
