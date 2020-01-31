import React from "react";
import "./App.css";
import { Switch, Route,Link } from "react-router-dom";
import ChoixThemeVisiteur from "./components/Pages/ChoixThemeVisiteur";
import SubCategoriesFrame from "./components/Pages/SubCategoriesFrame.js";
import categories, { getCategory } from "./components/config/categories";
import CreationForm from "./components/FormulaireCreationProjet/CreationForm";
import ListeProject from "./components/FormulaireCreationProjet/ListeProject";
import CreerOuRejoind from "./components/CreerOuRejoind";
import inCome from "./components/Logos/joinOrLogUp.png";
import PagePresentationProjet from "./components/FormulaireCreationProjet/PagePresentationProjet";

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
        <Route
          path="/bien-etre"
          render={props => (
            <SubCategoriesFrame
              {...props}
              subCategories={categories["developpement-economique"]}
            />
          )}
        />
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
              subCategories={categories["bien-etre"]}
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
       
        <Route exact path="/projectform" render={props => <CreationForm />} />
        <Route exact path="/ListeProject" render={props => <ListeProject />} />
        <Route
          exact
          path="/PagePresentationProjet"
          render={props => <PagePresentationProjet />}
        />
        <Route
          exact
          path="/CreerOuRejoind"
          render={props => <CreerOuRejoind />}
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
