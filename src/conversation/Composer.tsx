import { useState } from "react"
import styled from "styled-components"
import Input from "../common/forms/Input"
import { Metrics } from "../common/theme"

const ENTER_KEY_CODE = "Enter"

const Container = styled.div`
  position: absolute;
  bottom: ${Metrics.medium}px;
  left: ${Metrics.medium}px;
  right: ${Metrics.medium}px;
`

interface Props {
  addMessage: (text: string) => void
}
const Composer = ({ addMessage }) => {
  const [message, setMessage] = useState('')

  const handleKeyPress = (e) => {
    if (e.code === ENTER_KEY_CODE && !!message.trim().length) {
      addMessage(message.trim())
      setMessage('')
    }
  }
  return (
    <Container>
      <Input
        autoFocus
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </Container>
  )
}

export default Composer
