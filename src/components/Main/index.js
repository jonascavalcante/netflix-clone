import React from 'react';

import  MainTag from './styled';

const Main = (props) => {

  return (
    <MainTag>
      {props.children}
    </MainTag>
  );
}

export default Main;
