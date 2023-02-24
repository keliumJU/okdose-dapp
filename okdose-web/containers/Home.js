import {useEffect, useState} from 'react';
import Welcome from '../components/Welcome';
import DropdownMenu from '../components/DropdownMenu';
import CardInputWeight from '../components/CardInputWeight';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import {t} from 'i18next';
import DisplayCardInformation from 'components/common/DisplayCardInformation';
import timerIcon from '@icons/timerIcon.svg';
import warningIcon from '@icons/warningIcon.svg';
import {HEADER_TYPES, CARD_TYPES} from '../constants';

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
        <Header type={HEADER_TYPES.home} />
      </header>
      <div className='mt-5 mb-16 w-full flex flex-col md:flex-row md:justify-center'>
        <aside className='h-1/2 px-5 2md:pt-10 lg:pt-24'>
          <p className='mb-2 p-5 text-dark-gray text-center'>
            {t('app_info.dropdown_description')}
          </p>
          <DropdownMenu />
        </aside>
        <main>
          <div className='hidden 2md:block md:px-10 md:pt-16 md:pb-5 lg:pt-28'>
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
            <div className='pt-5'>
              <DisplayCardInformation
                type={CARD_TYPES.warning}
                title={t('card_info.warning')}
                description={t('leishmaniasis.miltefosine.warning_under_10_kg')}
                showIcon={true}
                cardIcon={warningIcon}
              />
              <DisplayCardInformation
                type={CARD_TYPES.info}
                title={t('card_info.dose')}
                description={'6.0 ml(600mg) IM every day'}
                showIcon={true}
                cardIcon={timerIcon}
              />
              <DisplayCardInformation
                type={CARD_TYPES.info}
                title={t('leishmaniasis.miltefosine.name')}
                description={
                  'Amp 1500 mg x 5ml (sb5 + 405 mg) \n Dosage max: (20 mg/kg/day)'
                }
                showViewMore={true}
                seeMore={t('app_info.see_more')}
              />
              <DisplayCardInformation
                type={CARD_TYPES.info}
                title={t('leishmaniasis.n_metil_glucamine.name')}
                description={'Vial 300 mg, 60 mg/ml \n (4 mg/kg/day)'}
                showViewMore={true}
                seeMore={t('app_info.see_more')}
              />
            </div>
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
