import React from "react";
const Search = ({ value, change }) => {
  return (
    <>
      <input type="text" value={value} placeholder="Search" onChange={change} />
    </>
  );
};
export default Search;
