import React from 'react';
import PropTypes from 'prop-types';
import { List, TagButton } from './filter.css';
const Filter = ({ tags, defaultTag, currentTag, setCurrentTag }) => {
  const initTag = defaultTag || tags[0];
  const isCurrent = tag => tag === currentTag;

  return (
    <List>
      <li>
        <TagButton
          onClick={e => setCurrentTag(e.target.value)}
          value={initTag}
          current={isCurrent(initTag)}
        >
          {initTag}
        </TagButton>
      </li>
      {tags.map((tag, idx) => (
        <li key={idx}>
          <TagButton
            onClick={e => setCurrentTag(e.target.value)}
            value={tag}
            current={isCurrent(tag)}
          >
            {tag}
          </TagButton>
        </li>
      ))}
    </List>
  );
};

export default Filter;

Filter.propTypes = {
  tags: PropTypes.array.isRequired,
  defaultTag: PropTypes.string,
  currentTag: PropTypes.string.isRequired,
  setCurrentTag: PropTypes.func.isRequired,
};
