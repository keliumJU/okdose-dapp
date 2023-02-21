import PropTypes from 'prop-types';

function AlertCard ({msg}) {
  return (
    <p className='mb-10 bg-light-red text-strong-red text-sm font-normal'>
      {msg}
    </p>
  );
}

AlertCard.propTypes = {
  msg: PropTypes.string.isRequired
};

export default AlertCard;
