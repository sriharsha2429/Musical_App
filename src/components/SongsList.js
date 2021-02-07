import React from 'react';

const SongsList = ({songList=[]}) => {
  return (
    <>
    { songList.map((data) => {
        if (data) {
          return (
            <div key={data.id}>
                <h1 style={{ color: 'blue' }}>{`${data.id}.${data.title}`}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default SongsList