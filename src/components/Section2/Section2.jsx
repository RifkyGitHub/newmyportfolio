

const MySkills = () => {
  return (
    <section className="w-full min-h-[70vh] bg-[#2f2f2f] px-8 md:px-20 py-20 flex flex-col items-center">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-16 text-center">
        <span className="font-faster text-transparent bg-gradient-to-r from-pink-400 via-gray-200 to-gray-400 bg-clip-text italic tracking-wide">
          My Skills
        </span>
      </h1>

      {/* MAIN WRAPPER */}
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-20">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-12 w-full md:w-1/2 max-w-[400px]">

          {/* ITEM 1 */}
          <div>
            <p className="text-gray-200 text-lg font-semibold tracking-wide">
              Web Designer
            </p>
            <div className="w-44 border-b-2 border-pink-400 mt-2"></div>
          </div>

          {/* ITEM 2 */}
          <div>
            <p className="text-gray-200 text-lg font-semibold tracking-wide">
              UI/UX Designer
            </p>
            <div className="w-44 border-b-2 border-pink-400 mt-2"></div>
          </div>

        </div>

        {/* RIGHT SIDE — LOGO BOX */}
        <div className="bg-[#3b3b3b] border border-[#4a4a4a] rounded-3xl p-8 w-[300px] h-[240px] flex justify-center items-center">
          <div className="flex flex-col gap-5 text-white">

            {/* Row 1 */}
            <div className="flex items-center gap-6 text-4xl">
              <i className="devicon-html5-plain" />
              <i className="devicon-css3-plain" />
              <i className="devicon-javascript-plain" />
            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-6 text-4xl">
              <i className="devicon-react-original" />
              <i className="devicon-tailwindcss-plain" />
              <i className="devicon-figma-plain" />
            </div>

            {/* Row 3 */}
            <div className="flex justify-center text-4xl pt-1">
              <i className="devicon-wordpress-plain" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MySkills;

