type CardProps = {
  title: string
  imageSource: string
  styles?: {
    [key: string]: string | number
  }
  handleOnClick: (id: number) => void
  id: number
}

export default function Card({ title, imageSource, styles = {}, handleOnClick, id }: CardProps) {
  return (
    <article
      style={{ ...styles, backgroundImage: `url(${imageSource})`, backgroundSize: "cover" }}
      className="group relative w-[185px] shadow-card hover:shadow-card-hover h-[300px] bg-zinc-200 rounded-lg flex flex-col justify-start py-4 px-3 items-center text-white transition-all duration-300"
      onClick={() => handleOnClick(id)}
    >
      <div className="transition-all duration-300 group-hover:h-[50%] absolute w-full h-[100px] bg-red-900/90 rounded-md flex flex-col justify-around items-center pt-2 px-2 bottom-0 text-white">
        <h1 className="text-[18px] m-0 mb-1 text-center leading-6">{title}</h1>
      </div>
    </article>
  )
}
