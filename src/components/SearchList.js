import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SongList from './SongsList';
import {Link} from 'react-router-dom';
import Images from '../images/image5.jpg'

const SearchList = () => {
  const [input, setInput] = useState('');
  const [songsListDefault, setSongsListDefault] = useState();
  const [songsList, setSongsList] = useState();

  const fetchData = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
         setSongsList(data) 
         setSongsListDefault(data)
       });}

  const updateInput = (input) => {
     const filtered = songsListDefault.filter(song => {
     return song.title.toLowerCase().includes(input.toLowerCase()) 
    })
     setInput(input);
     setSongsList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
     <img src={Images} className="bg" />
      <h1 style={{ color: 'red' }}>Songs List</h1>
      <Link to="/playlist" style={{ display: "flex" }}>
     <button style={{ marginLeft: "auto" ,  color: 'red'}} type="button">
          PLAY LIST
     </button>
 </Link>
      <SearchBar 
       input={input} 
       update={updateInput}
      />

      <SongList songList={songsList}/>
    </>
   );
}

export default SearchList