import styled from "styled-components";
import { COLOR, media } from "../../ui";

export const StyledSearch = styled.input`
  grid-area: 1 / 6 / 2 / 8;
  width: 500px;
  display: block;
  padding: 20px 25px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  border: none;
  box-shadow: 0px 0px 0px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  color: ${COLOR.MEDIUM_GREY};
  background-color: ${COLOR.WHITE};
  &::placeholder {
    color: ${COLOR.MEDIUM_GREY};
    opacity: 1;
    &:disabled {
      color: ${COLOR.LIGHT_GREY};
    }
  }
  &:focus-visible {
    outline: 2px solid ${COLOR.PURPLE};
  }
  &:disabled {
    background-color: ${COLOR.DARK};
  }
  ${media.LAPTOP} {
    width: 450px;
  }
  ${media.TABLET} {
    width: 250px;
  }
  ${media.PHONE} {
    width: 150px;
  }
`;
