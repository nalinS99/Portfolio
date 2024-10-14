import { FaLinkedin, FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-Dark h-14 xl:h-28 md:h-28 sm:h-24 border-b-2 border-Teal flex justify-between items-center w-screen xl:p-10 md:p-8 xl:pl-20 sm:p-6 p-4">
      <div className="xl:block md:block sm:block hidden">
        <h1 className="text-Teal xl:text-2xl md:text-xl  ">
          &lt;H1&gt; <span className="text-white ">Nalin S Bandara</span>{" "}
          &lt;/H1&gt;
        </h1>
      </div>
      
      <div className="text-white flex items-center space-x-4 sm:space-x-3 xl:text-xl md:text-lg ">
        <a href="" className="text-Teal">
          Home
        </a>
        <a href="">Projects</a>
        <div className="flex items-center xl:space-x-2 xl:p-20 sm:p-4 space-x-2 md:ml-10">
          <FaLinkedin className="text-Teal xl:ml-0 md:ml-0 sm:ml-0 ml-48 " />
          <a className="xl:block md:block hidden" href="/">
            LinkedIn
          </a>
          <FaGithub className="text-Teal" />
          <a href="/" className="xl:block md:block hidden">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
