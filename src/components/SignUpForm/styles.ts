import { Link } from "react-router-dom";
import styled from "styled-components";
import { media, typography } from "../../ui";
import { COLOR } from "../../ui/color";

export const SignUpFormStyled = styled.form`
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
export const SignUpLabel = styled.label`
  ${typography.B1};
  display: grid;
  padding: 7px;
`;

export const SignUpText = styled.p`
  ${typography.B1};
  color: ${COLOR.GREY};
`;

export const SignUpInput = styled.input`
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

export const SignUpButton = styled.button`
  height: 56px;
  border-radius: 3px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.PURPLE};
  cursor: pointer;
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

export const ErrorMessage = styled.span`
  ${typography.B1};
  color: ${COLOR.RED};
`;

export const SignUpLink = styled(Link)`
  padding: 6px;
  color: ${COLOR.VIOLET};
`;
