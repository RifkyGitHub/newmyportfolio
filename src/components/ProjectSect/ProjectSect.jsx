const ProjectSect = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-4">

      [txt]
      <h1 className="text-4xl font-bold text-center tracking-wider mb-14">
        <span className="text-red-500">My</span>{" "}
        <span className="text-gray-400">Project</span>
      </h1>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10">

        {/* ---- CARD 1 ---- */}
        <div className="w-[460px] bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
          <img
            src=""
            alt="project"
            className="w-full h-56 object-cover grayscale"
          />

          <div className="p-5">
            <h3 className="text-lg font-semibold">Portfolio Web Design</h3>

            <p className="text-sm text-red-500 mt-2 mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum
              vulputate nunc nec rutrum. Pellentesque odio neque, tincidunt ut euismod ut,
              porta rhoncus sem.
            </p>

            <a src="https://rifkygithub.github.io/portfolioreactjs10/" className="flex items-center gap-2 border border-red-300 text-red-500 px-4 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition">
             📁 View Project
            </a>
          </div>
        </div>

        {/* ---- CARD 2 ---- */}
        <div className="w-[460px] bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
          <img
            src="https://via.placeholder.com/600x300?text=Coming+Soon"
            alt="coming soon"
            className="w-full h-56 object-cover grayscale"
          />

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-500">Coming Soon</h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectSect;