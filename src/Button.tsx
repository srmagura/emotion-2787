import styled from "@emotion/styled";

const Button = styled("button")`
  padding: 20px;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 3px;
`;

export default Button;
