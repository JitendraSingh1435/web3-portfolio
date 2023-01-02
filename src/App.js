import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import jeet from "./images/jeet.jpg";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex items-center flex-col justify-center w-auto min-h-screen bg-primary pb-20">
      {/* Navigate Bar */}

      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center ">
          <p className="text-lg text-slate-200 font-medium"> Jitendra Singh </p>

          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a
              href="#home"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Contact
            </a>

            <a
              href="#"
              className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-400"
            >
              Donwnload
            </a>
          </div>

          <div
            className="block md:hidden ml-auto cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <IoMenu className="text-2xl text-textBase hover:text-white" />
          </div>

          {isActive && (
            <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                Home
              </a>

              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                About
              </a>

              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                Contact
              </a>

              <a
                href="#"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-400"
                onClick={() => setIsActive(false)}
              >
                Donwnload
              </a>
            </div>
          )}
        </div>
      </nav>

      <div className="relative w-full h-850 mt-24" id="home">
        <Spline
          className=""
          scene="https://prod.spline.design/mVDC1RT5nPaPiyOg/scene.splinecode"
        />

        <div className="absolute -mt-16 buttom-10 w-full justify-center items-center flex">
          <div className="shadow-md p-0 flex items-center justify-center bg-zinc-900 rounded-3xl">
            <p className="text-white"> Press and drag to orbit </p>
          </div>
        </div>
      </div>

      <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />

      {/* Main Section */}
      <main className="w-[80%] mt-5">
        {/* About Section */}

        <section
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-16"
          id="about"
        >
          {/* Image Box */}
          <div className="w-full h-420 flex items-center justify-center">
            <div className="w-275 h-340 bg-cyan-700 rounded-md relative">
              <img
                className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                src={jeet}
                alt="img"
              />
            </div>
          </div>

          {/* Content Box */}
          <div className="w-full h-420 flex flex-col items-center justify-center">
            <p className=" text-lg text-textBase text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              alias assumenda! Assumenda eaque id incidunt nulla officiis labore
              voluptates sed. Quisquam ullam sapiente eius. Porro quo esse earum
              omnis quis. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. 
            </p>

            <button
              className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 
            overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-tr from-green-400 
            to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white 
            focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 
            hover:darkdrop-shadow-lg hover:dark:shadow-teal-800/80">
              <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download
              </span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
