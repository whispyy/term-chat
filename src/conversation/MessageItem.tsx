import styled from "styled-components"
import { Message, MessageStatus } from "../common/models/message"
import { Metrics } from "../common/theme"


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
  message: Message
}

const MessageItem = ({ message }: Props) => {

  return (
    <Item key={message.id}>
      <FirstRow>
        <Author>From: {message.author} {message.status === MessageStatus.Pending && <>✈️</>}</Author>
        <div>{new Date(message.timestamp).toLocaleString()}</div>
      </FirstRow>
      <MessageText>{message.message}</MessageText>
    </Item>
  )
}

export default MessageItem
