import React from "react";
import GridFour from "./GridFour";
import imGeo from "../Logos/geomoun.png";
export default class ChoixThemeVisiteur extends React.Component {
  constructor(props) {
    super(props);
    this.categories = this.props.categories;
    this.state = {
      show: false
    };
  }
  toggleDisplay = () => {
    if (this.state.show) this.setState({ show: false });
    else this.setState({ show: true });
  };
  render() {
    return (
      <div className="mainScreen">
        <div className="nav-bar" onClick={this.toggleDisplay}>
          <img
            className="logo-corner-up"
            src={imGeo}
            alt="logo platform"
            height="60px"
            width="auto"
          />
          {/* <NavDropdownExample/> */}
        </div>
        <header className="header-entrance">
          <h1 className="phrase-intro">Quel thème veux-tu soutenir ?</h1>
        </header>
        <div className="grid-entrance">
          <GridFour items={this.categories} />
        </div>
      </div>
    );
  }
}
