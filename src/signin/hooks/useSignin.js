import { useState } from 'react'
import { passwordRegex } from '../../common/utils'


const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const submit = ({ email, password }) => {
    setError()
    const isPasswordValid = password.length > 8 && passwordRegex.test(password)

    setLoading(true)
    if (isPasswordValid) {
      alert(`signin sent for ${email}:${password}`)
    } else {
      setError('error message')
    }
    setLoading(false)
  }

  return {
    submit,
    loading,
    error,
  }
}

export default useSignup