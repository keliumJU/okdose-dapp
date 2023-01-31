import React from 'react'
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import * as dotenv from 'dotenv';
import { join } from 'path';
import App from './App';
import { prescribeMiltefosine } from '../okdose/transmissionTypes/transmittedByVectors/leishmaniasis';
import NearInterface from './near/near-interface';
import { Wallet } from './near/near-wallet'

dotenv.config({path: join(__dirname, '../', '.env')})

describe('Test rendering of components', () => {
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

  test('App component rendering test', () => {
    render(
        <App prescription={miltefosine}/>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByTestId('presentation')).toBeInTheDocument();
  });
});
