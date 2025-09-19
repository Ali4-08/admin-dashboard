import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {login} = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("enter password or email");
      return;
    } else {
      const role = email === "admin@mail.com" ? "admin" : "user";
      const token = "fake-jwt-123456";
      const userData = {email, role, token};
      
      login(userData);
      
      navigate("/dashboard");
      setError("");
    }
  };

  return (
    <div className="flex items-center justify-center bg-white dark:bg-gray-800 transition">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-300 dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@mail.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          login
        </button>
      </form>
    </div>
  );
}
