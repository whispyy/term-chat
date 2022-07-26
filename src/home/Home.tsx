import { pagesMapping, RoutingContext } from '../common/Router'
import styled from 'styled-components'
import List from './List'
import Button from '../common/Button'
import { useContext } from 'react'
import { Metrics } from '../common/theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  color: white;
`

const Footer = styled.div`
  position: absolute;
  right: ${Metrics.medium}px;
  bottom: ${Metrics.medium}px;
`

const Home = () => {
  const { setPage } = useContext(RoutingContext)

  return (
    <>
      <Container>
        <List />
      </Container>

      <Footer>
        <Button onClick={() => setPage(pagesMapping.conversation)}>Create Conversation</Button>
      </Footer>
    </>
  )
}

export default Home
