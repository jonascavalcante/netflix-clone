import React from 'react';

import { HeaderTag, Image, Link, Logo, User } from './styled';

const Header = ({ black }) => {

  return (
    <HeaderTag
      backgroundColor={black}
    >

      <Logo>
        <Link href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Logo"
          />
        </Link>
      </Logo>

      <User>
        <Link href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="User"
          />
        </Link>
      </User>

    </HeaderTag>
  );
}

export default Header;
