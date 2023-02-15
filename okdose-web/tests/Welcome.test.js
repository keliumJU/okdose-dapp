import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import i18n from '../i18n/i18n';
import {I18nextProvider} from 'react-i18next';
import Welcome from '../components/Welcome';

describe('Test rendering welcome component', () => {
  // unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  test('Welcome component rendering with translations in english', () => {
    i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <Welcome />,
      </I18nextProvider>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.app_info.footer_presentation
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.app_info.footer_presentation
      )
    ).toHaveTextContent(
      'OKDOSE is an application that supports the calculation of drug dosage and treatment time for Leishmaniasis, Malaria, Chagas, Rabies, Tuberculosis and Leprosy.'
    );
  });

  test('Welcome component rendering with translations in spanish', () => {
    i18n.changeLanguage('es');
    render(
      <I18nextProvider i18n={i18n}>
        <Welcome />,
      </I18nextProvider>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.app_info.footer_presentation
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.app_info.footer_presentation
      )
    ).toHaveTextContent(
      'OKDOSE es una aplicación que apoya el cálculo de la dosificación de medicamentos y tiempo de tratamiento para Leishmaniasis, Malaria, Chagas, Rabia, Tuberculosis y Lepra.'
    );
  });
});
