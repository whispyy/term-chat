import { useContext } from "react"
import { UserContext } from "../../common/UserContext"

const useLogout = () => {
  const { setUser } = useContext(UserContext)
  const logout = () => {
    setUser()
    window.location.href = import.meta.env.VITE_LOGIN_URL
  }

  return {
    logout
  }
}

export default useLogout
