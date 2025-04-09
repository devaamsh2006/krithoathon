import k4 from "../assets/k4.jpg";

const About = () => {
  return (
    <section
      className="bg-gray-900  text-white min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{ background: "transparent" }}
    >
      <div className="max-w-4xl text-center ">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          About Krithoathon 3.0
        </h1>
        <p className="text-lg leading-relaxed">
          Krithoathon 3.0 is more than just a hackathon it’s a revolution in
          problem solving. Hosted by Krithomedh, the technical club of the AIML
          & IoT Department at VNRVJIET, this edition challenges diverse teams to
          tackle real world issues beyond tech. Engage with industry experts,
          unleash creativity, and compete for the best solution. Innovate,
          collaborate, and make an impact!
        </p>
        <div className="flex justify-center align-center">
          <img
            src={k4}
            alt="Krithoathon 3.0 Poster"
            className="rounded-2xl shadow-lg scale-75 hover:scale-90 transition-transform duration-300"
            width="80%"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
