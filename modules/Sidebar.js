import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="w-full sm:w-2/2 md:w-3/3 lg:w-1/4 xl:w-1/6 px-2">
        <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-4 my-1 rounded inline-flex items-center">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download CV (*.DOCX)</span>
        </button>
        <button className="w-full bg-red-500 hover:bg-red-400 text-white font-bold py-4 px-4 my-1 rounded inline-flex items-center">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download CV (*.PDF)</span>
        </button>
        <div className="flex-shrink-0 my-1 relative overflow-hidden bg-indigo-500 rounded-lg max-w-xs shadow-lg">
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: 'scale(1.5)', opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-5 px-5 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: 'radial-gradient(black, transparent 60%)',
                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                opacity: 0.2
              }}
            />
            <img className="relative w-40" src="../static/img/reacjs_logo.png" alt="" />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Front End Tech</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Reactjs</span>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .oswald {
              font-family: 'Oswald', sans-serif;
            }
            .modak {
              font-family: 'Modak', sans-serif;
            }
            .raleway {
              font-family: 'Raleway', sans-serif;
            }
            .slabo {
              font-family: 'Slabo 27px', serif;
            }
          `}
        </style>
      </div>
    );
  }
}
