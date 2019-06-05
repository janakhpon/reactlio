import React from "react";

const names = [
  "full stack developer desu.",
  "software engineer desu",
  "engineering gasei desu",
  "dumbass genious desu",
  "fitness trainer desu"
];

class Displaytitle extends React.Component {
  state = { nameIndex: 0, fadein: true };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ fadein: false }), 2000);
    this.animateNames();
  }

  componentWillUnmount() {
    clearInterval(this.displayInterval);
    clearTimeout(this.timeout);
  }

  animateNames = () => {
    this.displayInterval = setInterval(() => {
      const nameIndex = (this.state.nameIndex + 1) % names.length;
      this.setState({ nameIndex, fadein: true });

      this.timeout = setTimeout(() => {
        this.setState({ fadein: false });
      }, 2000);
    }, 4000);
  };

  render() {
    const { fadein, nameIndex } = this.state;
    const name = names[nameIndex];

    return (
      <p className={fadein ? "bio-fade-in" : "bio-fade-out"}>Watashi wa {name}</p>
    );
  }
}

export default Displaytitle;
