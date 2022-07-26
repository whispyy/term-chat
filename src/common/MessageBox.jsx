import styled from 'styled-components'
import { Colors, Metrics } from './theme'


const MessageBox = styled.div`
  width: 80%;
  max-width: 600px;
  margin: ${Metrics.medium}px;
  padding: ${Metrics.large}px;
  border: solid 1px ${({ color }) => color ?? Colors.success};
  border-radius: ${Metrics.radius.normal}px;
  color: ${({ color }) => color ?? Colors.success};

  @media (max-width: 480px) {
    width: 85%;
  }
`

export default MessageBox
