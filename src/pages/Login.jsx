import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
  e.preventDefault();

  if (email === "manager@gmail.com" && password === "manager") {
    login({ user: { email, role: "manager" } });
    navigate("/dashboard");
  } else if (email === "keeper@gmail.com" && password === "keeper") {
    login({ user: { email, role: "store-keeper" } });
    navigate("/products");
  } else {
    alert("Invalid credentials 😭");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded shadow w-80"
      >
        <h2 className="text-2xl mb-4 text-center">Login</h2>

        <input
          className="w-full mb-3 p-2 border"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-4 p-2 border"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-black text-white py-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
