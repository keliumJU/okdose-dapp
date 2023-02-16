import PropTypes from 'prop-types';

function DropdownMenuButton ({title, icon}) {
  return (
    <button className='flex flex-row w-full text-neutral-500 p-4 focus:text-indigo-700'>
      <div className='text-xl font-medium text-left'>{title}</div>
      <div className='ml-auto'>
        <img src={icon} className='w-5 h-5' alt='caret-down-icon' />
      </div>
    </button>
  );
}

DropdownMenuButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default DropdownMenuButton;
