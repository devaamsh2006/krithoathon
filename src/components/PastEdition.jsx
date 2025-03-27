import React from 'react';
import k2 from '../assets/k2.jpg';
import k1 from '../assets/k1.jpg';

function PastEdition() {
  return (
    <div className="py-4 md:py-8 bg-gray-900 text-white" style={{background: "transparent"}}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Krithoathon Past Editions
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="space-y-8 md:space-y-16">
          {/* Krithoathon 2.0 */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 py-4 md:py-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white impo">Krithoathon 2.0</h2>
              <p className="text-sm md:text-base text-yellow-200">Summer 2024 Edition</p>
            </div>

            <div className="p-4 md:p-8 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-3 border-b border-blue-900">
                  Event Details
                </h3>
                <p className="text-sm md:text-base">
                Krithoathon 2.0, an electrifying 24-hour hackathon held on June 14-15, brought together 1000+ participants from over 9 states in a battle of innovation. The first round challenged teams to submit their ideas through PPTs, while the second round tested their coding skills, fostering creativity and collaboration. 
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-yellow-400">Prize Pool: ₹75,000/-</h3>
                  <p className="text-sm md:text-base text-blue-200">
                    Top performers get internship opportunities!
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={k2}
                  alt="Krithoathon 2.0 Poster"
                  className="rounded-lg shadow-md w-full md:max-w-sm"
                />
              </div>
            </div>
          </div>

          {/* Krithoathon 1.0 */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-4 md:py-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white impo">Krithoathon</h2>
              <p className="text-sm md:text-base text-indigo-100">Inaugural Edition</p>
            </div>

            <div className="p-4 md:p-8 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-3 border-b border-blue-900">
                  Event Highlights
                </h3>
                <p className="text-sm md:text-base">
                Krithoathon 1.0, the inaugural hackathon of our club, marked the beginning of a remarkable legacy, bringing together bright minds to innovate and collaborate. With intense challenges, creative problem-solving, and an electrifying atmosphere, it provided participants a platform to showcase their skills and push technological boundaries.
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-yellow-400">Prize Pool: ₹6,000/-</h3>
                  <p className="text-sm md:text-base text-gray-300 mt-2">
                    The first edition brought together talented students to solve real-world problems.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={k1}
                  alt="Krithoathon 1.0 Poster"
                  className="rounded-lg shadow-md w-full md:max-w-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastEdition;