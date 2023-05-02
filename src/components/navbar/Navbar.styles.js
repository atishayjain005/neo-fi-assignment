import { css } from "@emotion/react";

export const wrapper = css`
  background-color: #0b0819;
  padding: 0;
  margin: 0;
`;

export const innerWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const nav = css`
  border-bottom: solid 2px transparent;
`;

export const activeNav = css`
  color: rgba(98, 126, 234, 1) !important;
  border-bottom: solid 2px rgba(98, 126, 234, 1);
`;

export const navMob = css`
  color: #dcdcec;
  border-bottom: solid 1px rgba(98, 126, 234, 0.1);
  &:hover {
    background-color: rgba(98, 126, 234, 1);
  }
`;

export const button = css`
  background-image: linear-gradient(
    94.37deg,
    #3387d5 -5.94%,
    #7a06c9 115.34%
  ) !important;
  border-radius: 30px;
  border: none;
`;
