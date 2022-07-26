import { useState } from "react"
import conversationsFixture from "./fixtures"


const useConversations = () => {
  const [loading, setLoading] = useState(false)
  const conversations = [...conversationsFixture]  

  return {
    conversations,
    loading,
  }
}

export default useConversations
