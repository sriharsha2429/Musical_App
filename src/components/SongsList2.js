import React from 'react';

const SongsLists = ({songList=[]}) => {
 

  return (
    <>
    { songList.map((data,index) => {
        if (data) {
          return (
            <div key={data.id}>
                <div>
                <h1 style={{ color: 'blue' }}>{`${data.id}.${data.title}`}</h1>
                <button>Add</button>
                </div>
                
               
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default SongsLists