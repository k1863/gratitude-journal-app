import React from "react";
import { CustomButtonContainer } from "../CustomButton/CustomButtonStyle";

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}><span>{children}</span></CustomButtonContainer>;
};

export default CustomButton;
