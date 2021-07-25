import React, { useState, useEffect } from 'react';

import TmdbRequests from './API';
import FeatureMovie from './components/FeatureMovie';

import MovieRow from './components/MovieRow';

import GlobalStyle from './styles/GlobalStyle';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    (async () => {

      let list = await TmdbRequests.getHomeList();
      setMovieList(list);

      let originals = list.filter( i => i.slug === 'originals');
      let randomMovies = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let movie = originals[0].items.results[randomMovies];

      let movieInfo = await TmdbRequests.getMovieInfo(movie.id, 'tv');

      setFeatureData(movieInfo);

    })();
  }, [])

  return (
    <>
      <GlobalStyle />

      {featureData &&
        <FeatureMovie
          item={featureData}
        />
      }

      {featureData && movieList.length > 0 &&
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
