import React, { Component } from 'react';

export default class Tools extends Component {
  render() {
    return (
      <div className="px-6 py-6">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-gray-700 mr-2">
          #webpack
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-gray-700 mr-2">
          #git
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-gray-700 mr-2">
          #github
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-gray-700 mr-2">
          #gitlab
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-gray-700 mr-2">
          #vscode
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-gray-700 mr-2">
          #grunt
        </span>
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
