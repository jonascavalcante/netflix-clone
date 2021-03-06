import React, { useState, useEffect } from 'react';

import TmdbRequests from './API';

import Header from './components/Header';
import FeatureMovie from './components/FeatureMovie';
import MovieRow from './components/MovieRow';

import GlobalStyle from './styles/GlobalStyle';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Main from './components/Main';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setBlackHeader(true)
    } else {
      setBlackHeader(false)
    }
  };

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  }, [])

  useEffect(() => {
    (async () => {

      let list = await TmdbRequests.getHomeList();
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals');
      let randomMovies = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let movie = originals[0].items.results[randomMovies];

      let movieInfo = await TmdbRequests.getMovieInfo(movie.id, 'tv');

      setFeatureData(movieInfo);

    })();
  }, [])

  return (
    <>
      <GlobalStyle />

      <Header black={blackHeader} />

      {featureData &&
        <FeatureMovie
          item={featureData}
        />
      }

      {featureData && movieList.length > 0 &&
        <Main>
          {movieList.map((item, key) => (
            <MovieRow
              key={key}
              title={item.title}
              items={item.items}
            />
          ))}
        </Main>
      }

      {featureData &&
        <Footer />
      }

      {!featureData &&
        <Loading />
      }

    </>
  );
}

export default App;
