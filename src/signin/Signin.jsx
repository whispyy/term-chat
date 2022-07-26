import { useContext } from 'react'
import styled from 'styled-components'
import Page from '../common/Page'
import Button from '../common/Button'
import HeaderLink from '../common/HeaderLink'
import { pagesMapping, RoutingContext } from '../common/Router'
import SigninBox from './SigninBox'

const Title = styled.h1`
  color: white;
`

const Footer = styled.div`
  justify-self: flex-end;
`

const Signin = () => {
  const { setPage } = useContext(RoutingContext)

  return (
    <Page>
      <HeaderLink href={`/${pagesMapping.signup}`} linkText="Sign up" />
      <Title>Sign in</Title>

      <SigninBox />

      <Footer>
        <Button onClick={() => setPage(pagesMapping.signup)}>Go to signup</Button>
      </Footer>
    </Page>
  )
}

export default Signin
