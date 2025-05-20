import {
  GithubOutlined,
  LinkedinOutlined,
  //   TelegramOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { BsTelegram } from "react-icons/bs";
const ContactSection = () => {
  return (
    <section
      id="contact"
      className=" py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-16 z-10">
          <h1 className="text-5xl font-bold text-center text-[#FFF]">
            <span className="inline-block relative">
              <span className="relative z-10">Bog'lanish</span>
              <span
                className="absolute -inset-1 blur-lg bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-600 opacity-70"
                style={{ animation: "pulse 3s infinite" }}
              ></span>
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-300 mb-6">
              I'm interested in freelance opportunities and collaboration. Feel
              free to reach out if you have any questions or just want to
              connect.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-gray-700 p-2 rounded-full mr-4">
                  <BsTelegram className="text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Telegram</p>
                  <a
                    href="https://t.me/Jakbaraliyev29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    @Jakbaraliyev29
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gray-700 p-2 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="tel:+998901234567"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    +998 90 200 64 69
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
            <p className="text-gray-300 mb-6">
              Connect with me on social media to stay updated with my latest
              projects and posts.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/jakbaraliyevv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <GithubOutlined className="text-xl mr-2" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aziz-jakbaraliyev-47a7a0310/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <LinkedinOutlined className="text-xl mr-2 text-blue-500" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://instagram.com/_1.jakbaraliyev_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <InstagramOutlined className="text-xl mr-2 text-pink-500" />
                <span>Instagram</span>
              </a>

              <a
                href="https://t.me/Jakbaraliyev29"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <BsTelegram className="text-xl mr-2 text-blue-400" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-4">My Resume</h3>
            <p className="text-gray-300 mb-6 flex-grow">
              Download my resume to learn more about my professional experience,
              skills, and education.
            </p>

            <a
              href="/Aziz-Jakbaraliyev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              See Resume
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
