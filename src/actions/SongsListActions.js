//related to redux
//redux actions
import axios from 'axios';
import {SONGS_LIST_FAIL,SONGS_LIST_SUCCESS,SONGS_LIST_REQUEST} from '../constants/SongsListConstant';
const songsListProducts = () => async (dispatch) => {
    try {
      dispatch({ type: SONGS_LIST_REQUEST });
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos");
      dispatch({ type: SONGS_LIST_SUCCESS, payload: data });
    }
    catch (error) {
      dispatch({ type: SONGS_LIST_FAIL, payload: error.message });
    }
  }
  export {songsListProducts};