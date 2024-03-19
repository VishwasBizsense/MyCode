import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/topslider.css";

export default function TopSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderItems = [
    {
      text: "Save Up to 40%",
      link: "/markdowns",
    },
    {
      text: "Move, Shop, Customise & Celebrate With Us. No matter what you feel like doing today, It’s better as a Member.",
      link: "/join",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [sliderItems.length]);

  return (
    <nav className="slider-navbar">
      <ul>
        {sliderItems.map((item, index) => (
          <li key={index} className={index === currentSlide ? "active" : ""}>
            {item.text} <br /> <br />
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}