//import HomeScreen from './components/HomeComponent/HomeScreen';
import SearchList from './components/SearchList';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PlayList from './components/PlayList';
import AddPlaylist from './components/AddPlayList';
import ShuffleList from './components/ShuffleList';

function App() {
  //routing 
  return (
    <BrowserRouter>
    <Route path="/AddPlaylist" component={AddPlaylist}/>
    <Route path="/playlist" component={PlayList}/>
    <Route path="/shufflelist" component={ShuffleList}/>
    <Route path="/VBI_MUSIC" exact={true} component={SearchList}/>
    </BrowserRouter>
    
  );
}

export default App;
