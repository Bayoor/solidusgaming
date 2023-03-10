import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/service/Services";
import Header from "./container/header/Header";
import featuresIcon from "./assets/images/features-icon-1.png";
import featuresIcon_2 from "./assets/images/features-icon-2.png";
import featuresIcon_3 from "./assets/images/features-icon-3.png";
import Token from "./components/token/Token";
import banefits from "./assets/images/banefits-1.png";
import banefits_2 from "./assets/images/banefits-2.png";
import banefits_3 from "./assets/images/banefits-3.png";
import banefits_4 from "./assets/images/banefits-4.png";
import Roadmap from "./container/roadmap/Roadmap";
import Social from "./container/social/Social";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="solidus__app">
      <div className="section__background">
        <Navbar />
        <Header />
      </div>
      <div className="flex-content">
        <Services
          img={featuresIcon}
          alt="rocket"
          h2="Powerful Engine"
          p="Unreal Engine 5 paves the way for new or experienced developpers to create large scale games, which before only multi-million dollar companies could do."
        />
        <Services
          className="app-border"
          img={featuresIcon_2}
          alt="decentralized gaming"
          h2="Decentralized Gaming"
          p="Combining blockchain technology and gaming to become an innovative leader within a world full of possibilities."
        />
        <Services
          img={featuresIcon_3}
          alt="community work"
          h2="Community Work"
          p="A unique voting idea that allows gamers to decide how games will play out, which course the project takes and many other polls that will take place while the project grows."
        />
      </div>
      <div className="app-token">
        <div className="app-token_feature">
          <h2>Token features</h2>
          <p>Get to Know Our Ecosystem’s Key Features & Benefits</p>
        </div>
        <div className="app-token_display">
          <Token
            img={banefits}
            alt="ligth bulb"
            heading="voting"
            text="Decide the future of the project together with the community. Vote on different aspects."
          />
          <Token
            img={banefits_2}
            alt="ligth bulb"
            heading="Rewards"
            text="Our games reward the players in our native token. Win competitions, achieve goals and"
          />
          <Token
            img={banefits_3}
            alt="ligth bulb"
            heading="Marketing"
            text="Connect with our team for improvements, marketing and contests applications."
          />
          <Token
            img={banefits_4}
            alt="ligth bulb"
            heading="Safe & Transparent"
            text="Our project has a audited smart contract interacting with our games."
          />
        </div>
        <div className="app-roadmap">
          <div className="roadmap-content">
            <h2 className="roadmap-heading">Roadmap</h2>
          </div>
          <Roadmap />
        </div>
      <Social />
      </div>
      <Footer />
    </div>
  );
}

export default App;
