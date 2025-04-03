import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import BlurText from "./BlurText";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 bg-black text-white overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div
        className={`relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto p-6 sm:p-8 md:p-12 rounded-lg border border-gray-800 shadow-xl transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(17,24,39,0.8) 0%, rgba(39,39,70,0.85) 50%, rgba(25,25,50,0.8) 100%)",
          boxShadow: "0 0 30px rgba(79, 70, 229, 0.3)",
        }}
      >
        {/*                 
                <div className={`absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-md transform rotate-12 transition-all duration-700 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                    style={{
                        background: 'linear-gradient(to bottom right, #F59E0B, #D97706)',
                        animation: 'float 3s ease-in-out infinite'
                    }}></div>
                 */}
        {/* Animated red square in bottom right 
                <div className={`absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-md transform -rotate-12 transition-all duration-700 delay-300 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                    style={{
                        background: 'linear-gradient(to bottom right, #EF4444, #B91C1C)',
                        animation: 'float 3s ease-in-out infinite reverse'
                    }}></div>
                
                {/* Subtle glow effect */}
        <div
          className="absolute inset-0 rounded-lg opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)",
            filter: "blur(30px)",
            zIndex: -1,
          }}
        ></div>

        {/* Main content */}
        <div className="text-center">
          <h1
            className={`text-3xl heading sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider mb-2 sm:mb-3 transition-all duration-1000 delay-200 ease-in-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
            style={{
              backgroundImage:
                "linear-gradient(to right, #EC4899, #8B5CF6, #3B82F6)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradient 6s ease infinite",
            }}
          >
            KRITHOATHON
          </h1>

          <div
            className={`flex items-center justify-center transition-all duration-1000 delay-400 ease-in-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            <span className="mx-2 sm:mx-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-500">
              3.0
            </span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          </div>

          {/* <p className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-xl font-medium transition-all duration-1000 delay-600 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{
                            backgroundImage: 'linear-gradient(to right, #F59E0B, #FBBF24, #F59E0B)',
                            backgroundSize: '200% 200%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'gradient 4s ease infinite'
                        }}>
                        Innovate. Collaborate. Revolutionize.
                    </p> */}

          <div className="mt-4 flex w-full justify-center">
            <BlurText
              text="Crafting Tomorrow's World"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl mb-8 text-center heading"
            />
          </div>
        </div>
      </div>
    <a href="https://unstop.com/o/JyBkoDH?lb=bSLJ0FFA&utm_medium=Share&utm_source=WhatsApp">       
      <button
        className={`mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-base sm:text-lg md:text-xl font-semibold transition-all duration-700 delay-800 ${
          isVisible
            ? "opacity-100 scale-100 hover:scale-110"
            : "opacity-0 scale-90"
        }`}
      >
        Register Now
      </button>
    </a>   

      <style jsx="true">{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-10px) rotate(12deg);
          }
          100% {
            transform: translateY(0) rotate(12deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Adjust floating animation for mobile */
        @media (max-width: 640px) {
          @keyframes float {
            0% {
              transform: translateY(0) rotate(12deg);
            }
            50% {
              transform: translateY(-5px) rotate(12deg);
            }
            100% {
              transform: translateY(0) rotate(12deg);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
