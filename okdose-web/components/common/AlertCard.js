import PropTypes from 'prop-types';

function AlertCard ({msg}) {
  return (
    <p className='mb-10 bg-[#FFD9D9] text-[#DC2626] text-sm font-normal'>
      {msg}
    </p>
  );
}

AlertCard.propTypes = {
  msg: PropTypes.string.isRequired
};

export default AlertCard;
