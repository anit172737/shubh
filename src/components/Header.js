import React from "react";
import { NavLink } from "react-router-dom";
import "../sass/Header.scss";
import img1 from "../icons/insta.png";
import img2 from "../icons/in.png";
import img3 from "../icons/be.png";
import img11 from "../icons/instagram.png";
import img22 from "../icons/linkedin.png";
import img33 from "../icons/behance.png";

const Header = ({ backColor, setBackColor }) => {
  return (
    <div className={backColor ? "header__1" : "header"}>
      <div className="header__start">
        <a
          href="https://www.instagram.com/design.with.shubh/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={
              backColor ? "header__start--img-1" : "header__start--img"
            }
            src={backColor ? img11 : img1}
            alt="linkedin"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-ghanekar-4a4371194/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={
              backColor ? "header__start--img-1" : "header__start--img"
            }
            src={backColor ? img22 : img2}
            alt="insta"
          ></img>
        </a>
        <a
          href="https://www.behance.net/shubhamghanekar"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={
              backColor ? "header__start--img-1" : "header__start--img"
            }
            style={{ height: "2vw" }}
            src={backColor ? img33 : img3}
            alt="insta"
          ></img>
        </a>
      </div>
      <div className="header__center">
        <p
          className={
            backColor ? "header__center--title-1" : "header__center--title"
          }
        >
          SHUBHAM GHANEKAR
        </p>
      </div>

      <div className="header__end">
        <NavLink
          to="/"
          onClick={() => setBackColor(false)}
          className={({ isActive }) =>
            isActive
              ? "header__end--active"
              : backColor
              ? "header__end--title-1"
              : "header__end--title"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/practice"
          onClick={() => setBackColor(false)}
          className={({ isActive }) =>
            isActive
              ? "header__end--active"
              : backColor
              ? "header__end--title-1"
              : "header__end--title"
          }
        >
          Practice
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setBackColor(false)}
          className={({ isActive }) =>
            isActive
              ? "header__end--active"
              : backColor
              ? "header__end--title-1"
              : "header__end--title"
          }
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
