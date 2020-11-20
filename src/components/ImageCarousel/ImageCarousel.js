import React from "react";
import { Zoom } from "react-slideshow-image";
import { slideImages } from "./imagesList";
import "react-slideshow-image/dist/styles.css";

export default function ImageCarousel() {
  return (
    <div className="slide-container" style={{ width: 100 }}>
      <Zoom scale={0.3} arrows={false}>
        {slideImages.map((svg, index) => (
          <span key={index} style={{ width: `100%` }}>
            {svg}
          </span>
        ))}
      </Zoom>
    </div>
  );
}
