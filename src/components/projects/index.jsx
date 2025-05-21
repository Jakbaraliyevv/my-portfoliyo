import { useState } from "react";
import { GithubOutlined, ArrowRightOutlined } from "@ant-design/icons";
import robotks from "../../assets/robotics.png";
import regster from "../../assets/regster.png";
import quiz from "../../assets/quiz.png";
import onerRu from "../../assets/oner_ru.png";
import library from "../../assets/library.png";
import myRobo from "../../assets/myRobo.png";
const FeaturedProjects = ({ til }) => {
  const projects = [
    {
      id: 6,
      title: "MyRobo",
      description:
        "Veb-dasturchi sifatida loyihalarim va ko'nikmalarimni namoyish etuvchi zamonaviy  veb-sayti. Sayt moslashuvchan dizayn va interaktiv loyiha ko‘rinishlariga ega. ",
      link: "https://myrobo.uz/",
      github: "https://github.com/Jakbaraliyevv/MyRobo",
      tech: ["React + Vite", "Tailwind CSS", "Ant Design", "JavaScript"],
      imageUrl: myRobo,
      featured: true,
    },
    {
      id: 1,
      title: "Robotics",
      description:
        "Veb-dasturchi sifatida loyihalarim va ko'nikmalarimni namoyish etuvchi zamonaviy  veb-sayti. Sayt moslashuvchan dizayn va interaktiv loyiha ko‘rinishlariga ega. ",
      link: "https://test-project-git-master-azizbros-projects.vercel.app",
      github: "https://github.com/Jakbaraliyevv/test_project",
      tech: ["React + Vite", "Tailwind CSS", "Ant Design", "JavaScript"],
      imageUrl: robotks,
      featured: true,
    },

    {
      id: 2,
      title: "Raqamli avlod register",
      description:
        "Veb-dasturchi sifatida loyihalarim va ko'nikmalarimni namoyish etuvchi zamonaviy  veb-sayti. Sayt moslashuvchan dizayn va interaktiv loyiha ko‘rinishlariga ega. ",
      link: "https://register-page-git-master-azizbros-projects.vercel.app",
      github: "https://github.com/Jakbaraliyevv/register_page",
      tech: ["React + Vite", "Tailwind CSS", "Antd", "JavaScript"],
      imageUrl: regster,
      featured: true,
    },
    {
      id: 3,
      title: "Quiz",
      description:
        "Veb-dasturchi sifatida loyihalarim va ko'nikmalarimni namoyish etuvchi zamonaviy  veb-sayti. Sayt moslashuvchan dizayn va interaktiv loyiha ko‘rinishlariga ega. ",
      link: "https://my-first-project-quiz-git-master-azizbros-projects.vercel.app",
      github: "https://github.com/Jakbaraliyevv/MyFirstProject__Quiz",
      tech: ["React + Vite ", "Tailwind CSS", "Antd", "JavaScript"],
      imageUrl: quiz,
      featured: true,
    },

    {
      id: 4,
      title: "Oner.Ru",
      description:
        "Veb-dasturchi sifatida loyihalarim va ko'nikmalarimni namoyish etuvchi zamonaviy  veb-sayti. Sayt moslashuvchan dizayn va interaktiv loyiha ko‘rinishlariga ega. ",
      link: "https://oner-ru-git-master-azizbros-projects.vercel.app",
      github: "https://github.com/Jakbaraliyevv/oner__Ru",
      tech: ["React + vite", "Sass", "Antd", "JavaScript"],
      imageUrl: onerRu,
      featured: true,
    },
    {
      id: 5,
      title: "Library",
      description:
        "Veb-dasturchi sifatida loyihalarim va ko'nikmalarimni namoyish etuvchi zamonaviy  veb-sayti. Sayt moslashuvchan dizayn va interaktiv loyiha ko‘rinishlariga ega. ",
      link: "https://oner-ru-git-master-azizbros-projects.vercel.app",
      github: "https://github.com/Jakbaraliyevv/oner__Ru",
      tech: ["React + vite", "Sass", "Antd", "JavaScript"],
      imageUrl: library,
      featured: true,
    },
  ];

  const projectsEn = [
    {
      id: 6,
      title: "MyRobo",
      description:
        "A modern website showcasing my projects and skills as a web developer. The site features responsive design and interactive project displays.",
      link: "https://myrobo.uz/",
      github: "https://github.com/Jakbaraliyevv/MyRobo",
      tech: ["React + Vite", "Tailwind CSS", "Ant Design", "JavaScript"],
      imageUrl: myRobo,
      featured: true,
    },
    {
      id: 1,
      title: "Robotics",
      description:
        "A modern website showcasing my projects and skills as a web developer. The site features responsive design and interactive project displays.",
      link: "https://test-project-git-master-azizbros-projects.vercel.app",
      github: "https://github.com/Jakbaraliyevv/test_project",
      tech: ["React + Vite", "Tailwind CSS", "Ant Design", "JavaScript"],
      imageUrl: robotks,
      featured: true,
    },
    {
      id: 2,
      title: "Raqamli Avlod Register",
      description:
        "A modern website showcasing my projects and skills as a web developer. The site features responsive design and interactive project displays.",
      link: "https://register-page-git-master-azizbros-projects.vercel.app",
      github: "https://github.com/Jakbaraliyevv/register_page",
      tech: ["React + Vite", "Tailwind CSS", "Antd", "JavaScript"],
      imageUrl: regster,
      featured: true,
    },
    {
      id: 3,
      title: "Quiz",
      description:
        "A modern website showcasing my projects and skills as a web developer. The site features responsive design and interactive project displays.",
      link: "https://my-first-project-quiz-git-master-azizbros-projects.vercel.app",
      github: "https://github.com/Jakbaraliyevv/MyFirstProject__Quiz",
      tech: ["React + Vite", "Tailwind CSS", "Antd", "JavaScript"],
      imageUrl: quiz,
      featured: true,
    },
    {
      id: 4,
      title: "Oner.Ru",
      description:
        "A modern website showcasing my projects and skills as a web developer. The site features responsive design and interactive project displays.",
      link: "https://oner-ru-git-master-azizbros-projects.vercel.app",
      github: "https://github.com/Jakbaraliyevv/oner__Ru",
      tech: ["React + Vite", "Sass", "Antd", "JavaScript"],
      imageUrl: onerRu,
      featured: true,
    },
    {
      id: 5,
      title: "Library",
      description:
        "A modern website showcasing my projects and skills as a web developer. The site features responsive design and interactive project displays.",
      link: "https://oner-ru-git-master-azizbros-projects.vercel.app",
      github: "https://github.com/Jakbaraliyevv/oner__Ru",
      tech: ["React + Vite", "Sass", "Antd", "JavaScript"],
      imageUrl: library,
      featured: true,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a0b2e]">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-16 z-10">
          <h1 className="text-5xl font-bold text-center text-[#FFF]">
            <span className="inline-block relative">
              <span className="relative z-10">
                {til === "en" ? "Projects" : "Loyihalar"}
              </span>
              <span
                className="absolute -inset-1 blur-lg bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-600 opacity-70"
                style={{ animation: "pulse 3s infinite" }}
              ></span>
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mt-4"></div>
        </div>

        <div className="space-y-20">
          {(til === "en" ? projectsEn : projects).map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 relative group">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg shadow-xl"
                >
                  <div className="relative aspect-video">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-purple-900/50 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>
                </a>
              </div>

              <div className="w-full md:w-1/2">
                <div className={`${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                  {project.featured && (
                    <span className="inline-block text-xs font-mono text-blue-400 mb-2">
                      {til === "en"
                        ? "Featured Project"
                        : "Tanlangan loyihalar"}
                    </span>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div className="bg-gray-800/50 p-5 rounded-lg mb-4">
                    <p className="text-gray-300">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href={project?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub repository"
                    >
                      <GithubOutlined className="text-xl" />
                    </a>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                      aria-label="Live demo"
                    >
                      <span>
                        {til === "en" ? "View Project" : "Batafsil ko‘rish"}
                      </span>
                      <ArrowRightOutlined className="text-xs ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
