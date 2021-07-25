import React from 'react';

import { Button, Buttons, Description, Feature, Genres, Info, Name, Points, Seasons, Year } from './styled';

const FeatureMovie = ({item}) => {

  let firstDate = new Date(item.first_air_date);

  let genres = [];
  for(let i in item.genres) {
    genres.push( item.genres[i].name );
  }

  return (
    <Feature
      image={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
    >

      <Name>{item.original_name}</Name>
      <Info>
        <Points>{item.vote_average} points</Points>
        <Year>{firstDate.getFullYear()}</Year>
        <Seasons>{item.number_of_seasons} season{item.number_of_seasons !== 1 ? 's' : ''}</Seasons>
      </Info>

      <Description>{item.overview}</Description>

      <Buttons>
        <Button info={item.id} name="play">▶ PLAY</Button>
        <Button info={item.id} name="my-list">+ MY LIST</Button>
      </Buttons>

      <Genres><strong>Genres: </strong>{genres.join(', ')}</Genres>

    </Feature>
  );
}

export default FeatureMovie;
