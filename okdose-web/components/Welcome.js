import Spinner from './common/Spinner';
import Footer from './common/Footer';
import Header from './common/Header';

function Welcome () {
  return (
    <div
      className='flex flex-col items-center h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-welcome-background-mobile
      sm:flex sm:h-screen sm:bg-welcome-background'
    >
      <div className='flex flex-grow flex-col items-center justify-center mt-60 p-10 sm:flex sm:m-auto sm:mt-60 sm:w-[374px] sm:h[72px]'>
        <Header />
        <Spinner />
      </div>
      <div className='p-5 mb-20 sm:w-96 sm:h-40'>
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
