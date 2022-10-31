import React from 'react';
import { SectionTitle } from './Feedback.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};
