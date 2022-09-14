import React from "react";
import Select from "react-select";
import { CustomStyles } from "./styles";

export const CustomSelect = ({ onChange }: { onChange: any }) => {
  const options = [
    { value: "publishedAt", label: "Published At" },
    { value: "title", label: "Title" },
  ];

  return <Select options={options} styles={CustomStyles} onChange={onChange} />;
};
