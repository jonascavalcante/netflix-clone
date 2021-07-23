import React, { useState, useEffect } from 'react';

import TmdbRequests from './API';

function App() {

  const [movieList, setMovieList] = useState('');

  useEffect(() => {

    (async () => {
      let list = await TmdbRequests.getHomeList();
      setMovieList(list);
    })();

  }, [])

  return (
    <>
      {movieList !== '' && console.log(movieList)}
    </>
  );
}

export default App;
