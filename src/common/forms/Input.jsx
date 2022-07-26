import styled from 'styled-components'
import ArrowIcon from './ArrowIcon'

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin: 8px 0;
`

const StyledInput = styled.input`
  background: none;
  border: none;
  outline: none;

  color: white;
  font-weight: 700;
  font-size: 16px;
  flex: 1;
`

const Input = ({ ...props }) => (
  <Wrapper>
    <ArrowIcon />
    <StyledInput {...props} />
  </Wrapper>
)

export default Input
