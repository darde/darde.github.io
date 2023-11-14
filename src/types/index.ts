export type CreditsProps = {
  author: string
  contact: string
  work: string
}

export type PortfolioDetailProps = {
  title: string
  videoUrl: string
  description: string
  liveAt?: string
  credits?: CreditsProps[]
} | null

export type PortfolioContextProps = {
  portfolioDetail: PortfolioDetailProps
  setPortfolioDetail: (portfolioDetail: PortfolioDetailProps) => void
}

export type PortfolioContextProviderProps = {
  children: React.ReactNode
  value: PortfolioContextProps
}
