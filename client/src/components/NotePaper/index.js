/**
 *
 * NotePaper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import H4 from '../H4';
import StyledNotePaper from './StyledNotePaper';

function NotePaper({ informations }) {
  const { title, infos, type } = informations;
  return (
    <StyledNotePaper>
      <H4>{title}</H4>
      {type === 'list' && (
        <ul>
          {infos.map(info => (
            <li key={info.subtitle}>
              <p>{info.subtitle}</p>
              <p>{info.text}</p>
            </li>
          ))}
        </ul>
      )}
      {type === 'html' && ( 
        <ul>
          {parse(infos)}
        </ul>
      )}
    </StyledNotePaper>
  );
}

NotePaper.defaultProps = {
  informations: {
    title: null,
    infos: {
      subtitle: null,
      text: null
    },
    type: null
  }
};

NotePaper.propTypes = {
  informations: PropTypes.shape({
    title: PropTypes.string,
    infos: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.shape({
        subtitle: PropTypes.string,
        text: PropTypes.string,
      })),
    ]),
    type: PropTypes.string,
  })
};

export default NotePaper;
