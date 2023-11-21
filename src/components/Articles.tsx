import { onCLS, onFID, onLCP } from "web-vitals"
import { mediumUrls } from "../utils/data"

export default function Articles() {
  onCLS(console.log)
  onFID(console.log)
  onLCP(console.log)
  return (
    <div>
      <h1>Articles</h1>
      <p>
        Check out my articles in <a href="https://medium.com/@pablodarde">Medium.</a>
      </p>
      <div className="pt-[50px]">
        <ul>
          {mediumUrls.map((article) => (
            <li key={article.url} className="mb-5">
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
