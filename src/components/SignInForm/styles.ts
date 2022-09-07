import { Link } from "react-router-dom";
import styled from "styled-components";
import { media, typography } from "../../ui";
import { COLOR } from "../../ui/color";
import { StyledButton } from "../Button/styles";

export const SignInFormStyled = styled.form`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  margin: auto;
  align-items: center;
  background-color: ${COLOR.WHITE};
  border-radius: 16px;
`;
export const SignInLabel = styled.label`
  ${typography.B1};
  display: grid;
  padding: 7px;
`;

export const SignInText = styled.p`
  ${typography.B1};
  color: ${COLOR.GREY};
`;

export const SignInInput = styled.input`
  width: 544px;
  height: 56px;
  padding: 9px;
  font-size: 19px;
  border-radius: 3px;
  border: 1px solid ${COLOR.EXTRA_GREY};
  ${media.LAPTOP} {
    width: 410px;
  }
  ${media.TABLET} {
    width: 310px;
  }
  ${media.PHONE} {
    width: 210px;
  }
`;

export const SignInButton = styled(StyledButton)`
  height: 56px;
  width: 100%;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.PURPLE};
  border-radius: 3px;
  cursor: pointer;
  ${media.LAPTOP} {
    width: 390x;
  }
  ${media.TABLET} {
    width: 290px;
  }
  ${media.PHONE} {
    width: 190px;
  }
`;

export const ErrorMessage = styled.span`
  ${typography.B1};
  color: ${COLOR.RED};
`;

export const SignInLink = styled(Link)`
  padding: 6px;
  color: ${COLOR.VIOLET};
`;
