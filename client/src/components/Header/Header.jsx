import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import useAuthCheck from "../../hooks/useAuthCheck";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();

  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };


  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* Logo */}
        <Link to="/">
          <div className="logo-container">
            <img src="./logo.png" alt="logo" width={50} className="logo-icon" />
            <span className="logo-text">EstateEdge</span>
          </div>
        </Link>

        {/* Menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/properties">Properties</NavLink>
            <a href="mailto:arijitaeiou2002@gmail.com">Contact</a>
            {/* add property */}
            <div onClick={handleAddPropertyClick}>Add Property</div>
            <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
            {!isAuthenticated ? (
              <button className="header-button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <div>
                <ProfileMenu user={user} logout={() => logout({ returnTo: window.location.origin })} />
              </div>
            )}
          </div>
        </OutsideClickHandler>

        {/* Mobile menu icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
          style={{ cursor: "pointer", color: "black" }} // Inline style for visibility
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
