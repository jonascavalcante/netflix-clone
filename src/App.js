import React, { useState, useEffect } from 'react';

import TmdbRequests from './API';
import MovieRow from './components/MovieRow';

import GlobalStyle from './styles/GlobalStyle';

function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {

    (async () => {
      let list = await TmdbRequests.getHomeList();
      setMovieList(list);
    })();

  }, [])

  return (
    <>
      <GlobalStyle />
      {movieList.length > 0 &&
        movieList.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
          />
        ))}
    </>
  );
}

export default App;
