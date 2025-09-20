import { useState } from "react";
import { ArrowUpDown } from "lucide-react";


export default function UserTable() {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);  
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("users")) || []);


  const filtered = userData
    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <div className="bg-white rounded-xl shadow mt-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
        <h2 className="text-xl font-semibold">Users</h2>

        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          className="border rounded-lg text-sm px-3 py-2 focus:outline-blue-500"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-left rounded-lg dark:bg-gray-800 dark:text-gray-100">
          <thead className="bg-gray-100 text-gray-700 text-sm dark:bg-gray-800 dark:text-gray-100">
            <tr>
              <th className="px-4 py-3 border-b">ID</th>
              <th className="px-4 py-3 border-b">
                <button
                  className="flex items-center gap-1"
                  onClick={() => setSortAsc(!sortAsc)}
                >
                  Name <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
              <th className="px-4 py-3 border-b">Email</th>
              <th className="px-4 py-3 border-b">Role</th>
            </tr>
          </thead>
          <tbody>

          {userData.length === 0 && (
            <tr>
              <td className="text-gray-800 text-center"
              colSpan={"4"}>
                not users yet
              </td>
            </tr>
          )}

            {filtered.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 text-sm transition"
              >
                <td className="px-4 py-2 border-b">{user.id}</td>
                <td className="px-4 py-2 border-b">{user.name}</td>
                <td className="px-4 py-2 border-b">{user.email}</td>
                <td className="px-4 py-2 border-b">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


