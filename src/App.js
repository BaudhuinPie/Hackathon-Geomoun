import React from "react";
import "./App.css";
import FormulaireCreationProjet from "./components/FormulaireCreationProjet/FormulaireCreationProjet";
import CreationForm from "./components/FormulaireCreationProjet/CreationForm"
import ListeProject from "./components/FormulaireCreationProjet/ListeProject"
import CreerOuRejoind from "./components/CreerOuRejoind"
function App() {
  return (
    <div className="App">
      <CreationForm />
      <ListeProject/>
      <CreerOuRejoind/>
    </div>
  );
}

export default App;
