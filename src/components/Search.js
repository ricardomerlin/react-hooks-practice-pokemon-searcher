import React, { useState } from "react";

function Search({ bringSearchUp}) {

  const[search, setSearch] = useState('')

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  bringSearchUp(search)

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
