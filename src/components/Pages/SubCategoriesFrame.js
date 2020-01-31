import React from "react";
import { Link } from "react-router-dom";
import objectifs, { getObjectif } from "../config/objectifs";

import imGeo from "../Logos/geomoun.png";
const SubCategoriesFrame = ({ subCategories }) => {
  const objectifs = []; //array avec les images de 16 sub avec "" en index zéro.
  console.log(subCategories);
  return (
    <div className="grid-inside flex-stand">
      <div className="nav-bar">
        <img
          className="logo-corner-up"
          src={imGeo}
          alt="logo platform"
          height="50px"
          width="auto"
        />
        {/* <NavDropdownExample/> */}
      </div>
      <main className="grid flex-stand">
        <header className="header-entrance">
          <h1 className="phrase-intro">Quel thème veux-tu soutenir ?</h1>
        </header>
        <ol className="squares-inside flex-stand">
          <li id="1" key="1">
            <Link to={`/${subCategories[1]}`}>
              {getObjectif(subCategories[1])}
            </Link>
          </li>
          <li id="2" key="2">
            <Link to={`/${subCategories[2]}`}>
              {getObjectif(subCategories[2])}
            </Link>
          </li>
          <li id="3" key="3">
            <Link to={`/${subCategories[3]}`}>
              {getObjectif(subCategories[3])}
            </Link>
          </li>
          <li id="4" key="4">
            <Link to={`/${subCategories[4]}`}>
              {getObjectif(subCategories[4])}
            </Link>
          </li>
        </ol>
        <footer className="title-entrance flex-stand">
          <h2 className="title-intro">World Wide Youth</h2>
          <p className="slogan">Par les jeunes pour les jeunes</p>
        </footer>
      </main>
    </div>
  );
};
export default SubCategoriesFrame;
