import styled from 'styled-components';

const Feature = styled.div`
  height: 80vh;

  padding: 70px 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  background:
      linear-gradient(to top, rgba(0, 0, 0, 1) 2%, transparent 50%, rgba(0, 0, 0, 0.5)),
      linear-gradient(to right, rgba(0, 0, 0, 0.95) 35%, transparent 60%, rgba(0, 0, 0, 0.5)),
      url(${props => props.image})
  ;
  background-size: cover;
  background-position: center;
`;

const Name = styled.h2`
  font-size: 60px;
  font-weight: 700;
`;

const Info = styled.div`
  font-size: 18px;
  font-weight: 700;

  display: flex;
  gap: 15px;
`;

const Points = styled.p`
  color: #46d369;
`;

const Year = styled.p``;

const Seasons = styled.p``;

const Description = styled.p`
  max-width: 40%;
  font-size: 20px;
  color: #999;

  overflow: hidden;
  text-overflow: ellipsis; // Adicionando "..." ao final
  display: -webkit-box;
  -webkit-line-clamp: 5; // Quantidade de linhas
  -webkit-box-orient: vertical;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 25px;

  font-size: 20px;
  font-weight: 700;

  color: ${props => props.name === 'play' ? '#000' : '#fff'};
  background-color: ${props => props.name === 'play' ? '#fff' : '#333'};

  border-radius: 5px;
  border: none;
  outline: transparent;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    background-color: ${props => props.name === 'play' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(51, 51, 51, 0.85)'};
  }
`;

const Genres = styled.p`
  font-size: 18px;
  color: #999;
`;

export { Feature, Name, Info, Points, Year, Seasons, Description, Buttons, Button, Genres };
