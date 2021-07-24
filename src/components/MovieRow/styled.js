import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  margin-left: 30px;
`;

const ListArea = styled.div`
  padding-left: 30px;
  overflow-x: hidden;
`;

const List = styled.div`
  width: calc(150 * 150px); //A ser configurado
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

export { Container, Title, ListArea, List, Item, Image };
