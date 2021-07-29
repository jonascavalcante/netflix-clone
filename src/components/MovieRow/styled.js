import styled from 'styled-components';

import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';

const Container = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  margin-left: 30px;
`;

const Arrow = styled.div`
  width: 40px;
  height: 225px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: ${props => props.className === 'arrowLeft' ? 0 : 'auto'};
  right: ${props => props.className === 'arrowRight' ? 0 : 'auto'};
  z-index: 99;

  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.2s;

  ${Container}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: 1;
  }
`;

const NavigateBeforeIcon = styled(NavigateBefore)``;

const NavigateNextIcon = styled(NavigateNext)``;

const ListArea = styled.div`
  padding-left: 30px;
  overflow-x: hidden;
`;

const List = styled.div`
  width: ${props => props.width * 150}px;
  margin-left: ${props => props.marginLeft}px;
  transition: all ease 0.2s;
`;

const Item = styled.div`
  width: 150px;
  display: inline-block;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;

  transform: scale(0.9);
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1);
  }
`;

export { Container, Title, Arrow, NavigateBeforeIcon, NavigateNextIcon, ListArea, List, Item, Image };
