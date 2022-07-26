import { useRef } from "react"
import styled from "styled-components"
import { Message } from "../common/models/message"
import { Metrics } from "../common/theme"
import MessageItem from "./MessageItem"

const List = styled.div`
  margin-bottom:  ${Metrics.xlarge}px;
  align-self: flex-start;
  flex: 1 1 0;
  overflow-y: auto;
  min-height: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Item = styled.div`
  color: white;
  padding: ${Metrics.small}px ${Metrics.medium}px;
`

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const Author = styled.div`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const MessageText = styled.div``

interface Props {
  messages: Message[]
  messagesQueue: Message[]
  children: React.ReactNode
}

const MessagesList = ({ messages, messagesQueue, children }: Props) => {

  return (
    <List>
      {messages.map((message) => (
        <MessageItem message={message} />
      ))}

      {messagesQueue.map((message) => (
        <MessageItem message={message} />
      ))}

      {children}
    </List>
  )
}

export default MessagesList
