import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./LoadingSpinnerStyles";

const LoadingSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
export default LoadingSpinner;
