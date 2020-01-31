import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ChoixThemeVisiteur from "./components/Pages/ChoixThemeVisiteur";
import SubCategoriesFrame from "./components/Pages/SubCategoriesFrame.js";
import categories from "./components/config/categories";
import CreationForm from "./components/FormulaireCreationProjet/CreationForm";

const App = props => {
  const subRoutes = () => {
    let routesSet = [];
    for (let categ in categories) {
      for (let i = 1; i <= 4; i++) {
        routesSet.push(
          <Route path={`/${categ[i]}`} render={props => <p>do</p>} />
        );
      }
    }
    console.log(routesSet);
    return routesSet;
  };
  return (
    <div className="App">
      <Switch>
        {subRoutes()}
        <Route exact path="/projectform" render={props => <CreationForm />} />
        <Route
          path="/ethique"
          render={props => (
            <SubCategoriesFrame
              {...props}
              subCategories={categories["ethique"]}
            />
          )}
        />
        <Route
          path="/developpement-economique"
          render={props => (
            <SubCategoriesFrame
              {...props}
              subCategories={categories["developpement-economique"]}
            />
          )}
        />
        <Route
          path="/nature"
          render={props => (
            <SubCategoriesFrame
              {...props}
              subCategories={categories["nature"]}
            />
          )}
        />
        <Route
          path="/bien-etre"
          render={props => (
            <SubCategoriesFrame
              {...props}
              subCategories={categories["bien-etre"]}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <ChoixThemeVisiteur {...props} categories={categories} />
          )}
        />
      </Switch>
    </div>
  );
};
export default App;
