import okdoseLogo from '../../assets/images/icons/okdoseLogo.svg';
import PropTypes from 'prop-types';

function Header ({type}) {
  const stylesHeader = {
    welcome: '',
    home: 'flex flex-col items-center w-full h-56 pt-52 bg-no-repeat bg-cover bg-home-background-mobile'
  };
  return (
    <div data-testid='header' className={`${stylesHeader[type]}`}>
      <img
        src={okdoseLogo}
        className='w-56'
        alt='logo'
        data-testid='logo-image'
      />
    </div>
  );
}

Header.defaultProps = {
  type: ''
};

Header.propTypes = {
  type: PropTypes.string
};

export default Header;
