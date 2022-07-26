import styled from 'styled-components'
import { Colors, Metrics } from './theme'


const ContainerBox = styled.div`
  width: 80%;
  max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '600'}px;
  margin: ${Metrics.large}px;
  padding: ${Metrics.large}px;
  border: solid 1px #202637;
  border-radius: ${Metrics.radius.normal}px;
  background-color: ${Colors.background.main};
  color: ${Colors.disabled};

  @media (max-width: 480px) {
    width: 85%;
  }
`

export default ContainerBox
