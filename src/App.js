import React, { Component } from "react";

import NavigationSection from "./sections/NavigationSection";
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import SnowStorm from "react-snowstorm";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      titlesColor: { bgColor: "#2a9d8f", colorText: "#fff" },
      aboutColor: { bgColor: "#2a9d8f", colorText: "#fff" },
      skillColor: { bgColor: "#2a9d8f", colorText: "#fff" },
      colors: [
        { bgColor: "#3d3522", colorText: "#f3ca40" },
        { bgColor: "#f3b5a6", colorText: "#264653" },
        { bgColor: "#db2b39", colorText: "#f0cea0" },
        { bgColor: "#a6cfa0", colorText: "#201f32" },
        { bgColor: "#2d5362", colorText: "#f4a666" },
        { bgColor: "#56cfe1", colorText: "#2b2d42" },
        { bgColor: "#ee2e31", colorText: "#fff" },
        { bgColor: "#f4a261", colorText: "#264653" },
        { bgColor: "#36413e", colorText: "#dcc9b6" },
      ],
    };
  }
  getRandColor = () => {
    let { colors } = this.state;
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
  };
  changeColor = () => {
    this.setState({
      titlesColor: this.getRandColor(),
    });
  };

  render() {
    let { titlesColor } = this.state;
    return (
      <div className="App">
        <SnowStorm />
        <NavigationSection
          changeColor={this.changeColor}
          colorArr={titlesColor}
        />
        <TitlesSection colorArr={titlesColor} />
        <AboutSection colorArr={titlesColor} />
        <SkillSection colorArr={titlesColor} />
      </div>
    );
  }
}

export default App;
