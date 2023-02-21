import PropTypes from 'prop-types';

function FooterButton ({title}) {
  return (
    <>
      <button
        className='flex flex-col items-center justify-center mt-5 bg-light-blue
        text-gray-700 not-italic font-semibold text-sm p-3 w-full'
      >
        {title}
      </button>
    </>
  );
}

FooterButton.propTypes = {
  title: PropTypes.string.isRequired
};

export default FooterButton;
