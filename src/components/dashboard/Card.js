import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

function Card({ icon, title, value, link, isPercentage, text, message }) {
  const colors = [
    "#ffffff", // Main theme color (cyan)
    // "#ffcc66", // Light Orange
    // "#66cc99", // Light Green
    // "#ff6666", // Light Red
    // "#ffd966", // Light Yellow
    // "#66cccc", // Light Teal
    // "#ff99cc", // Light Pink
    // "#cc99ff", // Light Purple
    // "#ffb366"  // Light Peach
  ];


  let bgColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="col-xs-12 col-sm-6 col-md-3 ">
      <Link to={`${link}`} className="dashboard__card">
        <div className="card__icon" style={{ background: `${bgColor}` }}>
          {icon}
        </div>
        <div className="card__details">
          <h5>{title}</h5>
          <div className="card__digits">
            <strong>
              {text ? value : value !== undefined ? <CountUp end={value} /> : "0"}
              {isPercentage && "%"}
            </strong>

          </div>
          <small>{message ? message : "Registered"}</small>
        </div>
      </Link>
    </div>
  );
}

export default Card;
