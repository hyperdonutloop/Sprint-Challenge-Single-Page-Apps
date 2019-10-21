import React, { useState, useEffect } from "react";
// import CharacterList from "./CharacterList";
// import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function SearchForm() {
  
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  
  useEffect (() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      const characters = response.data.results.filter(character => 
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log("character list", response);
      setData(characters);
    })
  },[query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  
  return (
    <section className="search-form">
      <form className="Search">
        <input
        type="text"
        name="name"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        />
     </form>

     <div className="search" key={data.id}>
     
       {data.map(data => {
         return (
           <div>
             <h2 className="test">Name: {data.name}</h2>
             <h3 className="test">Status: {data.status}</h3>
             <h3 className="test">Species: {data.species}</h3>
             <h3 className="test">Gender: {data.gender}</h3>
          </div>
         );
        })}
     
     </div>
    </section>
  );
}
