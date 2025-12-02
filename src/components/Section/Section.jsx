import Foto from "../../assets/fotopanda.jpeg"

const Section = () => {
  return (
    <section className="flex flex-col items-center text-center mt-10 px-5 mb-14">
      <div className="w-60 h-60 rounded-full overflow-hidden shadow-xl border-4 border-white">
        <img 
          src={Foto}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-4 mt-5">
        <div className="flex gap-4">
          <button className="relative overflow-hidden group inline-flex items-center px-4 py-1 border border-yellow-400 rounded-full text-yellow-500 text-sm">
            <span className="absolute inset-0 bg-yellow-200 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-200">Web Designer</span>
          </button>
        
          <button className="relative overflow-hidden group inline-flex items-center px-4 py-1 border border-yellow-400 rounded-full text-yellow-500 text-sm">
            <span className="absolute inset-0 bg-yellow-200 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-200">UI/UX Designer</span>
          </button>
        </div>

      </div>
      <h1 className="text-4xl font-bold font-bold text-yellow-400 mt-5">
        Rifky Himawan
      </h1>
      <p className="text-gray-500 max-w-xl mt-2 leading-relaxed">
        Whether you’re looking to discuss a new project, seek advice, or collaborate,
        I’m always excited to connect and explore new possibilities.
      </p>
  <a 
  href="https://linkedin.com"
  className="flex items-center 
             gap-2 mt-5 bg-white shadow px-4 py-2 
             rounded-full border text-yellow-500 
             transition-all duration-300 hover:scale-106 
             hover:shadow-yellow-400/60 hover:shadow-lg">
  LinkedIn
</a>



    </section>
  );
};

export default Section;
