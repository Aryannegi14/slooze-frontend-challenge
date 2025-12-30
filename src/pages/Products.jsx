import { useEffect, useState } from "react";
import {
  getProducts,
  addProduct,
  updateProduct,
  removeProduct,
} from "../data/products";

function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    setProducts([...getProducts()]);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.category) return;

    addProduct({
      name: form.name,
      category: form.category,
      price: Number(form.price),
      stock: Number(form.stock),
    });

    setProducts([...getProducts()]);
    setForm({ name: "", category: "", price: "", stock: "" });
  };

  const handleEdit = (product) => {
    const updatedStock = prompt(
      `Update stock for ${product.name}`,
      product.stock
    );
    if (updatedStock === null) return;

    updateProduct({
      ...product,
      stock: Number(updatedStock),
    });

    setProducts([...getProducts()]);
  };

  const handleRemove = (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    removeProduct(id);
    setProducts([...getProducts()]);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto font-sans">
      <h1 className="text-4xl font-semibold mb-8">Products</h1>

      {/* Add Product */}
      <form
        onSubmit={handleAdd}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-30 flex flex-wrap gap-4 items-end"      >
        <input
          name="name"
          placeholder="Product name"
          value={form.name}
          onChange={handleChange}
          className="p-3 border rounded w-48 dark:bg-gray-900"
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="p-3 border rounded w-48 dark:bg-gray-900"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="p-3 border rounded w-32 dark:bg-gray-900"
        />
        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          className="p-3 border rounded w-32 dark:bg-gray-900"
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Add Product
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow">
        <table className="w-full text-center border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-700 text-sm uppercase tracking-wide">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4">{p.category}</td>
                <td className="p-4">₹{p.price}</td>
                <td
                  className={`p-4 font-semibold ${
                    p.stock < 20 ? "text-red-500" : ""
                  }`}
                >
                  {p.stock}
                </td>
                <td className="p-4 flex justify-center gap-3">
                  <button
                    onClick={() => handleEdit(p)}
                    className="px-4 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemove(p.id)}
                    className="px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
