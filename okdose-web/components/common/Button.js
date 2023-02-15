import backArrowIcon from '../../assets/images/icons/backArrowIcon.svg';
import PropTypes from 'prop-types';

function Button ({type, title}) {
  const buttonStyles = {
    back: 'w-[185px] h-[50px] bg-sky-500 rounded-lg',
    weight: 'w-[395px] h-[50px] bg-indigo-600 rounded'
  };

  return (
    <button
      className={`${buttonStyles[type]} not-italic font-semibold text-base text-center text-white flex flex-row justify-center items-center px-6 gap-2`}
    >
      {type === 'back' && <img src={backArrowIcon} alt='icon-back' />}
      {title}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Button;
