import PropTypes from 'prop-types';

function FooterButton ({title}) {
  return (
    <>
      <button className='bg-blue-pale not-italic font-semibold text-sm p-3 gap-3 w-full'>
        {title}
      </button>
    </>
  );
}

FooterButton.propTypes = {
  title: PropTypes.string.isRequired
};

export default FooterButton;
