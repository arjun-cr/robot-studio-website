import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const slides = [
    {
      image: 'https://cdn.shopify.com/s/files/1/0070/5901/3716/files/jamoca.png?v=1689924916',
      heading: 'Welcome to Robot Studio',
      description: 'Experience the best solutions for your projects.',
    },
    {
      image: 'https://townsquare.media/site/1135/files/2024/04/attachment-GettyImages-2094957356-e1713786726933.jpg',
      heading: 'Innovative Solutions',
      description: 'We bring creative and unique ideas to life.',
    },
    {
      image: 'https://cdn.thenewstack.io/media/2016/10/kengaro-robot-sweat-5.jpg',
      heading: 'Expert Team',
      description: 'Our team is ready to assist you with any challenges.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[600px] bg-gray-800 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 transform ${index === currentIndex
            ? 'translate-x-0 opacity-100'
            : index === currentIndex - 1 || (currentIndex === 0 && index === slides.length - 1)
              ? '-translate-x-full opacity-100'
              : 'translate-x-full opacity-0'
            }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
            <h2 className="text-4xl font-bold text-white mb-2">{slide.heading}</h2>
            <p className="text-lg text-gray-200 max-w-lg">{slide.description}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'
              }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
