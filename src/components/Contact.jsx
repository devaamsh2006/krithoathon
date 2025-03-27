import { Player } from '@lottiefiles/react-lottie-player';
import animation from "../assets/contact-animation.json";

const Contact = () => {
  const coordinators = [
    { id: 1, name: 'Shruthika', phone: '+91 95732 88738' },
    { id: 2, name: 'Neehar', phone: '+91 83280 89874' },
    { id: 3, name: 'Chaitanya', phone: '+91 93472 90006' },
    { id: 4, name: 'BhanuSree', phone: '+91 93813 31830' },
  ];

  return (
    <div className="bg-transparent flex items-center justify-between min-h-screen p-4 lg:p-12">
      
      {/* Contact Info Section */}
      <div className="text-white flex flex-col space-y-6 w-1/2">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-green-400">
          Contact Us
        </h2>

        <div className="text-sm md:text-lg">
          <p>📧 Email:</p>
          <a href="mailto:krithomedh@example.com" className="text-blue-400 hover:underline hover:text-blue-300">
            krithomedhvnrvjiet@gmail.com
          </a>
        </div>

        <div className="space-y-3 md:space-y-4">
          {coordinators.map((coordinator) => (
            <div key={coordinator.id} className="p-2 md:p-3 rounded-lg bg-gray-800 shadow-lg rounded-xl">
              <h3 className="text-sm md:text-xl font-semibold">{coordinator.name}</h3>
              <p className="text-xs md:text-lg">📞 {coordinator.phone}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lottie Animation Section */}
      <div className="flex items-center justify-center w-1/2">
        <Player
          autoplay
          loop
          src={animation}
          style={{ height: '40vw', width: '40vw' }}
          className="max-w-[350px] lg:max-w-[500px]"
        />
      </div>

    </div>
  );
};

export default Contact;
