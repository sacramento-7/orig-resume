import React, { Component } from "react";
import data from "../data.json";

import "./NavigationSection";
import DownIcon from "../components/DownIcon";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import { Link } from "react-scroll";

import "./SkillSection.css";

class SkillSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorArr: { bgColor: "gray", colorText: "#fff" },
    };
  }
  render() {
    return (
      <div>
        <Fullpage
          className="third"
          style={{
            background: this.props.colorArr["bgColor"],
            color: this.props.colorArr["colorText"],
          }}
        >
          <h1>{data.sections[1].title}</h1>
          <div className="cards-wrapper">
            {data.sections[1].items.map((eachSkill) => {
              return <SkillCard skill={eachSkill} />;
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="titles"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          delay={300}
          onSetActive={this.handleSetActive}
        >
          <DownIcon
            icon={data.icons.up}
            style={{
              marginBottom: "-45px",
              transform: "translateY(0px)",
              backgroundColor: this.props.colorArr["bgColor"],
            }}
          />
        </Link>
      </div>
    );
  }
}

export default SkillSection;
