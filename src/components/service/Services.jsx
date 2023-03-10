import React from "react";
import "./services.css";

const Services = (props) => {
  return (
    <section className={props.className}>
      <div className="service__img">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="services__content">
        <h2 className="services__heading">{props.h2}</h2>
        <p className="service__text">{props.p}</p>
      </div>
    </section>
  );
};

export default Services;
