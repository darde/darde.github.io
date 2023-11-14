import { createContext } from "react"
import { PortfolioContextProps, PortfolioContextProviderProps } from "../../types"

const initialState: PortfolioContextProps = {} as PortfolioContextProps

export const PortfolioContext = createContext(initialState)

export const PortfolioContextProvider = ({ children, value }: PortfolioContextProviderProps) => (
  <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>
)
