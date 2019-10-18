import React from "react";
import CharacterList from "./components/CharacterList.js";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import WelcomePage from "./components/WelcomePage.js";



export default function App() {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/CharacterList" component={CharacterList} />
    </div>
  );
}
