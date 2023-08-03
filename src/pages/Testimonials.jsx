import React from 'react';
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from 'swiper/react';
import quotes1 from "../assets/quotes1.svg"
import quotes2 from "../assets/quotes2.svg"
import {
    Navigation, Pagination, Autoplay

} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const testimonials = [
    {
        name: "John Doe",
        company: "SDE at Apple",
        comment: "I'm really impressed with the quality of service. The team was very professional and delivered excellent results.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
        name: "Jane Smith",
        company: "Recruiter at Microsoft",
        comment: "Amazing experience working with this company. They went above and beyond to meet our requirements.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
        name: "Mike Johnson",
        company: "HR at Facebook",
        comment: "Highly recommended! The team is skilled, responsive, and delivered the project on time.",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    },
    {
        name: "Emily Williams",
        company: "Cloud Eng. at Github",
        comment: "I'm extremely satisfied with the work they did for us. The results were outstanding.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    },
    {
        name: "David Lee",
        company: "SRE at Wordpress",
        comment: "Excellent service and attention to detail. They made the process easy and exceeded our expectations.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
        name: "Sarah Adams",
        company: "DBA at Meta",
        comment: "Great job! The team was dedicated and provided valuable insights throughout the project.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
];

const Testimonial = () => {
    const isMobile = useMediaQuery({ maxWidth: 640 });
  
    return (
      <div className="min:h-full mx-auto w-5/6 mb-20 relative"> {/* Add 'relative' to the container */}
        <Swiper
          spaceBetween={30}
          slidesPerView={isMobile ? 1 : 2}
          loop
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="p-1.5">
              <div className="shadow-xl rounded-lg bg-white px-5 py-10  text-[#2a6a94] relative md:h-[250px] h-[300px]"> 
                <div className="flex justify-around gap-10 items-center mb-7 md:mt-0 mt-3">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-4">
                    <img
                      src={testimonial.image}
                      alt={`Testimonial ${index + 1}`}
                      className="w-full h-full object-cover z-20"
                    />
                  </div>
                  <div>
                    <h3 children className="font-bold text-xl whitespace-nowrap">
                      {testimonial.name}
                    </h3>
                    <h3 className="text-sm font-semibold">{testimonial.company}</h3>
                  </div>
                </div>
  
                <img
                  src={quotes1}
                  className="absolute  bottom-2 right-4 md:w-[60px] md:h-[60px] w-[45px] h-[45px]"
                />
                <img
                  src={quotes2}
                  className="absolute  md:top-2 top-1 md:left-4 left-1 md:w-[60px] md:h-[60px] w-[45px] h-[45px]" 
                />
                <p className="md:w-3/4 mx-auto m-3 relative">
                  {testimonial.comment}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default Testimonial;
  
  
