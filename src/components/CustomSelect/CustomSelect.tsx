import React from "react";
import Select from "react-select";
import { CustomStyles } from "./styles";

export const CustomSelect = () => {
  const options = [
    { value: "latest news", label: "latest news" },
    { value: "old news", label: "old news" },
  ];

  return <Select options={options} styles={CustomStyles} />;
};
