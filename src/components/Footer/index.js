import React from 'react';

import { FooterTag, Link, Paragraph, Span } from './styled';

const Footer = () => {

  return (
    <FooterTag>

      <Paragraph>
        Clone Website: <Link target="_blank" href="https://www.netflix.com">Netflix</Link>
      </Paragraph>

      <Paragraph>
        Database movies from
        <Link target="_blank" href="https://developers.themoviedb.org/3/getting-started/introduction"> The Movie Database API</Link>
      </Paragraph>

      <Paragraph>
        Coded with
        <Span role="img" aria-label="heart"> ❤ </Span>
        by
        <Link target="_blank" href="https://www.linkedin.com/in/jonascavalcante"> Jonas Cavalcante</Link>
      </Paragraph>

    </FooterTag>
  );
}

export default Footer;
