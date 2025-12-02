import Foto from "../../assets/fotopanda.jpeg"
const ContactSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#333] text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* Left Content */}
        <div className="flex flex-col">
          {/* Profile image */}
          <img
            src={Foto}
            alt="profile"
            className="w-28 h-28 object-cover rounded-full mb-5"
          />

          {/* Title */}
          <h2 className="text-4xl font-extrabold italic tracking-wide">
            <span className="text-yellow-400 drop-shadow-md">C</span>ontact{" "}
            <span className="text-yellow-400">Me</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-300 leading-relaxed max-w-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo 
            fuga officia illum nesciunt dolores facere quo aliquid. Dolor earum 
            itaque nihil aliquid aut quos nostrum modi autem in, accusamus accusantium.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://linkedin.com"
              className="flex items-center gap-2 bg-white text-yellow-500 px-5 py-2 rounded-full shadow hover:bg-yellow-400 hover:text-white transition"
            >
              <i className="fa-brands fa-linkedin text-lg"></i>
              Get in Touch
            </a>

            <a
              href="https://wa.me/628xxxxxxx"
              className="flex items-center gap-2 bg-white text-yellow-500 px-5 py-2 rounded-full shadow hover:bg-yellow-400 hover:text-white transition"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Whatsapp
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-xl p-7 text-gray-700 shadow-lg">
          <h3 className="text-center text-yellow-400 font-semibold mb-4">
            Let’s Stay Connected
          </h3>

          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name*"
              className="border border-yellow-400 px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-300 outline-none"
            />
            <input
              type="email"
              placeholder="Email ID*"
              className="border border-yellow-400 px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-300 outline-none"
            />
            <input
              type="text"
              placeholder="Phone No*"
              className="border border-yellow-400 px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-300 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Message*"
              className="border border-yellow-400 px-3 py-2 rounded-md focus:ring-2 focus:ring-yellow-300 outline-none"
            ></textarea>

            <button
              type="submit"
              className="mt-3 flex items-center justify-center gap-2 bg-yellow-400 text-white font-medium px-5 py-2 rounded-full hover:bg-yellow-500 transition shadow"
            >
              <i className="fa-solid fa-envelope-open-text"></i>
              Send email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
