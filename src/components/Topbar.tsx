import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { CloseIcon, MenuIcon } from "./icons"
import { SoftwareEngineeringIcon } from "./icons/SoftwareEngineeringIcon"

export default function Topbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  function handleOnClick() {
    setOpen(!open)
  }

  return (
    <div
      className={`fixed top-0 ${
        open ? "h-[200px]" : "h-[70px]"
      } z-40 transition-all duration-300 w-full bg-sky-900 max-w-[1200px] md:pt-0 md:bg-sky-900 md:h-[70px] flex flex-row items-start md:items-center justify-end pr-[50px] pt-[15px] md:pr-[20px]`}
    >
      <div className="flex flex-row items-center gap-4 absolute left-[20px] top-[13px] md:top-auto">
        <div className="flex flex-col">
          <h1 className="text-[16px] float-left text-[yellowgreen] p-0 m-0">Pablo R. Darde</h1>
          <h2 className="text-[12px] float-left p-0 m-0 text-[yellowgreen]">Software Engineer</h2>
        </div>
        <SoftwareEngineeringIcon />
      </div>
      <ul
        id="menu"
        className={`relative ${
          open ? "flex" : "hidden"
        } md:flex flex-col pl-[20px] md:pl-0 gap-4 justify-start items-end md:flex-row  md:justify-center md:items-center`}
      >
        <li>
          <Link onClick={handleOnClick} to="/" className={`${location.pathname === "/" ? "active" : ""}`}>
            About me
          </Link>
        </li>
        <li>
          <Link
            onClick={handleOnClick}
            to="/experience"
            className={`${location.pathname === "/experience" ? "active" : ""}`}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            onClick={handleOnClick}
            to="/articles"
            className={`${location.pathname === "/articles" ? "active" : ""}`}
          >
            Articles
          </Link>
        </li>
        <li>
          <Link
            onClick={handleOnClick}
            to="portfolio"
            className={`${location.pathname === "/portfolio" ? "active" : ""}`}
          >
            Portfolio
          </Link>
        </li>
      </ul>
      <div className="pr-[20px] pt-[8px] md:hidden flex justify-end absolute right-0">
        <button onClick={handleOnClick} className="bg-sky-800/25 border-0 outline-0 shadow-none">
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  )
}
