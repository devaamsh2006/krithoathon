import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import LoadingScreen from "./LoadingScreen";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";

const sliderPhotos = [
s1,s2,s3,s4,s5
];

const gridPhotos = [p1,p2,p3,p4,p5,p6,p7,p8,p9];

const HackathonGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderPhotos.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const imagePromises = [...sliderPhotos, ...gridPhotos].map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-transparent from-[#040C1C] to-[#0A192F] min-h-screen py-12">
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent mt-20 bg-gradient-to-r from-cyan-400 to-blue-600">
          Hackathon Chronicles
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          A mesmerizing journey through innovation and creativity
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden mb-8">
          <img
            src={sliderPhotos[currentSlide]}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {sliderPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {gridPhotos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setLightboxImage(photo)}
            >
              <img
                src={photo}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div className="max-w-[90%] max-h-[90%] relative">
              <img
                src={lightboxImage}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 bg-white/30 hover:bg-white/50 rounded-full p-2"
              >
                <X className="text-white" size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HackathonGallery;
