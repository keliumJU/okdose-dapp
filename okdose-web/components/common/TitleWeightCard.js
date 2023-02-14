import PropTypes from 'prop-types';

function TitleWeightCard ({title}) {
  return (
    <div
      className='not-italic font-normal text-lg text-center text-white
      flex flex-row justify-center items-center px-6 gap-2 bg-blue-800 rounded-full'
    >
      {title}
    </div>
  );
}

TitleWeightCard.propTypes = {
  title: PropTypes.string.isRequired
};

export default TitleWeightCard;
