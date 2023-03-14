import React from "react";
import "./navbar.css";
import solidus from "../../assets/icons/logo.svg";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
    <li>Home</li>
    <li>About</li>
    <li>Roadmap</li>
    <li>Whitepaper</li>
    <li>Games</li>
    <li>contact</li>
    <li>Other</li>
    <div className="flex__list">
      <li>Connect wallet</li>
    </div>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar  ">
      <div className="app__navbar-logo">
        <img src={solidus} alt="solidus logo" />
      </div>
      <ul className="app__navbar-links ">
        <Menu />
      </ul>
      <div className="app__navbar-smallscreen">
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="menu scale-up-center">
            <Menu />

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
