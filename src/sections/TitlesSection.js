import React, { Component } from "react";
import data from "../data.json";

import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";
import { SocialIcon } from "react-social-icons";
import { Link, Element } from "react-scroll";

import "./TitlesSection.css";

class TitlesSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorArr: { bgColor: "blue", colorText: "#fff" },
    };
  }
  render() {
    return (
      <div>
        <Fullpage
          className="first"
          style={{
            background: this.props.colorArr["bgColor"],
            color: this.props.colorArr["colorText"],
          }}
        >
          <h1 className="title">{data.title}</h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map((key) => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          delay={300}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element name="about" className="element"></Element>
      </div>
    );
  }
}

export default TitlesSection;
