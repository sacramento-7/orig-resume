import React, { Component } from "react";
import data from "../data.json";

import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

import "./AboutSection.css";

class AboutSection extends Component {
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
          className="second"
          style={{
            background: this.props.colorArr["bgColor"],
            color: this.props.colorArr["colorText"],
          }}
        >
          <h1>{data.sections[0].title}</h1>
          <div className="paragraphs">
            {data.sections[0].items.map((p) => {
              return <p>{p.content}</p>;
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={50}
          duration={300}
          delay={300}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element name="skill" className="element"></Element>
      </div>
    );
  }
}

export default AboutSection;
