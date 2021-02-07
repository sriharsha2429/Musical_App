import React,{ useEffect ,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchField from "react-search-field";
import {songsListProducts} from '../../actions/SongsListActions';

const HomeScreen=(props)=>{
    const songsList = useSelector((state) => state.songsList);
  const { songs, loading, error } = songsList;
  const [searchSong,setSearchSong]=useState('');
  //const [songs,setSongs]=useState({songss});
  //const category = props.match.params.id ? props.match.params.id : '';
  
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(songsListProducts());
   return () => {
     //
   };
 }, []);

 const updateInput = (input) => {
    const filtered = songs.filter(song => {
     return song.name.toLowerCase().includes(input.toLowerCase())
    })
    setSearchSong(input);
    //setSongs(filtered);
 }

 

    return (
        
        <div>
           
             <div className="container">SONGSLIST</div>
             <label htmlFor="search song">Search the song</label>
             <input value={searchSong}  onChange={(e)=>setSearchSong(e.target.value)}></input>
{songs.map(song=><div key={song.id}>
            <div>{song.title}</div>
            <div><img src={song.image} alt="new"/></div>
        </div>)}
        </div>
    )     
         
}
export default HomeScreen;