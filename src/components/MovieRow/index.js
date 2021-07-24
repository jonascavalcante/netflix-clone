import React from 'react';

import { Container, Image, Item, List, ListArea, Title } from './styled';

const MovieRow = ({title, items}) => {

  return (
    <Container>

      <Title>{title}</Title>

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
