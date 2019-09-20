import React, { useState } from "react";

export default function SearchForm() {
 const [search, setSearch] = useState();

 onChange = e => {
   setSearch({ search: e.target.value });
 }
  return (
    <section className="search-form">
      
    </section>
  );
}
