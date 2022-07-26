import styled from 'styled-components'
import useConversations from './hooks/useConversations'
import Metrics from '../common/theme/Metrics'
import Item from './Item'

const ConvList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${Metrics.small}px;
  color: white;
`

const List = () => {
  const { conversations } = useConversations()
  
  return (
    <ConvList>
      {conversations.map((conversation) => (
        <Item key={conversation._id} conversation={conversation} />
      ))}
    </ConvList>
  )
}

export default List
