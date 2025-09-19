import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("productsData")) || []
  );
  const [isEditId, setIsEditId] = useState(null);
  const [form, setForm] = useState({ name: "", price: "", qty: "" });

  useEffect(() => {
    localStorage.setItem("productsData", JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((!form.name || !form.price, !form.qty)) return;

    if (isEditId) {
      setProducts(
        products.map((product) =>
          product.id === isEditId
            ? { ...product, name: form.name, price: form.price, qty: form.qty }
            : product
        )
      );

      setIsEditId(null);
    } else {
      const newProduct = {
        id: Date.now(),
        name: form.name,
        price: form.price,
        qty: form.qty,
      };
      setProducts([...products, newProduct]);
    }

    setForm({ name: "", price: "", qty: "" });
  };

  const handleDelete = (id) => {
    if (confirm("are you sure ?")) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  const handleEdit = (product) => {
    setIsEditId(product.id);
    setForm({ name: product.name, price: product.price, qty: product.qty });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Products Management</h2>

      <form
        className="flex flex-col sm:flex-row gap-4 mb-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="product name..."
          className="border rounded flex-1 px-4 py-2 focus:outline-gray-400"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="product price..."
          className="border rounded flex-1 px-4 py-2 focus:outline-gray-400"
          name="price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="product qty..."
          className="border rounded flex-1 px-4 py-2 focus:outline-gray-400"
          name="qty"
          value={form.qty}
          onChange={handleChange}
        />

        <button
          type="submit"
          className={`${
            isEditId
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-500 hover:bg-blue-600"
          } rounded text-white px-4 py-2 transition`}
        >
          {isEditId ? "Edit" : "Add"}
        </button>
      </form>

      <table className="min-w-full border border-gray-200 text-left rounded-lg dark:bg-gray-800 dark:text-gray-100">
        <thead className="bg-gray-100 text-gray-700 text-sm dark:bg-gray-800 dark:text-gray-100">
          <tr>
            <th className="px-4 py-3 border-b">ID</th>
            <th className="px-4 py-3 border-b">Name</th>
            <th className="px-4 py-3 border-b">Price</th>
            <th className="px-4 py-3 border-b">QTY</th>
            <th className="px-4 py-3 border-b">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 && (
            <tr className="text-center text-gray-500 text-sm">
              <td colSpan={5}>not products yet</td>
            </tr>
          )}

          {products.map((product) => (
            <tr
              key={product.id}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 text-sm transition"
            >
              <td className="px-4 py-2 border-b">{product.id}</td>
              <td className="px-4 py-2 border-b">{product.name}</td>
              <td className="px-4 py-2 border-b">{product.price}</td>
              <td className="px-4 py-2 border-b">{product.qty}</td>
              
              <td className="px-4 py-2 border-b space-x-2">
                <button className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-1"
                onClick={() => handleDelete(product.id)}>
                    Delete
                </button>

                <button className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-1"
                onClick={() => handleEdit(product)}>
                    Edit
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
