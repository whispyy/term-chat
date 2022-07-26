import styled from "styled-components"
import Link from "./Link"
import { pagesMapping } from "./Router"
import { Metrics } from "./theme"

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: solid 1px white;
`

const HLink = styled(Link)`
  padding: ${Metrics.medium}px;
`

const Header = () => {

  return (
    <Container>
      <HLink href={`/${pagesMapping.home}`}>Home</HLink>
      <HLink href={`/${pagesMapping.logout}`}>Logout</HLink>
    </Container>
  )
}

export default Header
