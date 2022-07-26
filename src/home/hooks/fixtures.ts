import { Conversation } from "../../common/models/conversation";

const conversationsFixture: Conversation[] = [
  {
    _id: 'A_CONVERSATION',
    participants: [
    {
      _id: 'A_PARTICIPANT',
      phoneNumber: '123',
    },
    {
      _id: 'ANOTHER_PARTICIPANT',
      phoneNumber: '456',
    },
  ]
},
{
  _id: 'ANOTHER_CONVERSATION',
  participants: [
    {
      _id: 'A_PARTICIPANT',
      phoneNumber: '123',
    },
    {
      _id: 'ANOTHER_PARTICIPANT',
      phoneNumber: '789',
    },
  ]
}
]

export default conversationsFixture
