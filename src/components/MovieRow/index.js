import React, { useState } from 'react';

import { Arrow, Container, Image, Item, List, ListArea, NavigateBeforeIcon, NavigateNextIcon, Title } from './styled';

const MovieRow = ({ title, items }) => {

  const [scrollX, setScrollX] = useState(0);

  const handleArrowLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleArrowRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150;
    if ((window.innerWidth - listWidth) > x) {
      x = (window.innerWidth - listWidth) - 60;
    }
    setScrollX(x);
  }

  return (
    <Container>

      <Title>{title}</Title>

      <Arrow
        className="arrowLeft"
        onClick={handleArrowLeft}
      >
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </Arrow>

      <Arrow
        className="arrowRight"
        onClick={handleArrowRight}
      >
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </Arrow>

      <ListArea>

        <List
          marginLeft={scrollX}
          width={items.results.length}
        >

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
