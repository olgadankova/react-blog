import { css } from "styled-components";

const H1 = css`
  font-weight: 700;
  @media (max-width: 568px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (max-width: 1280px) {
    font-size: 56px;
    line-height: 80px;
  }
`;

const H2 = css`
  font-weight: 700;
  @media (max-width: 568px) {
    font-size: 24px;
    line-height: 36px;
  }
  @media (max-width: 1280px) {
    font-size: 32px;
    line-height: 44px;
  }
`;

const H3 = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`;

const S1 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const B1 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export const typography = { H1, H2, H3, S1, B1 };
