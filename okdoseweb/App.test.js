import React from 'react'
import {cleanup, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import { I18nextProvider } from 'react-i18next'
import * as dotenv from 'dotenv';
import { join } from 'path';
import App from './App';
import { prescribeMiltefosine } from '../okdose/transmissionTypes/transmittedByVectors/leishmaniasis';
import NearInterface from './near/near-interface';
import { Wallet } from './near/near-wallet'
import i18n from './i18n/i18n';

dotenv.config({path: join(__dirname, '../', '.env')})

describe('Multilanguage test for miltefosine', () => {
  const wallet = new Wallet({ createAccessKeyFor: process.env.MAIN_ACCOUNT });
  let nearInterface;
  let miltefosine;
  const weight = 70;

  beforeEach(async () => {
    await wallet.startUp();
    nearInterface = new NearInterface({ walletToUse: wallet });
    miltefosine = await prescribeMiltefosine(nearInterface, weight)
  });

  // Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
  // unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  test('English language test for miltefosine', () => {
    i18n.changeLanguage('en')
    const c = render(
      <I18nextProvider i18n={i18n}>
        <App prescription={miltefosine}/>,
      </I18nextProvider>
    );

    expect(c.getByText(i18n.getDataByLanguage('en').translation.leishmaniasis.miltefosine.note)).toBeDefined();
    expect(c.getByText(i18n.getDataByLanguage('en').translation.leishmaniasis.miltefosine.note))
      .toHaveTextContent('Dosage divided into 2 to 3 daily doses');

  });

  test('Spanish language test for miltefosine', () => {
    i18n.changeLanguage('es')
    const c = render(
      <I18nextProvider i18n={i18n}>
        <App prescription={miltefosine}/>,
      </I18nextProvider>
    );

    expect(c.getByText(i18n.getDataByLanguage('es').translation.leishmaniasis.miltefosine.note)).toBeDefined();
    expect(c.getByText(i18n.getDataByLanguage('es').translation.leishmaniasis.miltefosine.note))
      .toHaveTextContent('Dosificación dividida en 2 a 3 dosis diarias');
  });

  test('French language test for miltefosine', () => {
    i18n.changeLanguage('fr')
    const c = render(
      <I18nextProvider i18n={i18n}>
        <App prescription={miltefosine}/>,
      </I18nextProvider>
    );

    expect(c.getByText(i18n.getDataByLanguage('fr').translation.leishmaniasis.miltefosine.note)).toBeDefined();
    expect(c.getByText(i18n.getDataByLanguage('fr').translation.leishmaniasis.miltefosine.note))
      .toHaveTextContent('Posologie divisée en 2 à 3 doses quotidiennes');
  });
});
