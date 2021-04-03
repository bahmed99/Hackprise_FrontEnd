import React from "react";
import moment from "moment";
import { Col, Container, Row } from "react-bootstrap";

class CircleCountdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = then.diff(now);

      let totalMilliseconds = moment.duration(countdown)._milliseconds;
      let seconds = Math.floor(totalMilliseconds / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);

      hours = hours - days * 24;
      minutes = minutes - days * 24 * 60 - hours * 60;
      seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

      days = days.toString();
      hours = hours.toString();
      minutes = minutes.toString();
      seconds = seconds.toString();

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    // Mapping the date values to radius values
    const daysRadius = mapNumber(days, 99, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
      return null;
    }

    return (
      <Container>
          <Row>
        {days && (
          
            <Col lg="2" md="4" sm='4'>
            <SVGCircle radius={daysRadius} />
            <div className="countdown-item__text">
              {days}
              <span>days</span>
            </div>
          </Col>
        )}
        {hours && (
          <Col lg="2" md="4"sm='4'>
            <SVGCircle radius={hoursRadius} />
            <div className="countdown-item__text">
              {hours}
              <span>hours</span>
            </div>
            </Col>
        )}
        {minutes && (
          <Col lg="2" md="4"sm='4'>
            <SVGCircle radius={minutesRadius} />
            <div className="countdown-item__text">
              {minutes}
              <span>minutes</span>
            </div>
            </Col>
        )}
        {seconds && (
          <Col  lg="2" md="4"sm='4'>
            <SVGCircle radius={secondsRadius} />
            <div className="countdown-item__text">
              {seconds}
              <span>seconds</span>
            </div>
            </Col>
        )}
        </Row>
      </Container >   
    );
  }
}

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#E0DED2"
      strokeWidth="25"
      d={describeArc(70, 70, 68, 0, radius)}
    />
  </svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(" ");

  return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

export default CircleCountdown;
