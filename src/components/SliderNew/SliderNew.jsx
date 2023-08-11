import React from "react";
import { Carousel } from "antd";
// background: "#364d79",

const contentStyle = {
  height: "500px",
  color: "gray",
  lineHeight: "160px",
  textAlign: "center",
  background: "#ffffff",
};
const SliderNew = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default SliderNew;
