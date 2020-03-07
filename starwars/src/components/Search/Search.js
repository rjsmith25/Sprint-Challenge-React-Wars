import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  width: 400px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 14px;
`;

const Search = props => {
  return (
    <form className="searchCharacter">
      <SearchInput
        value={props.searchTerm}
        onChange={props.searchTermChange}
        type="text"
        placeholder="Search by name"
      />
    </form>
  );
};

export default Search;
