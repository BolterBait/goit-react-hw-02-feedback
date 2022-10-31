import React from 'react';
import { NotificationMessage } from './Feedback.styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
