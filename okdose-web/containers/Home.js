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
    <div>
      {loadWelcome && <Welcome />}
      <div>
        <header className='mb-16'>
          <Header type='home' />
        </header>
        <div className='flex flex-col'>
          <aside>
            <p className='mb-2 p-5 text-dark-gray text-center'>
              {t('app_info.dropdown_description')}
            </p>
            <DropdownMenu />
          </aside>
          <main>
            <CardInputWeight
              titleContent={t('app_info.card_selection_title')}
              description={t('app_info.input_weight_description', {weight: '5'})}
              lowerBound={5}
              upperBound={50}
              disableComponent={false}
            />
          </main>
        </div>
        <footer className='mt-auto px-5'>
          <Footer showExtraInfo={true} />
        </footer>
      </div>
    </div>
  );
}

export default Home;
