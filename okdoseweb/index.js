import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n/i18n';
import { Wallet } from '@near-wallet';
import App from './App';

const wallet = new Wallet({ createAccessKeyFor: process.env.MAIN_ACCOUNT });

// Setup on page load
window.onload = async () => {
  await wallet.startUp();

  createRoot(document.getElementById('root')).render(
    <Suspense fallback="loading">
      <App wallet={wallet} />
    </Suspense>,
  );
};
