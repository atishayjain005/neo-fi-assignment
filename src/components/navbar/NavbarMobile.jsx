/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

import Hamburger from "../../assets/Hamburger.png";
import logo from "../../assets/neo-fi.png";

import * as styles from "./Navbar.styles";

const NavbarMobile = () => {
  const [isActive, setActive] = useState(false);

  return (
    <div css={styles.wrapper} variant="dark">
      <Container>
        <div css={styles.innerWrapper}>
          <img className="p-2" src={logo} alt="NeoFi logo" />
          <img
            src={Hamburger}
            width="50px"
            className="p-2"
            onClick={() => setActive(!isActive)}
          />
        </div>
        {isActive && (
          <div>
            <div>
              {["Trade", "Earn", "Support", "About"].map((nav, i) => {
                return (
                  <div
                    key={i}
                    css={styles.navMob}
                    className="p-3"
                    onClick={() => setActive(false)}
                  >
                    {nav}
                  </div>
                );
              })}
            </div>
            <Button
              className="py-2 my-4 px-3 w-100"
              onClick={() => setActive(false)}
              css={styles.button}
            >
              Connect wallet
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};
export default NavbarMobile;
