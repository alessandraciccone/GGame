import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const erroreData = await response.json();
        console.errore("Errore backend", erroreData);
        throw new Error("Errore nel Login");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setSuccessMessage("Login effettuato con successo");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className=" text-white text-lg font-semibold text-center">
            {" "}
            Login!
          </h2>

          {successMessage && (
            <div className="p-3 rounded-md bg-black border border-yellow-400 text-yellow-300 text-center animate-fadeIn shadow-[0_0_10px_#facc15]">
              {successMessage}
            </div>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md bg-white/5 px-3 py-2 text-white"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-md bg-white/5 px-3 py-2 text-white"
            required
          />
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-500 py-2 text-white font-semibold"
          >
            Vai! 🎮
          </button>
        </form>

        <p className=" text-center text-white mt-10">
          Non sei ancora registrato?{" "}
          <Link to="/registration" className="text-red-400">
            {" "}
            Registrati{" "}
          </Link>
        </p>
      </div>
    </>
  );
};
export default Login;
