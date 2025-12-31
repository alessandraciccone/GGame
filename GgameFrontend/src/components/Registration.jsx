import { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    nome: "",
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
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Errore backend:", errorData);
        throw new Error("Errore nella registrazione");
      }

      const data = await response.json();

      localStorage.setItem("token", data.token);
      console.log("Utente:", data.user);

      setSuccessMessage("Registrazione completata con successo!");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-white text-lg font-semibold">Registrati!</h2>

        {successMessage && (
          <div className="p-3 rounded-md bg-green-600 text-white text-center">
            {successMessage}
          </div>
        )}

        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          className="w-full rounded-md bg-white/5 px-3 py-2 text-white"
          required
        />

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
          Registrati
        </button>
      </form>
    </div>
  );
};

export default Registration;
