import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

export const StyledFigure = styled.figure`
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding: 1rem;
`;
