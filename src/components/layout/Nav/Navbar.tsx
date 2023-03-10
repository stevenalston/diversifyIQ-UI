import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="z-10 py-2 px-6 bg-iqblack-800">
      <div className="flex items-center">
        <Link className="mr-8" to="/">
          <h3 className="text-iqteal-400 text-md tracking-[0.75px]">Diversify<span className="font-bold text-amber-400">IQ</span></h3>
        </Link>
        <div className="flex ml-8 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 justify-between text-iqgold-100 text-sm">
          <Link to='/philosophy'>
            Our Philosophy
          </Link>
          <Link to='/demo'>
            App Demo
          </Link>
          <Link to='/team'>
            Our Team
          </Link>
        </div>

        <div className="flex justify-end ml-auto md:w-1/3 lg:w-1/4 text-iqgold-100 text-sm items-center">
          <Link className="py-1 px-4 font-bold bg-iqgold-100 text-iqblack-800 rounded-l" to='/sign-up'>
            Sign up
          </Link>
          <Link className="py-[3.5px] px-4 font-bold text-iqgold-100 rounded-r border-[0.5px] border-iqgold-100" to='/register'>
            Register
          </Link>
        </div>
        
      </div>
    </nav>
  )
}