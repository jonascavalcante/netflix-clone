import React from 'react';

import { Container, Image } from './styled';

const Loading = () => {

  return (
    <Container>
      <Image
        src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
        alt="Loading..."
      />
    </Container>
  );
}

export default Loading;
