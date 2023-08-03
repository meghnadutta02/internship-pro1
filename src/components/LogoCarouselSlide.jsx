import React from "react";
import { useMediaQuery } from "react-responsive";

const LogoCarouselSlide = ({ logos }) => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 500px)" });

 

  return (
    <div className="flex justify-around mb-1">
      {logos.map((logo) => (
        <div key={logo.id}>
          <img
            src={logo.image}
            alt={`logo-${logo.id}`}
            style={{ width: isMobileScreen && "68%" }}
          />
        </div>
      ))}
    </div>
  );
};

export default LogoCarouselSlide;
