import styled from 'styled-components'
import { Colors } from '../common/theme'
import Button from '../common/Button'
import ContainerBox from '../common/ContainerBox'
import MessageBox from '../common/MessageBox'
import Field from '../common/forms/Field'
import useSignup from './hooks/useSignup'

const Text = styled.p`
  line-height: 1.5;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

const HintText = styled.p`
  display: flex;
  align-items: flex-start;
  width: 80%;
  max-width: 600px;
  color: ${Colors.disabled};
  margin-top: 0;
`

const Signup = () => {
  const {
    emailField: {
      setValue: setEmail,
      value: email,
      isValid: isEmailValid,
      validate: validateEmail,
      submitted: emailSubmitted,
    },
    passwordField: {
      value: password,
      setValue: setPassword,
      isValid: isPasswordValid,
    },
    submit,
    error,
   } = useSignup()

  return (
    <>
      <ContainerBox>
        <Text>
          Welcome to terminal chat! <br />
          It's easy to get in. Just follow the instructions.
        </Text>
        
        <Row>
          <Field
            id="email"
            labelText="Enter your email"
            type="email"
            value={email ?? ''}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && validateEmail()}
            disabled={emailSubmitted}
          />
          {!emailSubmitted &&
            <ButtonContainer>
              <Button
                type="button"
                onClick={validateEmail}
                disabled={!isEmailValid}
              >
                Continue
              </Button>
            </ButtonContainer>
          }
        </Row>

        {emailSubmitted &&
          <Row>
            <Field
              id="password"
              labelText="Create a password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && submit()}
            />
            <ButtonContainer>
              <Button
                type="button"
                onClick={submit}
                disabled={!isPasswordValid}
              >
                Submit
              </Button>
            </ButtonContainer>
          </Row>
        }
      </ContainerBox>

      {!!email?.length && !isEmailValid && (
        <HintText>Email must be a valid email address</HintText>
      )}

      {!!password?.length && !isPasswordValid && (
        <HintText>
          Password must be at least 8 characters including a number, an 
          uppercase and lowercase letter.
        </HintText>
      )}

      {error && (
        <MessageBox color={Colors.error}>
          An error occurred while saving: {error}
        </MessageBox>
      )}
    </>
  )
}

export default Signup
