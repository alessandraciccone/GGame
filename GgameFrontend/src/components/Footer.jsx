const Footer = () => {
  return (
    <>
      <footer className="mt-20 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col items-center text-center">
            <h4 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_#00eaff]">
              GameDrop
            </h4>
            <p className=" text-gray-400 mt-2 max-w-md">
              {" "}
              Scopri il videogioco perfetto per te. <br /> Esperienza veloce,
              intuitiva e 100% gamimg vibes
            </p>
          </div>

          <div className="flex justify-center gap-8 mt-6 text-gray-300">
            <a href="#" className="hover:text-white transition">
              {" "}
              Contatti{" "}
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <a className="text-gray-400 hover:text-white transition" href="#">
              <i className="fa-brands fa-instagram text-xl">Facebook</i>
            </a>
            <a className="text-gray-400 hover:text-white transition" href="#">
              <i className="fa-brands fa-twitter text-xl">Instagram</i>
            </a>
            <a className="text-gray-400 hover:text-white transition" href="#">
              <i className="fa-brands fa-discord text-xl">Linkedin</i>
            </a>
          </div>

          <p className=" text-center text-gray-500 text-sm mt-8">
            @{new Date().getFullYear()} GameDrop-All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
