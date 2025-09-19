import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";


import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";


import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import AdminPanel from "./pages/AdminPanel";




function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);



  return (
   <BrowserRouter>
     <div className="flex dark:bg-gray-800 dark:text-gray-100">

      <Sidebar isOpen={sidebarOpen} isClose={() => setSidebarOpen(false)}/>

      <div className="flex-1 md:ml-64">
        <Navbar onMenuClick={() => setSidebarOpen(true)}/>
       
       <div className="p-6 min-h-[calc(100vh-3.75rem)]">
        <Routes>
          
          <Route path="/" element={ 
            <Navigate to={"/login"} />
          } />

          <Route path="/login" element={ 
            <Login />
          } />    

          <Route path="/admin-panel" element={
            <ProtectedRoute requiredRole={"admin"}>
              <AdminPanel />
            </ProtectedRoute>
          } />

          <Route path="/dashboard" element={ 
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />

          <Route path="/users" element={ 
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          } />

          <Route path="/settings" element={ <Settings />} />

          <Route path="/products" element={ 
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          } />

       </Routes>
       </div>
      </div>
    </div>
   </BrowserRouter>
  );
}

export default App;
