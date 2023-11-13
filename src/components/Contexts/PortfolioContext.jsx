import { createContext } from 'react'

export const PortfolioContext = createContext({})

export const PortfolioContextProvider = ({ children, value }) => (
  <PortfolioContext.Provider value={value}>
    {children}
  </PortfolioContext.Provider>
)