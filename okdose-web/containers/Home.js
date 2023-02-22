import {useEffect, useState} from 'react';
import Welcome from '../components/Welcome';
import DropdownMenu from '../components/DropdownMenu';
import CardInputWeight from '../components/CardInputWeight';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import {t} from 'i18next';

function Home () {
  const [loadWelcome, setLoadWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadWelcome(false);
    }, 2000);
  }, []);

  return (
    <div className='items-center sm:bg-no-repeat sm:bg-home-background-medium lg:bg-cover'>
      {loadWelcome && <Welcome />}
      <header className='mb-16'>
        <Header type='home' />
      </header>
      <div className='mt-5 mb-16 w-full flex flex-col md:flex-row md:items-center md:justify-center'>
        <aside className='h-1/2 md:w-1/2 lg:w-1/3 px-5 pt-10'>
          <p className='mb-2 p-5 text-dark-gray text-center'>
            {t('app_info.dropdown_description')}
          </p>
          <DropdownMenu />
        </aside>
        <main>
          <div className='hidden md:block md:px-10 md:pt-16 md:pb-5 lg:pt-28'>
            <CardInputWeight
              showCategoryIcon={true}
              showTitleCard={true}
              titleCard={t('app_info.card_category_title')}
              titleContent={t('app_info.card_selection_title')}
              description={t('app_info.input_weight_description', {
                weight: '5'
              })}
              disableComponent={false}
            />
          </div>
        </main>
      </div>
      <footer className='m-auto px-5 max-w-sm'>
        <Footer showExtraInfo={true} />
      </footer>
    </div>
  );
}

export default Home;
