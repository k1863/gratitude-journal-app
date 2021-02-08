import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #00a08f;
  color: white;
  border: none;

  &:hover {
    background-color: #ffd454;
    color: var(--color-grey-dark-1);
    border: 1px solid var(--color-grey-dark-1);
  }
`;

const socialMediaBtnStyles = css``;

const invertedButtonStyles = css`
  background-color: white;
  color: var(--color-grey-dark-1);
  outline: none;
  border: none;

  &:hover {
    background-color: var(--color-grey-dark-1);
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  } else if (props.socialMediaBtn) {
    return socialMediaBtnStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  width: 20rem;
  height: 5rem;
  letter-spacing: 2px;
  line-height: 5rem;
  padding: 0 1.5rem 0 1.5rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-family: "Lato";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;
  text-decoration: none;

  ${getButtonStyles}
`;
