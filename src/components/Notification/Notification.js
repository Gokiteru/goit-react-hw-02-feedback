import propTypes from 'prop-types';

const Notification = ({ message }) => (
  <p style={{ color: 'red' }}>{message}</p>
);

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;