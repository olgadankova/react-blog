import styled from "styled-components";
import { typography, COLOR } from "../../ui";

export const StyledButton = styled.button`
  width: 100%;
  height: 56px;
  margin: auto;
  padding: 3px;
  border-radius: 3px;
  text-align: center;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.PURPLE};
  ${typography.S1};
  &:hover {
    background-color: ${COLOR.VIOLET};
  }
`;
