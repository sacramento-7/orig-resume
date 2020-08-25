import React, { Component } from "react";

import "./AboutSection";
import "./SkillSection";
import { Link, Element } from "react-scroll";

import "./NavigationSection.css";

class NavigationSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorArr: { bgColor: "blue", colorText: "#fff" },
    };
  }
  render() {
    return (
      <div>
        <Element name="titles" className="element"></Element>
        <div className="navigation">
          <div className="left1">
            <button
              className="button b2"
              onClick={() => this.props.changeColor()}
              style={{
                background: this.props.colorArr["bgColor"],
                color: this.props.colorArr["colorText"],
              }}
            >
              <i className="fas fa-paint-brush"></i>Color Me
            </button>
          </div>
          <div className="right1">
            <Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={50}
              duration={300}
              delay={300}
            >
              <button
                className="button b1"
                style={{
                  background: this.props.colorArr["bgColor"],
                  color: this.props.colorArr["colorText"],
                }}
              >
                Skills
              </button>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              delay={300}
            >
              <button
                className="button b1"
                style={{
                  background: this.props.colorArr["bgColor"],
                  color: this.props.colorArr["colorText"],
                }}
              >
                About
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationSection;
