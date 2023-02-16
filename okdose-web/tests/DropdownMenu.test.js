import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import i18n from '../i18n';
import {I18nextProvider} from 'react-i18next';
import DropdownMenu from '../components/DropdownMenu';

describe('Test rendering of DropdownMenu component', () => {
  // unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  test('DropdownMenu component rendering with translations in english', () => {
    i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <DropdownMenu />,
      </I18nextProvider>
    );
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.transmission_types
          .transmitted_by_vectors
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.transmission_types.zoonoses
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.transmission_types.mycobacteria
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.leishmaniasis.name
      )
    ).toBeDefined();
    expect(
      screen.getByText(i18n.getDataByLanguage('en').translation.malaria.name)
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.chagas_disease.name
      )
    ).toBeDefined();

    expect(screen.getByText('Transmitted by Vectors')).toBeInTheDocument();
    expect(screen.getByText('Zoonoses')).toBeInTheDocument();
    expect(screen.getByText('Mycobacteria')).toBeInTheDocument();
    expect(screen.getByText('Leishmaniasis')).toBeInTheDocument();
    expect(screen.getByText('Malaria')).toBeInTheDocument();
    expect(screen.getByText('Chagas disease')).toBeInTheDocument();
  });

  test('DropdownMenu component rendering with translations in spanish', () => {
    i18n.changeLanguage('es');
    render(
      <I18nextProvider i18n={i18n}>
        <DropdownMenu />,
      </I18nextProvider>
    );
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.transmission_types
          .transmitted_by_vectors
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.transmission_types.zoonoses
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.transmission_types.mycobacteria
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.leishmaniasis.name
      )
    ).toBeDefined();
    expect(
      screen.getByText(i18n.getDataByLanguage('es').translation.malaria.name)
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.chagas_disease.name
      )
    ).toBeDefined();

    expect(screen.getByText('Transmitidas por Vectores')).toBeInTheDocument();
    expect(screen.getByText('Zoonosis')).toBeInTheDocument();
    expect(screen.getByText('Micobacterias')).toBeInTheDocument();
    expect(screen.getByText('Leishmaniasis')).toBeInTheDocument();
    expect(screen.getByText('Malaria')).toBeInTheDocument();
    expect(screen.getByText('Enfermedad de Chagas')).toBeInTheDocument();
  });
});
