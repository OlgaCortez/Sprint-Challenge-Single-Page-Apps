import React, { useState, useEffect } from "react";
import characterList from './CharacterList';

export default function SearchForm() {

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

  return (
    <section className="search-form">
     <form>

    <input 
    onChange={handleChange}
    id="name" 
    type="text"
    name="textfield" 
    placeholder="Search"
    value={searchTerm} 
    />
    <button type="submit">Search</button>   
    </form> 
    <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li>{character}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
