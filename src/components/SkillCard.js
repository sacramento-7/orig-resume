import React, { Component } from "react";

import "./SkillCard.css";

class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card">
        <div className="image-wrapper">
          <img src={skill.content.image} alt="" />
        </div>
        <div className="skill-title-wrapper">
          <h3>{skill.content.title}</h3>
        </div>
      </div>
    );
  }
}

export default SkillCard;
