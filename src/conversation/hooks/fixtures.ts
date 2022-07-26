import { Message, MessageStatus } from "../../common/models/message";
import conversationsFixture from "../../home/hooks/fixtures";

const messagesFixtures: Message[] = [
  {
    id: '1',
    timestamp: new Date(),
    message: 'Hello, this is the first message',
    author: '123',
    authorDetail: conversationsFixture[0].participants[0],
    conversationId: conversationsFixture[0]._id,
    status: MessageStatus.Success,
  },
  {
    id: '2',
    timestamp: new Date(),
    message: 'Hello, this is a second message',
    author: '123',
    authorDetail: conversationsFixture[0].participants[0],
    conversationId: conversationsFixture[0]._id,
    status: MessageStatus.Success,
  },
  {
    id: '3',
    timestamp: new Date(),
    message: 'Hello, this is my respond',
    author: '456',
    authorDetail: conversationsFixture[0].participants[1],
    conversationId: conversationsFixture[0]._id,
    status: MessageStatus.Success,
  },
]

export default messagesFixtures
