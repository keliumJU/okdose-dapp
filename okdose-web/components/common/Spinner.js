import Loader from '../../assets/images/icons/loader.svg';

function Spinner () {
  return (
    <div data-testid='spinner'>
      <img className='animate-spin' src={Loader} alt='loader' />
    </div>
  );
}

export default Spinner;
