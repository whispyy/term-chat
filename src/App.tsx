import { useContext } from 'react'
import { pagesMapping, RoutingContext } from './common/Router'
import Signin from './signin/Signin'
import Signup from './signup/Signup'
import Home from './home/Home'
import UserProvider from './common/UserContext'
import Logout from './logout/Logout'
import Conversation from './conversation/Conversation'
import Header from './common/Header'
import Page from './common/Page'

function App() {
  const { page } = useContext(RoutingContext)

  return (
    <UserProvider>
      <Page>
        <Header />

        {(pagesMapping.home === page) && <Home />}
        {(pagesMapping.signup === page) && <Signup />}
        {(pagesMapping.signin === page) && <Signin />}
        {(pagesMapping.conversation === page) && <Conversation />}
        {(pagesMapping.logout === page) && <Logout />}
      </Page>
    </UserProvider>
  )
}

export default App
