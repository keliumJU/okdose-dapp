import Back from '../../assets/images/icons/back.svg';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';

function Button ({type, titleKey}) {
  const {t} = useTranslation();
  const buttonStyles = {
    back: 'w-[185px] h-[50px] bg-sky-500 rounded-lg',
    weight: 'w-[395px] h-[50px] bg-indigo-600 rounded'
  };

  return (
    <button
      className={`${buttonStyles[type]} not-italic font-semibold text-base text-center text-white flex flex-row justify-center items-center px-6 gap-2`}
    >
      {type === 'back' && <img src={Back} alt='icon-back' />}
      {t(`${titleKey}`)}
    </button>
  );
}

Button.defaultProps = {
  type: 'weight',
  titleKey: 'app_info.weight_button'
};
Button.propTypes = {
  type: PropTypes.string,
  titleKey: PropTypes.string
};

export default Button;
