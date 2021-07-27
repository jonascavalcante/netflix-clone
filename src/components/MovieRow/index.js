import React from 'react';

import { Arrow, Container, Image, Item, List, ListArea, NavigateBeforeIcon, NavigateNextIcon, Title } from './styled';

const MovieRow = ({title, items}) => {

  return (
    <Container>

      <Title>{title}</Title>

      <Arrow className="arrowLeft">
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </Arrow>

      <Arrow className="arrowRight">
        <NavigateNextIcon style={{fontSize: 50}} />
      </Arrow>

      <ListArea>

        <List>

          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <Item key={key}>
                <Image
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.name}
                />
              </Item>
            ))
          }

        </List>

      </ListArea>

    </Container>
  );
}

export default MovieRow;
