import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results);
      setCharacter(response.data.results);
    })
    .catch (error => {
      console.log("the data was not returned", error);
      
    })

  }, []);

  return (
    <section className="character-list">
        <SearchForm
        people={character} 
        />
      {character.map((character, index) => {
        return (
          
            <CharacterCard 
            key={index}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            />
        
        )
      })}
    </section>
  );
}