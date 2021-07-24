import React, { useState, useEffect } from 'react';

import TmdbRequests from './API';

import GlobalStyle from './styles/GlobalStyle';

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
      <GlobalStyle />
    </>
  );
}

export default App;
