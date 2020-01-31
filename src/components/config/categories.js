import React from "react";
import imBienEtre from "../Logos/bien-etre-bonLogo.png";
import imNature from "../Logos/nature-logo.jpg";
import imDevIndus from "../Logos/dev-industrie-logo.jpg";
import imEthiq from "../Logos/ethique-logo.jpg";
const categories = {
  "bien-etre": [
    [<img src={imBienEtre} alt="bien-être" width="150px" heigth="150px" />],
    2,
    3,
    4,
    1
  ],
  nature: [
    [<img src={imNature} alt="nature" width="150px" heigth="150px" />],
    6,
    14,
    15,
    13
  ],
  "developpement-economique": [
    [
      <img
        src={imDevIndus}
        alt="developpement économique"
        width="150px"
        heigth="150px"
      />
    ],
    7,
    8,
    9,
    11
  ],
  ethique: [
    [
      <img
        src={imEthiq}
        alt="éthique & vivre ensembe"
        width="150px"
        heigth="150px"
      />
    ],
    5,
    16,
    10,
    12
  ]
};
export default categories;
export function getCategory(name) {
  return categories[name];
}
