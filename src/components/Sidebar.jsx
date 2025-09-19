import { Link } from "react-router-dom";
import { LayoutDashboard, Package, Users, Settings, X, Shield } from "lucide-react";
import { useAuth } from "../context/AuthContext";


export default function Sidebar({ isOpen, isClose }) {

  const {user} = useAuth();

  // const user = JSON.parse(localStorage.getItem("authUser"));
  const isAdmin = user?.role === "admin";


  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
          onClick={isClose}
        ></div>
      )}

      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white dark:bg-gray-800 dark:text-gray-100 shadow-md fixed top-0 left-0 h-full w-64 border-r border-r-gray-200 z-20 md:translate-x-0 transition`}
      >
        <div className="bg-white dark:bg-gray-800 flex items-center justify-between border-b border-b-gray-200 p-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Menu</h1>

          <button className="md:hidden" onClick={isClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="space-y-2 mt-8">


          {isAdmin && (
            <Link
            to="/admin-panel"
            className="flex gap-3 items-center font-semibold py-2 px-3 rounded hover:bg-gray-200 transition"
          >
            <Shield className="h-5 w-5" />
            Admin Panel
          </Link>
          )}

          <Link
            to="/dashboard"
            className="flex gap-3 items-center font-semibold py-2 px-3 rounded hover:bg-gray-200 transition"
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>

          <Link
            to="/users"
            className="flex gap-3 items-center font-semibold py-2 px-3 rounded hover:bg-gray-200 transition"
          >
            <Users className="h-5 w-5" />
            Users
          </Link>

          <Link
            to="/products"
            className="flex gap-3 items-center font-semibold py-2 px-3 rounded hover:bg-gray-200 transition"
          >
            <Package className="h-5 w-5" />
            Products
          </Link>

          <Link
            to="/settings"
            className="flex gap-3 items-center font-semibold py-2 px-3 rounded hover:bg-gray-200 transition"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>

         

      </aside>
    </>
  );
}
