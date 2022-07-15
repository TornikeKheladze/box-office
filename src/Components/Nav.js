import React from "react";
import { useLocation } from "react-router-dom";
import { NavList, LinkStyled } from "./Nav.styled";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/starred", text: "Starred" },
];

const Navs = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <NavList>
        {LINKS.map((link) => (
          <li key={link.text}>
            <LinkStyled
              to={link.to}
              className={link.to === location.pathname ? "active" : null}
            >
              {link.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navs;
