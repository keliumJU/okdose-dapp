import okdoseLogo from '../../assets/images/icons/okdoseLogo.svg';

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

export default Header;
