import { useEffect, useState } from "react"
import { CloseIcon, SpinnerIcon } from "../components/icons"
import { CreditsProps } from "../types"

type CardDetailProps = {
  url: string
  title: string
  content: string
  liveAt?: string
  credits?: CreditsProps[]
  onClose: () => void
}

export default function CardDetail({ url, title, content, liveAt = "", onClose, credits = [] }: CardDetailProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (url) {
      setLoading(true)
    }
  }, [url])

  console.log(credits.length)
  return (
    <div className="relative w-full max-w-[900px] h-full sm:h-[600px] sm:pb-3 bg-black/80 rounded-xl">
      <div className="absolute right-0 p-3">
        <button className="bg-zinc-500/50 p-1 rounded" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <article className="flex flex-col px-[50px] pt-[30px] justify-start items-center w-full h-full">
        <h1 className="mb-2">{title}</h1>
        <p className="text-[18px] text-center mb-4">{content}</p>
        {credits.length > 0 && (
          <ul className="mb-2">
            {credits.map((item) => (
              <li key={item.author} className="mb-2">
                <p className="text-sm m-0">
                  <a href={item.contact} className="text-sm">
                    {item.author}
                  </a>
                  : {item.work}
                </p>
              </li>
            ))}
          </ul>
        )}
        {liveAt && (
          <p>
            Live at:{" "}
            <a href={liveAt} target="blank">
              {liveAt}
            </a>
          </p>
        )}
        {url && loading && (
          <div className="relative top-[170px]">
            <SpinnerIcon />
          </div>
        )}
        <iframe
          onLoad={() => setLoading(false)}
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mt-[20px]"
        ></iframe>
      </article>
    </div>
  )
}
