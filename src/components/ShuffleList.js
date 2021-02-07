import React, { useState } from 'react';
import Image from '../images/image5.jpg';
const ShuffleList=(props)=>{
 const [shufflePosts,setShufflePosts]=useState([]);
    function shuffleArray(array) {
            let i = array.length - 1;
            for (; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
            setShufflePosts(array);
            return array;
          }
  return (
      <div>
          
          <img src={Image} className="bg" />
          {()=>shuffleArray(props.data)}
          { shufflePosts.map((d) => {
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
      </div>
  )
}
export default ShuffleList;


// // function shuffleArray(array) {
// //     let i = array.length - 1;
// //     for (; i > 0; i--) {
// //       const j = Math.floor(Math.random() * (i + 1));
// //       const temp = array[i];
// //       array[i] = array[j];
// //       array[j] = temp;
// //     }
// //     return array;
// //   }
  
// //   function RecommendedPosts({ posts }) {
// //     const shuffledPosts = shuffleArray(posts);
// //     return (
// //       <ul>
// //         {shuffledPosts.map((post) => {
// //           return (
// //             <li key={post.id}>
// //               <p>{post.title}</p>
// //               <p>{post.text}</p>
// //               <p>{post.category}</p>
// //               <Link to={`/blog/post-1/:${post.id}`}>Weiter lesen</Link>
// //             </li>
// //           );
// //         })}
// //       </ul>
// //     );
// //   }
// //   RecommendedPosts.propTypes = {
// //     posts: React.PropTypes.array,
// //   };
















