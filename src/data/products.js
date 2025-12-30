let products = [
  {
    id: 1,
    name: "Wheat",
    category: "Grains",
    price: 40,
    stock: 120,
  },
  {
    id: 2,
    name: "Rice",
    category: "Grains",
    price: 55,
    stock: 200,
  },
  {
    id: 3,
    name: "Sugar",
    category: "Essentials",
    price: 45,
    stock: 90,
  },
  {
    id: 4,
    name: "Salt",
    category: "Essentials",
    price: 20,
    stock: 15,
  },
];

// 👉 Fake backend API
export const getProducts = () => products;

export const addProduct = (product) => {
  products.push({
    ...product,
    id: Date.now(),
  });
};

export const updateProduct = (updatedProduct) => {
  products = products.map((p) =>
    p.id === updatedProduct.id ? updatedProduct : p
  );
};

export const removeProduct = (id) => {
  products = products.filter((p) => p.id !== id);
};
