import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n/i18n';
import { Wallet } from './near/nearWallet';
import NearInterface from './near/nearInterface';
import { prescribeMiltefosine } from '../okdose/transmission-types/transmitted-by-vectors/leishmaniasis';

import App from './App';

const wallet = new Wallet({ createAccessKeyFor: process.env.MAIN_ACCOUNT });

// Setup on page load
window.onload = async () => {
  await wallet.startUp();
  const nearInterface = new NearInterface({ walletToUse: wallet });
  let miltefosine = await prescribeMiltefosine(nearInterface, 60)
  createRoot(document.getElementById('root')).render(
    <Suspense fallback="loading">
      <App prescription={miltefosine} />
    </Suspense>,
  );
};
