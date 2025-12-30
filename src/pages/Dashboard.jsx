import { getProducts } from "../data/products";

function Dashboard() {
  const products = getProducts();

  const totalProducts = products.length;
  const totalStock = products.reduce((s, p) => s + p.stock, 0);
  const categories = new Set(products.map((p) => p.category)).size;
  const lowStockItems = products.filter((p) => p.stock < 20);

  return (
    <div className="p-6 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">
        Manager Dashboard 📊
      </h1>

      <p>• Total Products: {totalProducts}</p>
      <p>• Total Stock: {totalStock}</p>
      <p>• Categories: {categories}</p>

      <h2 className="mt-6 font-semibold">⚠️ Low Stock Items</h2>

      {lowStockItems.length === 0 ? (
        <p>All stocks healthy ✅</p>
      ) : (
        <ul className="list-disc ml-5">
          {lowStockItems.map((p) => (
            <li key={p.id}>
              {p.name} — {p.stock}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
