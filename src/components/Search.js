import React from "react";

function Search(props) {
  const { search, term, setTerm } = props;

  function handleChange(changeEvent) {
    props.search(props.term);
    setTerm(changeEvent.target.value);
  }

  function onSubmit(event) {
    search(term);
  }
  return (
    <form className="Search" id="searchAPI">
      <p style={{ color: "blue" }}>
        <em>{term && "you searched for: " + term}</em>
      </p>
      <input
        className="searchInput"
        type="text"
        autoFocus="autoFocus"
        value={props.term}
        onChange={handleChange}
        id="term"
      />
      <input className="submitButton" type="submit" onClick={onSubmit} />
    </form>
  );
}
export default Search;
