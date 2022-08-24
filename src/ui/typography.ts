import { css } from "styled-components";
import { media } from "./media";

const H1 = css`
  font-weight: 700;
  ${media.PHONE} {
    font-size: 32px;
    line-height: 48px;
  }
  ${media.LAPTOP} {
    font-size: 56px;
    line-height: 80px;
  }
`;

const H2 = css`
  font-weight: 700;
  ${media.PHONE} {
    font-size: 24px;
    line-height: 36px;
  }
  ${media.LAPTOP} {
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
