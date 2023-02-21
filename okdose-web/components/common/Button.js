import backArrowIcon from '../../assets/images/icons/backArrowIcon.svg';
import PropTypes from 'prop-types';

function Button ({type, title, disabled}) {
  const buttonStyles = {
    back: 'w-1/3 h-[50px] bg-sky-500 rounded-lg',
    weight: 'w-full h-[50px] bg-indigo-600 rounded shadow',
    weightdisabled: 'w-full h-[50px] bg-very-light-gray rounded shadow'
  };

  return (
    <button
      disabled={disabled}
      className={`${buttonStyles[type]}bg-very-light-gray not-italic font-semibold text-base text-center text-white flex flex-row justify-center items-center px-6 gap-2`}
    >
      {type === 'back' && <img src={backArrowIcon} alt='icon-back' />}
      {title}
    </button>
  );
}

Button.defaultProps = {
  disabled: false
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default Button;
