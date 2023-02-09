import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import * as dotenv from 'dotenv';
import {join} from 'path';
import PrescriptionView from '../components/PrescriptionView';
import i18n from '../i18n/i18n';
import {I18nextProvider} from 'react-i18next';

dotenv.config({path: join(__dirname, '../', '.env')});

describe('Test rendering of components', () => {
  let miltefosine;
  beforeEach(() => {
    miltefosine = {
      name: 'leishmaniasis.miltefosine.name',
      presentation: 'leishmaniasis.miltefosine.presentation',
      weightDose: ['38 mg', '150.0 mg'],
      frequency: 'leishmaniasis.miltefosine.frequency',
      treatmentTime: 'leishmaniasis.miltefosine.treatment_time',
      warning: 'leishmaniasis.miltefosine.warning_under_150_mg',
      note: 'leishmaniasis.miltefosine.note'
    };
  });
  // unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  test('prescription component rendering with translations in english', () => {
    i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <PrescriptionView prescription={miltefosine} />,
      </I18nextProvider>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByTestId('presentation')).toBeInTheDocument();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.leishmaniasis.miltefosine.note
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.leishmaniasis.miltefosine.note
      )
    ).toHaveTextContent('Dosage divided into 2 to 3 daily doses');
  });

  test('prescription component rendering with translations in spanish', () => {
    i18n.changeLanguage('es');
    render(
      <I18nextProvider i18n={i18n}>
        <PrescriptionView prescription={miltefosine} />,
      </I18nextProvider>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByTestId('presentation')).toBeInTheDocument();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.leishmaniasis.miltefosine.note
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.leishmaniasis.miltefosine.note
      )
    ).toHaveTextContent('Dosificación dividida en 2 a 3 dosis diarias');
  });
});
