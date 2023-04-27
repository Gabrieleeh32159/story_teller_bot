import UserNavbarButton from "./UserNavbarButton"
import { Link } from "react-router-dom"

const Navbar = ({ user }) => (
    <nav className="h-[60px] flex justify-between text-2xl">
        <Link to="/"><img src="/src/assets/react.svg" alt="" className="py-2 px-3" /></Link>
        <div className="text-white h-full w-auto">
            <ul className="flex items-center h-full">
                <li className="hover:bg-slate-600 px-16 h-full flex justify-center items-center transition-all hover:cursor-pointer hover:underline"><Link to="/home">Home</Link></li>
                <li className="hover:bg-slate-600 px-16 h-full flex justify-center items-center transition-all hover:cursor-pointer hover:underline"><Link to="/create">Create</Link></li>
                <li className="hover:bg-slate-600 px-16 h-full flex justify-center items-center transition-all hover:cursor-pointer hover:underline"><Link to="/about">About Us</Link></li>
                <UserNavbarButton user={user} />
            </ul>
        </div>
    </nav>
)

export default Navbar