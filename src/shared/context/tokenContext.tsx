import React from "react"
import { useToken } from "../../hooks/useToken";

export const tokenContext = React.createContext('')

export const TokenContextProvider = ({children}: {children: React.ReactNode}) => {
  const [data] = useToken();

  return (
    <tokenContext.Provider value={data}>
    {children}
    </tokenContext.Provider>
  )
}
