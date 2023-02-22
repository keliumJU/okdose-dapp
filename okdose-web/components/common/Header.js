import okdoseLogo from '@icons/okdoseLogo.svg';
import PropTypes from 'prop-types';

function Header ({type}) {
  const stylesHeader = {
    home: 'flex flex-col items-center w-full h-56 pt-52 bg-no-repeat bg-cover bg-home-background-mobile sm:bg-none',
    welcome: null
  };

  return (
    <div data-testid='header' className={stylesHeader[type]}>
      <img
        src={okdoseLogo}
        className='w-56 sm:w-72'
        alt='logo'
        data-testid='logo-image'
      />
    </div>
  );
}

Header.propTypes = {
  type: PropTypes.string.isRequired
};

export default Header;
