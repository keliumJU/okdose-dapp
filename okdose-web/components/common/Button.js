import backArrowIcon from '../../assets/images/icons/backArrowIcon.svg';
import PropTypes from 'prop-types';

function Button ({type, title, disable}) {
  const buttonStyles = {
    back: 'w-1/3 h-[50px] bg-sky-500 rounded-lg',
    weight: 'w-full h-[50px] bg-indigo-600 rounded shadow',
    weightDisable: 'w-full h-[50px] bg-[#CED2DE] rounded shadow'
  };

  return (
    <button
      disabled={disable}
      className={`${buttonStyles[type]} not-italic font-semibold text-base text-center text-white flex flex-row justify-center items-center px-6 gap-2`}
    >
      {type === 'back' && <img src={backArrowIcon} alt='icon-back' />}
      {title}
    </button>
  );
}

Button.defaultProps = {
  disable: false
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired
};

export default Button;
