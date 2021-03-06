import React from 'react';
import posed from 'react-pose';
import SplitText from 'react-pose-text';

import IO from 'components/io';
import Title from 'components/title';
import { Container } from './footer.css';
import { accent, primary, primaryLight } from 'constants/theme';

const AnimatedContainer = posed(Container)({
  start: {
    y: '2rem',
  },
  end: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 15,
      // duration: 200,
      round: true
    },
  },
});

const wordPoses = {
  hoverable: true,
};

const charPoses = {
  hover: {
    y: 0,
    transition: ({ charInWordIndex }) => ({
      type: 'spring',
      velocity: 25 * Math.sin(1 + charInWordIndex),
      damping: 0,
    }),
  },
  init: {
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 1000,
    },
  },
};

const Footer = () => (
  <IO as="footer" rootMargin="-30px">
    {({ isVisible, hasBeenVisible }) => (
      <AnimatedContainer
        isVisible={isVisible}
        pose={isVisible ? 'end' : 'start'}
      >
        <ul>
          <li>
            <a href="https://github.com/billybunn">
              <SplitText wordPoses={wordPoses} charPoses={charPoses}>
                GitHub
              </SplitText>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/billybunn/">
              {' '}
              <SplitText wordPoses={wordPoses} charPoses={charPoses}>
                LinkedIn
              </SplitText>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/billybunn">
              {' '}
              <SplitText wordPoses={wordPoses} charPoses={charPoses}>
                Twitter
              </SplitText>
            </a>
          </li>
        </ul>
        <Title as="h4" size="small">
          &copy; Billy Bunn {new Date().getFullYear()}
        </Title>
      </AnimatedContainer>
    )}
  </IO>
);

export default Footer;
