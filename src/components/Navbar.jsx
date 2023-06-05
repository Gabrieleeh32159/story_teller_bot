import UserNavbarButton from "./UserNavbarButton"
import { Link } from "react-router-dom"

const Navbar = ({ user, setUser }) => (
    <nav className="h-[60px] flex justify-between text-2xl">
        <Link to="/"><img src="/src/assets/react.svg" alt="" className="py-2 px-3" /></Link>
        <div className="text-white h-full w-auto">
            <ul className="flex items-center h-full">
                <Link to="/home" className="hover:bg-slate-600 px-16 h-full flex justify-center items-center transition-all hover:cursor-pointer hover:underline"><li>Home</li></Link>
                <Link to="/create" className="hover:bg-slate-600 px-16 h-full flex justify-center items-center transition-all hover:cursor-pointer hover:underline"><li>Create</li></Link>
                <Link to="/about" className="hover:bg-slate-600 px-16 h-full flex justify-center items-center transition-all hover:cursor-pointer hover:underline"><li>About Us</li></Link>
                <UserNavbarButton user={user} setUser={setUser} />
            </ul>
        </div>
    </nav>
)

export default Navbar