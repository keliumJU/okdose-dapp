import DisplayCardInformation from '../components/common/DisplayCardInformation';
import PrescriptionView from '../components/PrescriptionView';
import {useEffect, useState} from 'react';
import {Wallet} from '../near/nearWallet';
import NearInterface from '../near/nearInterface';
import {prescribeMiltefosine} from '../../okdose/transmission-types/transmitted-by-vectors/leishmaniasis';
import i18n from '../i18n/i18n';
import {I18nextProvider} from 'react-i18next';
import WeightCard from '../components/common/WeightCard';

function Home () {
  const wallet = new Wallet({createAccessKeyFor: process.env.MAIN_ACCOUNT});
  const [prescription, setPrescription] = useState({});

  useEffect(() => {
    const getPrescription = async () => {
      await wallet.startUp();
      const nearInterface = new NearInterface({walletToUse: wallet});
      const response = await prescribeMiltefosine(nearInterface, 70);
      const result = await response;
      setPrescription(result);
    };
    getPrescription().catch(console.error);
  }, []);

  return (
    <div className='static'>
      <h1>OKdose</h1>
      <div className='flex flex-col justify-center items-center pl-5 pr-5 pb-0 gap-16'>
        <DisplayCardInformation />
        <I18nextProvider i18n={i18n}>
          <WeightCard />
          <PrescriptionView prescription={prescription} />
        </I18nextProvider>
      </div>
    </div>
  );
}

export default Home;
