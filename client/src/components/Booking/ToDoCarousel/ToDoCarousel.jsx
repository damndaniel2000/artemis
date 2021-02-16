import React from "react";
import Carousel from "react-material-ui-carousel";

import alert from "../../../assets/booking/to-do.svg";
import jewellery from "../../../assets/booking/jewlery.svg";
import pets from "../../../assets/booking/pets.svg";
import cpr from "../../../assets/booking/cpr.svg";

import "./ToDoCarousel.css";

const home = [
  {
    img: alert,
    msg: "Things to do while waiting for your ambulance to arrive.",
  },
  {
    img: jewellery,
    msg: "Remove all jewellery from the victim as it may get misplaced.",
  },
  {
    img: pets,
    msg:
      "Please tie or isolate your pets if you have any as they may interrupt the staff",
  },
  {
    img: cpr,
    msg:
      "If victim is not breathing, perform CPR (only if you are sure you can). Video here",
  },
];

const ToDoCarousel = () => {
  return (
    <div className="todo-carousel-container">
      <Carousel
        animation="slide"
        autoPlay={false}
        navButtonsAlwaysVisible
        indicatorProps={{ style: { fontSize: ".5rem" } }}
        activeIndicatorProps={{ style: { fontSize: ".5rem" } }}
      >
        {home.map((item) => (
          <div className="todo-carousel">
            <img src={item.img} alt={item.img} className="todo-carousel-img" />
            <p className="todo-carousel-text">{item.msg}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ToDoCarousel;
