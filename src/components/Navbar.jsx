import { Menu, Bell, User, Moon, Sun, LogOut } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Navbar({onMenuClick}){

    const {darkmode, setDarkmode} = useTheme();
    const {logout} = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login", {replace: true});
    };

    return (
        <nav className="flex justify-between bg-white dark:bg-gray-800 dark:text-gray-100 p-4 shadow sticky top-0 z-10">

            <button className="md:hidden" onClick={onMenuClick}>
                <Menu className="w-6 h-6 text-gray-800 dark:text-gray-100"/>
            </button>

            <h1 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">Admin Dashboard</h1>

            <button 
            className="cursor-pointer rounded dark:hover:bg-gray-700 transition"
            onClick={() => setDarkmode(!darkmode)}>
                {darkmode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className="flex gap-2 items-center">
                <span title="logout">
                    <LogOut
                    className="h-5 w-5 text-gray-800 cursor-pointer dark:text-gray-100"
                    onClick={handleLogout}
                    />
                </span>
                
                <span title="notification">
                    <Bell className="h-5 w-5 text-gray-800 cursor-pointer dark:text-gray-100" />
                </span>
                <span title="users">
                    <User className="h-5 w-5 text-gray-800 cursor-pointer dark:text-gray-100" 
                    onClick={() => navigate("/users")}/>
                </span>
            </div>
        </nav>
    )
}