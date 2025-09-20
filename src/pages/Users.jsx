import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [isEditId, setIsEditId] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.role) return;

    if (isEditId) {
      setUsers(
        users.map((user) =>
          user.id === isEditId
            ? { ...user, name: form.name, email: form.email, role: form.role }
            : user
        )
      );
      setIsEditId(null);
    } else {
      const newUser = {
        id: Date.now(),
        name: form.name,
        email: form.email,
        role: form.role,
      };
      setUsers([...users, newUser]);
    }

    setForm({ name: "", email: "", role: "" });
  };

  const handleEdit = (user) => {
    setIsEditId(user.id);
    setForm({ name: user.name, email: user.email, role: user.role });
  };

  const handleDelete = (id) => {
    if (confirm("are you sure ?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Users Management</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="enter name..."
          className="border rounded px-4 py-2 flex-1 focus:outline-gray-400"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="enter email..."
          className="border rounded px-4 py-2 flex-1 focus:outline-gray-400"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="enter role..."
          className="border rounded px-4 py-2 flex-1 focus:outline-gray-400"
          name="role"
          value={form.role}
          onChange={handleChange}
        />

        <button
          className={`${
            isEditId
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-500 hover:bg-blue-600"
          } rounded text-white px-4 py-1 transition`}
          type="submit"
        >
          {isEditId ? "Edit" : "Add"}
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-center sm:text-left rounded-lg dark:bg-gray-800 dark:text-gray-100">
          <thead className="bg-gray-100 text-gray-700 text-sm dark:bg-gray-800 dark:text-gray-100">
            <tr>
              <th className="sm:px-4 py-3 border-b">ID</th>
              <th className="px-1 sm:px-4 py-3 border-b">Name</th>
              <th className="sm:px-4 py-3 border-b">Email</th>
              <th className="sm:px-4 py-3 border-b">Role</th>
              <th className="sm:px-4 py-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && (
              <tr className="text-center text-gray-500 text-sm">
                  <td colSpan={5}>
                      not users yet
                  </td>
              </tr>
            )}
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 text-sm transition"
              >
                <td className="sm:px-4 py-2 border-b">{user.id}</td>
                <td className="sm:px-4 py-2 border-b">{user.name}</td>
                <td className="sm:px-4 py-2 border-b">{user.email}</td>
                <td className="sm:px-4 py-2 border-b">{user.role}</td>
        
                <td className="px-4 py-2 border-b space-x-2">
                  <div className="flex flex-col sm:flex-row gap-1">
                    <button className="bg-red-500 hover:bg-red-600 text-white rounded w-[70px] py-1"
                  onClick={() => handleDelete(user.id)}>
                      Delete
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white rounded w-[70px] py-1"
                  onClick={() => handleEdit(user)}>
                      Edit
                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
