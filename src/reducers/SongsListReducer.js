//actions reducer
import {SONGS_LIST_SUCCESS,SONGS_LIST_REQUEST,SONGS_LIST_FAIL} from '../constants/SongsListConstant'
const songsListReducer=(state={songs:[]},action)=>
{
    switch (action.type)
    {
        case   SONGS_LIST_REQUEST:
            return {loading:true,songs:[]};
        case SONGS_LIST_SUCCESS:
            return {loading:false,songs:action.payload};
        case SONGS_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;    


    }
}

export  {songsListReducer};