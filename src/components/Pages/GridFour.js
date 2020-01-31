import React from "react";
import { Link } from "react-router-dom";
// import {getCategory} from "./config/categrories";
const GridFour = ({ items }) => {
  console.log(items);
  return (
    <main className="grid flex-stand">
      <ol className="squares-entrance">
        <li id="1" key="1">
          <Link to="/bien-etre">{items["bien-etre"][0][0]}</Link>
        </li>
        <li id="2" key="2">
          <Link to="/nature">{items["nature"][0]}</Link>
        </li>
        <li id="3" key="3">
          <Link to="/developpement-economique">
            {items["developpement-economique"][0]}
          </Link>
        </li>
        <li id="4" key="4">
          <Link to="/ethique">{items["ethique"][0]}</Link>
        </li>
      </ol>
    </main>
  );
};
export default GridFour;
