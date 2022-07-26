import styled from 'styled-components'
import Metrics from '../common/theme/Metrics'
import { Conversation } from '../common/models/conversation'
import { useContext } from 'react'
import { UserContext } from '../common/UserContext'
import { pagesMapping, RoutingContext } from '../common/Router'

const ConvItem = styled.li`
  display: flex;
  padding: ${Metrics.small}px;
  margin: ${Metrics.hairline}px;
  border: solid 1px white;

  &:hover {
    cursor: pointer;
  }
`

interface Props {
  conversation: Conversation
}

const Item = ({ conversation }: Props) => {
  const { participants } = conversation
  const { setActiveConversation } = useContext(UserContext)
  const { setPage } = useContext(RoutingContext)

  const openConversation = () => {
    setActiveConversation(conversation)
    setPage(pagesMapping.conversation)
  }

  return (
    <ConvItem onClick={openConversation}>{participants.map(({ phoneNumber }) => (
      <div key={phoneNumber}>{phoneNumber} &nbsp;</div>
    ))}</ConvItem>
  )
}

export default Item
