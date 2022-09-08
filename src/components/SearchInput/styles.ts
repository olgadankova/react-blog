import styled from "styled-components";
import { COLOR } from "../../ui";

export const StyledSearch = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  padding: 20px 10px;
  font-size: 19px;
  border-bottom: 2px solid ${COLOR.LIGHT_GREY};
`;
