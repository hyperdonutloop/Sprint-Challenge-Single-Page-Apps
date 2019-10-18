import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterCard from "./components/CharacterCard.js";


export default function App() {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/CharacterCard" component={CharacterCard} />
    <main>
      <Header />
      <CharacterList />
    </main>
    </div>
  );
}
