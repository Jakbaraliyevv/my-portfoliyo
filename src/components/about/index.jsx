import { Link } from "react-scroll";

function AboutComponents({ til }) {
  const featuredProjects = [
    {
      title: "MyRobo",
      description:
        "React va JavaScript asosida ishlab chiqilgan IT Markazi uchun website",
      tags: ["React Vite", "Tailwind css", "Antd", "JavaScript"],
      link: "https://myrobo.uz/",
    },
    {
      title: "Register",
      description: "Raqamli avlod uchun register website",
      tags: [
        "React Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Antd",
        "JavaScript",
      ],
      link: "https://register-page-git-master-azizbros-projects.vercel.app/",
    },
  ];

  const featuredProjectsEN = [
    {
      title: "MyRobo",
      description:
        "A website developed for an IT Center based on React and JavaScript.",
      tags: ["React Vite", "Tailwind CSS", "Antd", "JavaScript"],
      link: "https://myrobo.uz/",
    },
    {
      title: "Register",
      description:
        "A registration website designed for the digital generation.",
      tags: [
        "React Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Antd",
        "JavaScript",
      ],
      link: "https://register-page-git-master-azizbros-projects.vercel.app/",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#1a0b2e] py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-fuchsia-600 blur-3xl"></div>
      </div>

      <div className="w-[90%] max-w-6xl m-auto flex flex-col gap-12 relative z-10">
        {/* Animated heading */}
        <div className="relative mb-12 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
            <span className="inline-block relative">
              <span className="relative z-10">
                {til === "en" ? "About Me" : "Men haqimda"}
              </span>
              <span
                className="absolute -inset-1 blur-lg bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-600 opacity-70 rounded-lg"
                style={{ animation: "pulse 3s infinite" }}
              ></span>
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content with animated reveal */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-200 text-lg leading-relaxed">
              {til === "en" ? "My full name is" : "Men"}
              <span className="text-white font-medium">
                {" "}
                Aziz Jakbaraliyev{" "}
              </span>
              {til === "en"
                ? " I am 19 years old. I studied in the Front-end ReactJS Bootcamp at Najot Ta'lim and I am currently working as a frontend developer."
                : "19 yoshdaman. Najot Ta'lim markazida Bootcamp Front-end ReactJSyo'nalishi bo'yicha tahsil olib, hozirda frontend dasturchisifatida faoliyat yuritmoqdaman."}
            </p>

            <p className="text-gray-200 text-lg leading-relaxed">
              {til === "en"
                ? "I enjoy creating modern, user-friendly, and visually appealing websites. Each project is a new opportunity for me to combine simplicity, beauty, and functionality."
                : " Men zamonaviy, foydalanuvchilar uchun qulay va go'zal veb-saytlaryaratishni yoqtiraman. Har bir loyiha men uchun yangi imkoniyat bo'lib, unda soddalik, go'zallik va funksionallikni uyg'unlashtirishga harakat qilaman."}
            </p>

            <div className="bg-gradient-to-r from-purple-900/50 to-fuchsia-900/50 p-6 rounded-xl border border-purple-900/30">
              <h3 className="text-xl font-semibold text-white mb-3">
                {til === "en" ? "My Work Process" : "Ish usulim"}
              </h3>
              <p className="text-gray-200">
                {til === "en"
                  ? "I value quality and modernity in every project, because user experience is the core of any great website. My aim is to create websites that are clean, elegant, and accessible to all."
                  : " Ishda sifat va zamonaviylikni ustun qo'yaman, chunki foydalanuvchi tajribasi har bir veb-saytning yurak qismi hisoblanadi. Mening maqsadim - har bir saytni oddiy, chiroyli va hamma uchun tushunarli qilish."}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {til === "en"
                  ? "Some of My Latest Work"
                  : "Yaqinda qilgan loyihalarim:"}
              </h3>
              <div className="space-y-6">
                {(til === "en" ? featuredProjectsEN : featuredProjects).map(
                  (project, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border border-purple-900/50 bg-gradient-to-b from-purple-900/20 to-fuchsia-900/10 p-6 transition-all hover:border-purple-500/50"
                    >
                      <h4 className="text-lg font-medium text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-300 text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-900/40 text-purple-200 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.link}
                        className="inline-flex items-center text-sm font-medium text-purple-300 hover:text-white transition-colors"
                      >
                        {til === "en" ? "View Details" : "Batafsil ko'rish"}
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="text-center pt-4">
              <Link
                to="projects" // This should match the Element name in Home component
                smooth={true}
                duration={500}
                offset={-70} // Adjust this if you have a fixed header
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer"
              >
                {til === "en" ? "See More" : "Batafsil ko'rish"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComponents;
