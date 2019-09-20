import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  // searchResults is used to set the search result.
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = characters.filter(character =>
      character.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  // The handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = event => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
  };


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log("hello", res.data.results);
      setCharacters(res.data.results);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => {
        return <CharacterCard key={character.id} character={character} />
      })}
    </section>
  );
}
