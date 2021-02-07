import React from 'react';

const SearchBar = (props) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={props.input}
     placeholder={"search song"}
     onChange={(e) => props.update(e.target.value)}
    />
  );
}

export default SearchBar