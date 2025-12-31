import gameSfondo from "../assets/img/gameSfondo.png";
const Homepage = () => {
  return (
    <>
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
