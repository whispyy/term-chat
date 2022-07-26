import Page from '../common/Page'
import SignupBox from './SignupBox'
import HeaderLink from '../common/HeaderLink'
import { pagesMapping } from '../common/Router'

const Signup = () => {
  return (
    <Page>
      <HeaderLink prefixText="Have an account?" href={`/${pagesMapping.signin}`} linkText="Sign in" />
      <SignupBox />
    </Page>
  )
}

export default Signup
