import DisplayCardInformation from '../components/common/DisplayCardInformation';
import PrescriptionView from '../components/PrescriptionView';
import {useEffect, useState} from 'react';
import {Wallet} from '../near/nearWallet';
import NearInterface from '../near/nearInterface';
import {prescribeMiltefosine} from '../../okdose/transmission-types/transmitted-by-vectors/leishmaniasis';
import WeightCard from '../components/common/WeightCard';
import Welcome from '../components/Welcome';
import DropdownMenu from '../components/DropdownMenu';

function Home () {
  const wallet = new Wallet({createAccessKeyFor: process.env.MAIN_ACCOUNT});
  const [prescription, setPrescription] = useState({});
  const [loadWelcome, setLoadWelcome] = useState(false);
  const DEFAULT_WEIGHT = 70;

  useEffect(() => {
    setTimeout(() => {
      setLoadWelcome(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const getPrescription = async () => {
      await wallet.startUp();
      const nearInterface = new NearInterface({walletToUse: wallet});
      const response = await prescribeMiltefosine(
        nearInterface,
        DEFAULT_WEIGHT
      );
      const result = await response;
      setPrescription(result);
    };
    getPrescription().catch((e) => {
      console.error(e);
    });
  }, []);

  return (
    <div className='static'>
      {loadWelcome ? (
        <>
          <Welcome />
        </>
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <h1 className='uppercase overflow-hidden text-lg'>Mycobactéries</h1>
          <h1>OKdose</h1>
          <WeightCard />
          <DisplayCardInformation prescription={prescription} />
          <PrescriptionView prescription={prescription} />
          <DropdownMenu />
        </div>
      )}
    </div>
  );
}

export default Home;
