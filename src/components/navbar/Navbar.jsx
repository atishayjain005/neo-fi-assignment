/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import logo from "../../assets/neo-fi.png";

import * as styles from "./Navbar.styles";

const NavigationBar = () => {
  const [isActive, setActive] = useState(0);

  return (
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
