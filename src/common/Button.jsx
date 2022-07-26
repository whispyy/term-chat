import styled from 'styled-components'
import { Colors, Metrics } from "./theme";

const Button = styled.button`
  color: ${({ disabled }) => disabled ? Colors.disabled : Colors.success};
  background: none;
  border: solid 1px ${({ disabled }) => disabled ? Colors.disabled : Colors.success};
  border-radius: ${Metrics.radius.normal}px;
  padding: ${Metrics.small}px ${Metrics.medium}px;
  cursor: ${({ disabled }) => disabled ? 'unset' : 'pointer'};
  width: inherit;
  ${({ disabled }) => disabled && `cursor: not-allowed`};

  &:hover {
    opacity: ${({ disabled }) => disabled ? '1' : '0.8'};
  }

  &:active {
    opacity: ${({ disabled }) => disabled ? '1' : '0.6'};
  }
`

export default Button
