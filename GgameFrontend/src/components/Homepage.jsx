import gameSfondo from "../assets/img/gameSfondo.png";
import "../css/Homepage.css";
const Homepage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-white text-center mt-6 typing">
        Game Drop
      </h1>
      <p className="text-gray-400 text-center text-xl mt-6">
        Benvenuto! pronto a scoprire il video game adatto a te? <br />{" "}
        Registrati, compila il tuo profilo e scrivi come ti senti e <br /> ti
        proporremo una serie di video giochi!
      </p>
      <div className="flex justify-center items-center">
        <img alt="Sfondo" src={gameSfondo} className="w-auto" />
      </div>{" "}
    </>
  );
};

export default Homepage;
