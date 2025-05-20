import { useState } from "react";
import {
  GithubOutlined,
  LinkOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import portImage from "../../assets/portfolyo.png";
import ecommerceImage from "../../assets/portfolyo.png"; // Bu faylni qo'shing yoki boshqa rasm ishlating

const FeaturedProjects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "My Portfolio",
      description:
        "A modern portfolio website showcasing my projects and skills as a web developer. Features responsive design, dark mode, and interactive project displays.",
      link: "https://portfoliyo-git-master-azizbros-projects.vercel.app/",
      github: "https://github.com/Jakbaraliyevv/my-portfoliyo",
      tech: ["React", "Tailwind CSS", "Ant Design", "Vite"],
      imageUrl: portImage,
      featured: true,
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "A fully responsive e-commerce platform with product filtering, cart functionality, user authentication, and payment processing. Features an admin dashboard for product management.",
      link: "https://portfoliyo-git-master-azizbros-projects.vercel.app/",
      github: "https://github.com/Jakbaraliyevv/my-portfoliyo",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      imageUrl: ecommerceImage,
      featured: true,
    },
  ]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a0b2e]">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-16 z-10">
          <h1 className="text-5xl font-bold text-center text-[#FFF]">
            <span className="inline-block relative">
              <span className="relative z-10">Projects</span>
              <span
                className="absolute -inset-1 blur-lg bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-600 opacity-70"
                style={{ animation: "pulse 3s infinite" }}
              ></span>
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mt-4"></div>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Project Image */}
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

              {/* Project Content */}
              <div className="w-full md:w-1/2">
                <div className={`${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                  {project.featured && (
                    <span className="inline-block text-xs font-mono text-blue-400 mb-2">
                      Featured Project
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
                      href={project.github}
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
                      <LinkOutlined className="text-lg mr-2" />
                      <span>View Project</span>
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
