import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import App from './App.jsx';
import About from './components/About.jsx';
import Articles from './components/Articles.jsx';
import { PortfolioContextProvider } from './components/Contexts/PortfolioContext.jsx';
import Experience from './components/Experience.jsx';
import Portfolio from './components/Portfolio.jsx';
import './index.css';

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
  const [portfolio, setPortfolio] = useState(null)

  function setPortfolioDetail(content) {
    setPortfolio(content)
  }

  return (
    <PortfolioContextProvider value={{ content: portfolio, setPortfolioDetail }}>
      <RouterProvider router={router} />
    </PortfolioContextProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
