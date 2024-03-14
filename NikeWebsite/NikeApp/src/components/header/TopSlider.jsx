import React, { useEffect, useState } from "react";
import "../../Styles/topslider.css";
export default function TopSlider() {
  const [currentSlide, setCurrentSlide] = useState(0); // State to keep track of the current slide index
  const sliderItems = [
    {
      text: "Save Up to 40%",
      anchor: <a href="">Shop All Our New Markdowns</a>,
    },
    {
      text: "Move, Shop, Customise & Celebrate With Us.No matter what you feel like doing today, It’s better as a Member.",
      anchor: <a href="">Join Us</a>,
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length); // Update current slide index every 4 seconds
    }, 3000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [sliderItems.length]); // Trigger useEffect whenever sliderItems.length changes

  return (
    <nav className="slider-navbar">
      <ul>
        {sliderItems.map((item, index) => (
          <li key={index} className={index === currentSlide ? "active" : ""}>
            {item.text} <br /> <br />
            {item.anchor && item.anchor}
          </li>
        ))}
      </ul>
    </nav>
  );
}
