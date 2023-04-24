import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <input
      type="search"
      className="form-control"
      placeholder="Search Country..."
      value={text}
      onChange={(e) => onChange(e.target.value)}
      autoFocus
    />
  );
};

export default Search;
