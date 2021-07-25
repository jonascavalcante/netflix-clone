import styled from 'styled-components';

const HeaderTag = styled.header`
  height: 70px;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  z-index: 999;

  background-color: ${props => props.backgroundColor ? '#000' : 'transparent'};
  transition: all ease 1s;
`;

const Logo = styled.div`
  height: 25px;
`;

const Link = styled.a``;

const Image = styled.img`
  height: 100%;

  border-radius: ${props => props.alt === 'User' ? 3 : 0}px;
`;

const User = styled.div`
  height: 35px;
`;

export { HeaderTag, Logo, Link, Image, User };
