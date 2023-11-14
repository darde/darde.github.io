import { useContext } from "react"
import { portfolioUrls } from "../utils/data"
import Card from "./Card"
import { PortfolioContext } from "./Contexts/PortfolioContext"

export default function Portfolio() {
  const { setPortfolioDetail } = useContext(PortfolioContext)

  function handleOnClick(id: number) {
    const activeCard = portfolioUrls.find((card) => card.id === id)
    if (activeCard) {
      setPortfolioDetail({
        title: activeCard.title,
        videoUrl: activeCard.videoUrl,
        description: activeCard.description,
        liveAt: activeCard?.liveAt || "",
        credits: activeCard?.credits || [],
      })
    }
  }

  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        During my carrer as software engineer I built a lot of systems. Most of them are private systems and I can't
        expose them here. On the other hand, I also built lots of personal projects to help me learn new technologies.
      </p>
      <div className="flex flex-row justify-center flex-wrap pt-5 gap-6 h-auto">
        {portfolioUrls.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              imageSource={item.imageSource}
              title={item.title}
              handleOnClick={handleOnClick}
            />
          )
        })}
      </div>
    </div>
  )
}
