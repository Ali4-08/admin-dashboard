import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

export default function ProductTable() {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);  
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("productsData")) || []);


  const filtered = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <div className="bg-white rounded-xl shadow mt-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
        <h2 className="text-xl font-semibold">Products</h2>

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
              <th className="px-4 py-3 border-b">Price</th>
              <th className="px-4 py-3 border-b">QTY</th>
            </tr>
          </thead>
          <tbody>

          {products.length === 0 && (
            <tr>
              <td className="text-gray-800 text-center"
              colSpan={"4"}>
                not products yet
              </td>
            </tr>
          )}

            {filtered.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 text-sm transition"
              >
                <td className="px-4 py-2 border-b">{product.id}</td>
                <td className="px-4 py-2 border-b">{product.name}</td>
                <td className="px-4 py-2 border-b">{product.price}</td>
                <td className="px-4 py-2 border-b">{product.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}