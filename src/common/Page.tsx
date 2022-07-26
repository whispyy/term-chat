import styled from 'styled-components'

const Page = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: rgb(4, 13, 33);

  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    background-color: rgb(4, 13, 33);
  }
`

export default Page
