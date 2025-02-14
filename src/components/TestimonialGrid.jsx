import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, quote, imageSrc }) => (
  <div className="flex flex-col items-center p-4 text-center">
    <div className="relative mb-4">
      <img src={imageSrc} alt={name} className="w-[161px] h-[161px] rounded-full object-cover" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="bg-white rounded-full p-1">
          <img src="./aboutLogo.svg" alt="Logo" className="w-6 h-6" />
        </div>
      </div>
    </div>
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="text-sm text-gray-600 mb-4">{role}</p>
    <p className="text-sm mb-2 flex-grow">"{quote}"</p>
    <div className="flex mt-auto">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={25} fill="currentColor" className="text-black-400" />
      ))}

    </div>
  </div>
);

const TestimonialGrid = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Marketing Director",
      quote: "The level of privacy and luxury is unmatched!",
      imageSrc: "./aboutEllipse1.png"
    },
    {
      name: "Michael Smith",
      role: "Software Engineer",
      quote: "I found my perfect match thanks to Stringly!",
      imageSrc: "./aboutEllipse2.png"
    },
    {
      name: "Sarah Lee",
      role: "Product Manager",
      quote: "Stringly redefines what dating should feel like!",
      imageSrc: "./aboutEllipse3.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 mt-16">
      <h1 className='text-center text-[48px] font-sf font-semibold'>User Experiences</h1>
      <h2 className="text-center mb-8 font-jakarta text-[18px]">
        Stringly has transformed my approach to dating!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialGrid;