import React, { useState, useEffect } from "react";
// import CharacterList from "./CharacterList";
// import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function SearchForm() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect (() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      const characters = response.data.results.filter(character => 
        character.name.toLowerCase().includes(searchTerm)
      );
      console.log("character list", response.data);
    
      setSearchTerm(characters);
    })
  }, [] );

  const handleChange = event => {
    setSearchResults(event.target.value);
  };
   


  return (
    <section className="search-form">
     <input
     type="text"
     placeholder="Search"
     value={searchTerm}
     onChange={handleChange}
     />
     <ul>
       {searchResults.map(item => (
         <li>{item}</li>
       ))}
     </ul>
    </section>
  );
}
