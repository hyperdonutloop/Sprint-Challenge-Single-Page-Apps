import React from "react";

export default function CharacterCard(props) {


  return (
    
    <div className="character-card">
      <div className="character-list">
        <h2>Name: {props.name}</h2>
        <p>Status: {props.status}</p>
        <p>Species: {props.species}</p>
        <p>Gender: {props.gender}</p>
      </div>

    </div>

  )
}
