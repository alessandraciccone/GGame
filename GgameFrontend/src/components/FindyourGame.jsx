import { useState } from "react";

const moodToGenre = {
  felice: "mmorpg",
  triste: "social",
  arrabbiato: "shooter",
  annoiato: "racing",
  rilassato: "fantasy",
  stressato: "card",
  nostalgico: "pixel",
  carico: "action",
  spaventato: "horror",
};

const FindyourGame = () => {
  const [mood, setMood] = useState("");
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const genre = moodToGenre[mood.toLowerCase()] || "mmorpg";
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8080/proxy/games?category=${genre}`
      );
      const data = await response.json();
      setGames(data.slice(0, 10));
    } catch (error) {
      console.error("Errore nel recupero dati", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" max-w-3xl mx-auto mt-10 text-white px-4">
      <h2 className=" text-center text-2xl fondt-bold mb-6">
        Trova il tuo gioco ideale in base al tuo mood! 🎮
      </h2>

      <div className=" flex gap-4">
        <input
          type="text"
          placeholder="Scrivi qui il tuo mood!"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className=" flex-1 px-4 py-2  rounded-md font-semibold border border-green-600"
        />

        <button
          onClick={handleSearch}
          className="bg-black border border-purple-400 px-4 py-2 rounded-md font-semibold"
        >
          Cerca
        </button>
      </div>
      {loading && (
        <p className=" mt-6 text-center text-gray-400"> Caricamento</p>
      )}
      <div className=" mt-8 grid gap-6 ">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white/5 p-4 rounded-md shadow-md hover:bg-white/10 transition "
          >
            <h3 className=" text-lg font-bold text-indigo-300">
              {" "}
              {game.title}
            </h3>
            <p className=" text-sm text-gray-300"> {game.short_description}</p>
            <a
              href={game.game_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Gioca ora
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FindyourGame;
