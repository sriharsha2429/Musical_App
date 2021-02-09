import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Image from '../images/image5.jpg';
import ShuffleList from './ShuffleList';

const PlayList=(props)=>{
    const [data1,setData]=useState([{
        id: 1,
        title:"accusamus beatae ad facilis cum similique qui sunt"
    },
{
    id:2,
    title: "reprehenderit est deserunt velit ipsam",
},
{
    id:3,
    title: "officia porro iure quia iusto qui ipsa ut modi"
},
{
    id:4,
    title:"culpa odio esse rerum omnis laboriosam voluptate repudiandae"
}]);
const [data2,setData2]=useState([{
    id:1,
title:"culpa odio esse rerum omnis laboriosam voluptate repudiandae"
},
{
id:2,
title:"natus nisi omnis corporis facere molestiae rerum in"
},
{
id:3,
title:"accusamus ea aliquid et amet sequi nemo"
},
{
id:4,
title:"officia delectus consequatur vero aut veniam explicabo molestias"
}]);

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setData(array);
  }



// const updateInput = () => {
//     const filtered = data.map(song => {
//     return song.title
//    });
//    const randomIndex = Math.floor(Math.random() * filtered.length);

//     // get random item
//     const item = filtered[randomIndex];

//     setData()
//  }
   return (
       <div>
           <img src={Image} className="bg" />
           
<Link to="/" style={{ display: "flex" }}>
     <button style={{ marginLeft: "auto" }} type="button">
          All songs
     </button>
 </Link>
 <div className="container">
  <div className="vertical-center">
  { data1.map((d) => {
        if (d) {
          return (
            <div key={d.id}>
                 <table>
          <tr>
         <th style={{ color: 'blue',fontSize: "40px" }}>{`${d.id}.${d.title}`} </th>
        </tr>
        </table>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
  
  <Link to="/addplaylist">
     <button type="button">
          ADD PLAYLIST
     </button>
 </Link>
 <Link to="/shufflelist">
     <button type="button">
          SHUFFLE
     </button>
 </Link>
  </div>
</div>
<div>
</div>
<ShuffleList list={data1} />
       </div>
   );
}
export default PlayList;