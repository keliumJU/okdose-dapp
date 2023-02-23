import forwardArrowIcon from '../../assets/images/icons/forwardArrowIcon.svg';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';

function DisplayCardInformation ({
  title,
  description,
  showViewMore,
  showDoseIcon,
  cardDoseIcon,
  type
}) {

  const {t} = useTranslation();

  const cardStyles = {
    info: 'text-indigo-700',
    warning: 'text-black'
  };

  return (
    <div className='w-full px-5 pb-5 pt-0 mb-1'>
      <div>
        <div className={`${cardStyles[type]} flex text-lg font-bold`}>
          {showDoseIcon && <img className='pr-3' src={cardDoseIcon} />}
          <h1>{t(`${title}`)}</h1>
        </div>
        <div className='py-5 text-sm font-normal'>
          <p>{t(`${description}`)}</p>
        </div>
      </div>
      {showViewMore && (
        <div className='flex flex-row justify-end items-center text-sm not-itali font-normal mb-5'>
          <p>{t('app_info.see_more')}</p>
          <img className='pl-1' src={forwardArrowIcon} alt='icon-next' />
        </div>
      )}
      <hr className='divide-solid bg-gray-200 h-1' />
    </div>
  );
}

DisplayCardInformation.defaultProps = {
  showViewMore: false,
  showDoseIcon: false,
};

DisplayCardInformation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showViewMore: PropTypes.bool,
  showDoseIcon: PropTypes.bool,
  cardDoseIcon: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default DisplayCardInformation;
