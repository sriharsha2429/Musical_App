import React,{ useEffect ,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {songsListProducts} from '../actions/SongsListActions';
import Image from '../images/image5.jpg';
import {Link} from 'react-router-dom';

const AddPlayList=()=>{
     const songsList = useSelector((state) => state.songsList);
    const { songs } = songsList;
    //dispatching the action
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(songsListProducts());
     return () => {
       //
     };
   }, []);
  
  //  const storeinLocal=(data)=>{
  //      const lists=[];
  //       localStorage.setItem('myvalue',data);
  //       lists.push(data.title);
  //      // setList(lists)
  //       console.log(setList);
         
  //   }
      return (
          <div>
               <img src={Image} className="bg" />
               <div className="container">SONGSLIST</div>
  {songs.map(song=><div key={song.id}>
      <div>
      <h1 style={{ color: 'red' }}>{song.title}</h1>
      <Link to="/playlist">
     <button type="button">
          ADD SONG
     </button>
 </Link>
              
          </div>
            
          </div>)}
          </div>
      )     
         
}
export default AddPlayList;