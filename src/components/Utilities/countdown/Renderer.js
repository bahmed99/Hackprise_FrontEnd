import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";

const Renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <Fragment>
      <div className='contdown'>
          <div className="single-countdown">
            <div className="single-countdown__time"><p>{days}</p></div>
            <div className="single-countdown__text"><p>Jours</p></div>
          </div>
          <div md='auto'  sm='auto' xs='auto' className="single-countdown">
            <div className="single-countdown__time"><p>{hours}</p></div>
            <div className="single-countdown__text"><p>Heures</p></div>
          </div>
          <div md='auto' sm='auto' xs='auto' className="single-countdown">
            <div className="single-countdown__time"><p>{minutes}</p></div>
            <div className="single-countdown__text"><p>Minutes</p></div>
          </div>
          <div md='auto' sm='auto' xs='auto' className="single-countdown">
            <div className="single-countdown__time"><p>{seconds}</p></div>
            <div className="single-countdown__text"><p>Secondes</p></div>
          </div>
      </div>
    </Fragment>
  );
};

Renderer.propTypes = {
  days: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number
};

export default Renderer;
