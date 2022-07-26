import React, { useEffect, useRef, useState, useMemo, createContext } from 'react'

export const pagesMapping = { 
  home: 'term-chat/',
  conversation: 'term-chat/conversation',
  signin: 'term-chat/signin',
  signup: 'term-chat/signup',
  logout: 'term-chat/logout',
}

export const RoutingContext = createContext({ page: pagesMapping.home, setPage: (page: string) => {} })

export default function Router({ children }) {
  const isInitialMount = useRef(true);

  let urlPath = window.location.pathname.slice(1).toLowerCase()

  const [page, setPage] = useState(urlPath || pagesMapping.home)

  const value = useMemo(
    () => ({ page, setPage }), 
    [page, setPage]
  )

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      const url = `${window.location.origin}/${page}`
      window.history.pushState({}, '', url)
    }
  }, [page])
  
  return (
    <RoutingContext.Provider value={value}>
      {children}
    </RoutingContext.Provider>
  )
}
