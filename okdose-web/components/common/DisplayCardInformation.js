import forwardArrowIcon from '../../assets/images/icons/forwardArrowIcon.svg';
import PropTypes from 'prop-types';

function DisplayCardInformation ({
  title,
  description,
  showViewMore,
  seeMore,
  showIcon,
  cardIcon,
  type
}) {
  const cardStyles = {
    info: 'text-indigo-700',
    warning: 'text-black'
  };

  return (
    <div className='w-full px-5 pb-5 pt-0 mb-1'>
      <div>
        <div className={`${cardStyles[type]} flex text-lg font-bold`}>
          {showIcon && <img className='pr-3' src={cardIcon} />}
          <h1>{title}</h1>
        </div>
        <div className='py-5 text-sm'>
          <p className='whitespace-pre-line'>{description}</p>
        </div>
      </div>
      {showViewMore && (
        <div className='flex flex-row justify-end items-center text-sm mb-5'>
          <p>{seeMore}</p>
          <img className='pl-1' src={forwardArrowIcon} alt='icon-next' />
        </div>
      )}
      <hr className='divide-solid bg-gray-200 h-1' />
    </div>
  );
}

DisplayCardInformation.defaultProps = {
  showViewMore: false,
  showIcon: false
};

DisplayCardInformation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showViewMore: PropTypes.bool,
  seeMore: PropTypes.string,
  showIcon: PropTypes.bool,
  cardIcon: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default DisplayCardInformation;
