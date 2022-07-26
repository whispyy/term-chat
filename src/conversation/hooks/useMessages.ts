import { useState } from "react"
import { Message, MessageStatus } from "../../common/models/message"
import messagesFixtures from "./fixtures"

interface Props {
  conversationId?: string
}

const useMessages = ({ conversationId }: Props) => {
  const messages = conversationId ? [...messagesFixtures] : []
  const [messagesQueue, setMessagesQueue] = useState<Message[]>([])

  const addMessage = (messageText: string) => {
    setMessagesQueue((old) => [...old, {
      conversationId: conversationId ?? '',
      message: messageText,
      timestamp: new Date(),
      status: MessageStatus.Pending,
      id: Date.now().toString(), // server will generate it
      author: '123', // server could add it
    }])

    //submit to BE, when submitted remove it from the queue
  }
  return {
    messages,
    messagesQueue,
    addMessage,
  }
}

export default useMessages
