import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Arrow } from "./styles";

export const ArrowBack = () => {
  const navigate = useNavigate();

  const handleArrow = () => {
    navigate(-1);
  };

  return (
    <Arrow>
      <AiFillCaretLeft onClick={handleArrow} style={{ fontSize: "30px" }} />
    </Arrow>
  );
};
