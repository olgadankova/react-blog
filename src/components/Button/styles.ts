import styled from "styled-components";
import { typography, COLOR } from "../../ui";

export const StyledButton = styled.button`
  text-align: center;
  width: 100%;
  margin: auto;
  padding: 5px;
  border-radius: 3px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.PURPLE};
  ${typography.S1};
  &:hover {
    background-color: ${COLOR.VIOLET};
  }
`;
