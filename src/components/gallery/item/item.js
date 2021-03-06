import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import posed from 'react-pose';

import { Title, Copy, StyledFigure } from './item.css';

const Item = ({ title, description, image, path, clickable }) => {
  const Container = clickable ? LinkCard : Card;
  return (
    <Container path={path}>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      <figcaption>
        <Title>{title}</Title>
        <Copy>{description}</Copy>
      </figcaption>
    </Container>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
  path: PropTypes.string,
  clickable: PropTypes.bool,
};

export default Item;

const Card = ({ children }) => <figure>{children}</figure>;
Card.propTypes = {
  children: PropTypes.element.isRequired,
};

const LinkCard = ({ children, path }) => {
  const PosedCard = posed(StyledFigure)({
    hoverable: true,
    init: {
      x: 0,
      y: 0,
      boxShadow: '0px 0px 0px 0px #000000, 0px 0px 7px 1px rgba(0,0,0,0.26)',
      transition: {
        type: 'spring',
        stiffness: 1000,
        damping: 20,
      },
    },
    hover: {
      y: -6,
      boxShadow: '0px 10px 13px -7px #000000, 0px 0px 7px 1px rgba(0,0,0,0.26)',
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 15,
      },
    },
  });

  return <PosedCard onClick={() => navigate(`/${path}`)}>{children}</PosedCard>;
};

LinkCard.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};
