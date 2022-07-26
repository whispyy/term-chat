import { useState } from 'react'
import styled from 'styled-components'
import { Colors } from '../common/theme'
import Button from '../common/Button'
import ContainerBox from '../common/ContainerBox'
import MessageBox from '../common/MessageBox'
import Field from '../common/forms/Field'
import useSignin from './hooks/useSignin'

const LoadingText = styled.p`
  line-height: 1.5;
  color: white;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const ButtonContainer = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const SigninBox = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {
    loading,
    submit,
    error,
   } = useSignin()

  return (
    <>
      <ContainerBox maxWidth="400">        
        <Row>
          <Field
            id="email"
            labelText="Email address"
            type="email"
            value={email ?? ''}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Row>

        <Row>
          <Field
            id="password"
            labelText="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
          />
        </Row>

        <ButtonContainer>
          <Button
            type="button"
            onClick={() => submit({ email, password })}
            disabled={!email.length || !password.length}
          >
            Submit
          </Button>
        </ButtonContainer>
      </ContainerBox>

      {loading && (
        <LoadingText>Loading ...</LoadingText>
      )}
      {error && (
        <MessageBox color={Colors.error}>
          An error occurred while saving: {error}
        </MessageBox>
      )}
    </>
  )
}

export default SigninBox
