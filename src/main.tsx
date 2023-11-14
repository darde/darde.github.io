import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import App from "./App.jsx"
import About from "./components/About.jsx"
import Articles from "./components/Articles.jsx"
import { PortfolioContextProvider } from "./components/Contexts/PortfolioContext"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio.jsx"
import "./index.css"
import { PortfolioDetailProps } from "./types"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Route>
  )
)

const Main = () => {
  const [portfolio, setPortfolio] = useState<PortfolioDetailProps>(null)

  function setPortfolioDetail(portfolioData: PortfolioDetailProps) {
    setPortfolio(portfolioData)
  }

  return (
    <PortfolioContextProvider value={{ portfolioDetail: portfolio, setPortfolioDetail }}>
      <RouterProvider router={router} />
    </PortfolioContextProvider>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
