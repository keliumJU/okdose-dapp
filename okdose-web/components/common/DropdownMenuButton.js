import PropTypes from 'prop-types';
import rightIcon from '../../assets/images/icons/rightIcon.svg';

function DropdownMenuButton ({title}) {
  return (
    <button className='flex flex-row w-full text-neutral-500 p-4 focus:text-indigo-700'>
      <h6 className='text-xl font-medium text-left'>{title}</h6>
      <div className='ml-auto'>
        <img src={rightIcon} className='min-w-min min-h-min' alt='right-icon' />
      </div>
    </button>
  );
}

DropdownMenuButton.propTypes = {
  title: PropTypes.string.isRequired
};

export default DropdownMenuButton;
