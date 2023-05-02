/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import logo from "../../assets/neo-fi.png";
import Hamburger from "../../assets/Hamburger.png";

import * as styles from "./Navbar.styles";

const NavigationBar = () => {
  const [isActive, setActive] = useState(0);
  const [hamOn, setHamOn] = useState(false);

  const [dimensions, setDimensions] = React.useState(window.innerWidth);

  const handleResize = () => {
    setDimensions(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return dimensions < 800 ? (
    <div css={styles.wrapper} variant="dark">
      <Container>
        <div css={styles.innerWrapper}>
          <img className="p-2" src={logo} alt="NeoFi logo" />
          <img
            src={Hamburger}
            width="50px"
            className="p-2"
            onClick={() => setHamOn(!hamOn)}
          />
        </div>
        {hamOn && (
          <div>
            <div>
              {["Trade", "Earn", "Support", "About"].map((nav, i) => {
                return (
                  <div
                    key={i}
                    css={styles.navMob}
                    className="p-3"
                    onClick={() => setHamOn(false)}
                  >
                    {nav}
                  </div>
                );
              })}
            </div>
            <Button
              className="py-2 my-4 px-3 w-100"
              onClick={() => setHamOn(false)}
              css={styles.button}
            >
              Connect wallet
            </Button>
          </div>
        )}
      </Container>
    </div>
  ) : (
    <Navbar css={styles.wrapper} variant="dark">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="NeoFi logo" />
        </Navbar.Brand>
        <Nav>
          {["Trade", "Earn", "Support", "About"].map((nav, i) => {
            return (
              <Nav.Link
                key={i}
                css={isActive === i ? styles.activeNav : styles.nav}
                className="p-4"
                onClick={() => setActive(i)}
              >
                {nav}
              </Nav.Link>
            );
          })}
        </Nav>
        <Button className="py-2 px-3" css={styles.button}>
          Connect wallet
        </Button>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
