import React, { Component } from "react";

import hero from "../assets/images/hero.svg";
import Typewriter from "typewriter-effect";

export default class Hero extends Component {
  render() {
    return (
        <section className=" body-font pt-24">
          <div className="container mx-auto flex px-5 pb-6 pt-12 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-2 flex flex-col md:items-start md:text-left mb-6 md:mb-0 items-center text-center">
              <h1 className="flex title-font sm:text-4xl text-3xl mb-4 font-medium ">
                <span className="mr-3 ">Skills</span>
                <Typewriter
                  options={{
                    strings: [
                      "<span style='color: #e54c21'>HTML</span>",
                      "<span style='color: #2189c6'>CSS</span>",
                      "<span style='color: #fbd601'>JavaScript</span>",
                      "<span style='color: #563d7c'>Bootstrap</span>",
                      "<span style='color: #1284ff'>React</span>",
                      "<span style='color: #61dafb'>React native</span>",
                      "<span style='color: #43853d'> My SQL</span>",
                      "<span style='color: #13aa52'> Taildwindcss</span>",
                      "<span style='color: #ccc'>Java</span>"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </h1>
              <p className="mb-8 leading-relaxed text-xl">
                Hola me llamo luciana y soy{" "}
                <span className="text-indigo-600 font-bold ">
                 desarrolladora front-end. 
                </span>{" "}
                Soy una persona proactiva que le
              gustan los desafíos, porque siempre nos muestran que podemos superarnos constantemente
                para no quedarnos en el mismo lugar,sino que nos permiten seguir creciendo y aprendiendo.
              </p>
              <div className="flex justify-center">
                <a href="mailto: amitdtu007@gmail.com" className="">
                  <button className="inline-flex text-white bg-indigo-600 hover:bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Hablemos!
                  </button>
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded hero"
                alt="hero"
                src={hero}
              />
            </div>
          </div>
        </section>
    );
  }
}
