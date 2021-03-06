import styled from 'styled-components';

const FooterTag = styled.footer`
  text-align: center;
  margin: 30px;
`;

const Paragraph = styled.p`
  color: #999;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Span = styled.span``;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
`;

export { FooterTag, Paragraph, Span, Link };
