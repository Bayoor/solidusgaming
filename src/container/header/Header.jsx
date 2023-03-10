import React from "react";
import twitterLogo from "../../assets/icons/twitter.svg";
import telegramLogo from "../../assets/icons/telegram.svg";
import gitHubLogo from "../../assets/icons/github.svg";
import dataChart from "../../assets/images/data-chart.png";
import "./header.css";

const Header = () => {
  return (
    <section className="hero__section">
      <p>Bringing Change To Blockchain Gaming Forever </p>
      <div className="hero__section-btn">
        <button className="game-btn">GAMES</button>
        <button className="token-btn">BUY TOKENS</button>
      </div>
      <div className="image__icon">
        <img src={twitterLogo} alt="Twitter-icon" />
        <img src={gitHubLogo} alt="Github-icon" />
        <img src={telegramLogo} alt="Telegram-icon" />
      </div>

      <section className="objective__section">
        <div className="objective__heading">
          <h2>Our Mission</h2>
          <p className="objective__text">
            Combining these three major key elements, which are vital for our
            platform.Give power to the community by having their voices heard
            while we, at Solidus, provide the tools: an immersive Gaming
            environment powered by Blockchain technology.
          </p>
        </div>
        <div className="objective__image">
          <img src={dataChart} alt="Data Presentation" />
        </div>
      </section>
    </section>
  );
};

export default Header;
