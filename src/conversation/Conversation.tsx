import { useContext, useRef } from "react"
import styled from "styled-components"
import { UserContext } from "../common/UserContext"
import Composer from "./Composer"
import useMessages from "./hooks/useMessages"
import MessagesList from "./MessagesList"

const Title = styled.h3`
  color: white;
`

const Conversation = () => {
  const { activeConversation } = useContext(UserContext)
  const { messages, messagesQueue, addMessage } = useMessages({ conversationId: activeConversation?._id })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Title>Conversation {activeConversation?.participants[0]?.phoneNumber ?? 'New'}</Title>

      <MessagesList messages={messages} messagesQueue={messagesQueue}>
        <div ref={messagesEndRef} />
      </MessagesList>

      <Composer addMessage={(text) => {
        addMessage(text)
        setTimeout(() => {
          messagesEndRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' })
        })
      }} />
    </>
  )
}

export default Conversation
