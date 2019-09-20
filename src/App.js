import React from "react";
import {Route, Link} from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <Link to='/'>Home</Link>
      
      <Route exact path='/' component={WelcomePage} />
      <Route exact path ='/character-list' component={CharacterList} />
      
    </main>
  );
}
