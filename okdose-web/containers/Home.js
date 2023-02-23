import {useEffect, useState} from 'react';
import Welcome from '../components/Welcome';
import DropdownMenu from '../components/DropdownMenu';
import CardInputWeight from '../components/CardInputWeight';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import {t} from 'i18next';
import DisplayCardInformation from 'components/common/DisplayCardInformation';
import {transmissionTypes} from '../../okdose/app';
import {Wallet} from '../near/nearWallet';
import NearInterface from '../near/nearInterface';
import timerIcon from '@icons/timerIcon.svg';
import warningIcon from '@icons/warningIcon.svg';

function Home () {
  const wallet = new Wallet({createAccessKeyFor: process.env.MAIN_ACCOUNT});
  const [loadWelcome, setLoadWelcome] = useState(true);
  const [miltefosine, setMiltefosine] = useState({});
  const [nmetil, setNmetil] = useState({});

  const DEFAULT_WEIGHT = 5;
  const prescriptions =
    transmissionTypes.byVectors.diseases.leishmaniasis.prescriptions;

  useEffect(() => {
    const getPrescription = async () => {
      await wallet.startUp();
      const nearInterface = new NearInterface({walletToUse: wallet});
      let request = await prescriptions.prescribeMiltefosine(
        nearInterface,
        DEFAULT_WEIGHT
      );
      let response = await request;
      setMiltefosine(response);

      request = await prescriptions.prescribeNMetilGlucamine(
        nearInterface,
        DEFAULT_WEIGHT
      );
      response = await request;
      setNmetil(response);
    };
    getPrescription().catch((e) => {
      console.error(e);
    });
  }, []);
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
      <div className='mt-5 mb-16 w-full flex flex-col md:flex-row md:justify-center'>
        <aside className='h-1/2 px-5 min-[870px]:pt-10 lg:pt-24'>
          <p className='mb-2 p-5 text-dark-gray text-center'>
            {t('app_info.dropdown_description')}
          </p>
          <DropdownMenu />
        </aside>
        <main>
          <div className='hidden min-[870px]:block md:px-10 md:pt-16 md:pb-5 lg:pt-28'>
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
                type='warning'
                title={'app_info.card_info.warning'}
                description={miltefosine.warning}
                showDoseIcon={true}
                cardDoseIcon={warningIcon}
              />
              <DisplayCardInformation
                type='info'
                title={'app_info.card_info.dose'}
                description={miltefosine.weightDose}
                showDoseIcon={true}
                cardDoseIcon={timerIcon}
              />
              <DisplayCardInformation
                type='info'
                title={miltefosine.name}
                description={miltefosine.preparation}
                showViewMore={true}
              />
              <DisplayCardInformation
                type='info'
                title={nmetil.name}
                description={nmetil.preparation}
                showViewMore={true}
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
