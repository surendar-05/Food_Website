import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Biriyani.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> NEBULA  </h1>
        <p> HUB OF BIRIYANI</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
