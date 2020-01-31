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
      <div className="main-screen flex-stand">
        <div className="nav-bar" style={{background: "#672f4e"}} onClick={this.toggleDisplay}>
          <img
            className="logo-corner-up"
            src={imGeo}
            alt="logo platform"
            height="50px"
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
        <footer className="title-entrance flex-stand" style={{background: "#672f4e"}}>
          <h2 className="title-intro">World Wide Youth</h2>
          <p className="slogan">Par les jeunes pour les jeunes</p>
        </footer>
      </div>
    );
  }
}
