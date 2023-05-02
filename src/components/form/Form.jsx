/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Button, Dropdown } from "react-bootstrap";

import Select from "../../assets/select.png";
import Rupee from "../../assets/Rupee.png";
import Ethereum from "../../assets/Ethereum.png";

import * as styles from "./Form.styles";

const Form = ({ cryptoCur }) => {
  const [isActive, setIsActive] = useState(0);
  const [category, setCategory] = useState({
    icon: Ethereum,
    name: "Ethereum",
    code: "ETH",
  });
  const [totalAmt, setTotalAmt] = useState(0.0);
  const inputRef = useRef(0);

  const handleCurrency = (category, amount) => {
    switch (category) {
      case "ETH":
        return setTotalAmt(amount / 150757.99);
      case "BTC":
        return setTotalAmt(amount * 2330685.5);
      case "MATIC":
        return setTotalAmt(amount * 79.58);
      case "BNB":
        return setTotalAmt(amount * 27381.63);
      case "XRP":
        return setTotalAmt(amount * 37.93);
      case "SOL":
        return setTotalAmt(amount * 1809.36);
      default:
        return setTotalAmt(amount * 150757.99);
    }
  };

  return (
    <div css={styles.form} className="p-sm-5 p-3">
      <div className="half-circle">
        <img
          src={category.icon ? category.icon : Ethereum}
          css={styles.categoryIcon}
        />
      </div>
      <div css={styles.currentVal} className="pt-4">
        <p>Current value</p>
        <div className="header-amt">
          <img src={Rupee} />
          <span>&nbsp;{totalAmt}</span>
        </div>
      </div>
      <Dropdown>
        <Dropdown.Toggle
          css={styles.dropdownBtn}
          id="dropdown-basic"
          className="px-4"
        >
          <div>
            <img src={category.icon} />
            <span>{category.name}</span>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu css={styles.dropdownMenu} className="p-4">
          {cryptoCur.map((crypto, i) => {
            return (
              <Dropdown.Item
                className="drop-item"
                key={i}
                onClick={() => {
                  setIsActive(i);
                  setCategory({
                    icon: crypto.icon,
                    name: crypto.name,
                    code: crypto.code,
                  });
                  handleCurrency(category.code, inputRef.current.value);
                }}
              >
                <div>
                  <img className="currency" src={crypto.icon} />
                  <span>{crypto.name}</span>
                </div>
                {isActive == i && (
                  <img className="crypto-select" src={Select} />
                )}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <div>
        <p>Amount you want to invest</p>
        <div css={styles.input}>
          <input
            type="number"
            placeholder="0.00"
            onChange={(e) => handleCurrency(category.code, e.target.value)}
          />
          <p className="m-0">INR</p>
        </div>
      </div>

      <div>
        <p>Est no. of {category.code} you get</p>
        <input
          css={styles.output}
          ref={inputRef}
          type="text"
          placeholder="0.00"
          value={totalAmt}
          disabled
          readOnly
        />
      </div>
      <Button className="mt-4" css={styles.button}>
        Buy
      </Button>
    </div>
  );
};

Form.propTypes = {
  cryptoCur: PropTypes.array,
};

export default Form;
