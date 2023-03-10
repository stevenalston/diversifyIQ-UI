import { Outlet } from "react-router-dom"
import { Navbar } from "./Nav/Navbar"

export const Layout = () => {
  return (
    <>
      <div className="mx-auto mt-14 w-11/12 flex flex-col">
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}