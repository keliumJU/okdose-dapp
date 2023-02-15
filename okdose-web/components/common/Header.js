import okdoseLogo from '../../assets/images/icons/okdoseLogo.svg';

function Header () {
  return (
    <div data-testid='header'>
      <img src={okdoseLogo} alt='logo' />
    </div>
  );
}

export default Header;
