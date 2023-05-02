import { css } from "@emotion/react";

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  color: #dcdcec;
  background-color: #0b0819;
  border-radius: 30px;
  margin: auto;
  margin-top: 100px;
  aspect-ratio: 1/1;
  ${"" /* width: 500px; */}
  max-width: 500px;
  ${"" /* max-height: 567px; */}
  font-size: 14px;

  position: relative;

  .half-circle {
    width: 85px;
    height: 50px;
    position: absolute;
    left: 50%;
    top: -1px;
    transform: translateX(-50%);

    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    background: black;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      position: absolute;
      background: #1c1731;
      border-radius: 50%;
      margin-top: -35px;
      padding: 10px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      height: 50px;
      left: -22px;
      width: 25px;
      border-top-right-radius: 15px;
      box-shadow: 0 -25px 0 0 black;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0px;
      height: 50px;
      right: -22px;
      width: 25px;
      border-top-left-radius: 15px;
      box-shadow: 0 -25px 0 0 black;
    }
  }
`;

export const dropdownBtn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #1c1731;
  outline: none;
  border: none;
  width: 100%;
  height: 60px;

  img {
    width: 24px;
    margin-right: 14px;
  }
`;

export const input = css`
  width: 100%;
  height: 60px;
  border-radius: 6px;
  border: 1px solid rgba(110, 86, 248, 0.25);
  background: transparent;
  outline: none;
  color: #6f6f7e;
  padding: 15px 25px;

  display: flex;
  align-items: center;

  input {
    background: transparent;
    width: 100%;
    border: none;
    outline: none;
    font-size: 22px;
    font-weight: 600;
    color: #dcdcec;
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  p {
    font-size: 16px;
    color: #dcdcec;
  }
`;

export const dropdownMenu = css`
  background: #181627;
  width: 100%;

  .drop-item {
    height: 44px;
    color: #dcdcec;
    border-radius: 2px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .currency {
      width: 24px;
      margin-right: 14px;
    }

    .crypto-select {
      width: 17px;
    }

    &:hover {
      background: #1b192d;
    }
  }
`;

export const categoryIcon = css`
  width: 70px;
`;

export const currentVal = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
    min-width: 120px;
  }

  .header-amt {
    font-weight: 600 !important;
    font-size: 24px !important;
    color: #627eea;
    margin: 0;
    overflow-x: hidden;

    display: flex;
    align-items: center;
    img {
      width: 15px;
      height: 20px;
    }
  }
`;

export const output = css`
  width: 100%;
  border: none;
  outline: none;
  font-size: 22px;
  font-weight: 600;
  background: #1c1731;
  width: 100%;
  height: 60px;
  border-radius: 6px;
  padding: 15px 25px;
  color: #dcdcec;
`;

export const button = css`
  background-image: linear-gradient(
    94.37deg,
    #3387d5 -5.94%,
    #7a06c9 115.34%
  ) !important;
  border-radius: 30px;
  height: 60px;
  border: none;
  font-size: 18px;
  font-weight: 600;
`;
