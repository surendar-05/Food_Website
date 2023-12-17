import React from "react";
import Ambur from "../assets/ambur.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Ambur
        })` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Nebula – where passion meets perfection in every grain of rice and blend of aromatic spices. We are not just a biryani company; we are storytellers of a culinary journey that transcends borders and tantalizes taste buds.Established in 2023, Nebula was born out of a love for biryani and a commitment to delivering an authentic and unforgettable dining experience. With roots deeply embedded in the rich traditions of South Asian cuisine, our chefs bring generations of culinary expertise to your plate.
        At Nebula, we believe that biryani is more than just a dish; it's a celebration of flavors, cultures, and the joy of sharing a meal with loved ones. Each grain of basmati rice is carefully selected, and every spice is handpicked to create a symphony of tastes that transport you to the heart of the culinary heritage.
        </p>
      </div>
    </div>
  );
}

export default About;
