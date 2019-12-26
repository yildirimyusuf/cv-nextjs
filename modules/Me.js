import React, { Component } from 'react';

export default class Me extends Component {
  render() {
    return (
      <div className="px-6 py-4">
        <p className="text-gray-700 text-lg">
          <img
            className="object-contain h-48 float-left rounded-full overflow-hidden mr-5 mb-5"
            src="../static/img/mu.png"
            alt="Emre Saraç - React/Vue Developer"
          />
          I am Emre Saraç, Junior Front-End Developer at ENUYGUN. I code since 2019 and I have
          been working as a Software Developer for 1 years.
        </p>
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
