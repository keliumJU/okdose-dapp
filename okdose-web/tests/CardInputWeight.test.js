import React from 'react';
import {cleanup, render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import i18n from '../i18n';
import {I18nextProvider} from 'react-i18next';
import {t} from 'i18next';
import CardInputWeight from '../components/CardInputWeight';

describe('It renders of CardInputWeight component', () => {
  // unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  test('CardInputWeight component renders with translations in English', () => {
    i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <CardInputWeight
          titleContent={t('app_info.card_selection_title')}
          description={t('app_info.input_weight_description', {weight: '10'})}
          showTitleCard={true}
          showCategoryIcon={true}
          titleCard={t('app_info.card_category_title')}
          lowerBound={10}
          upperBound={50}
          disableComponent={false}
        />
      </I18nextProvider>
    );
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.app_info.card_category_title
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.app_info.card_selection_title
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.app_info.weight_button
      )
    ).toBeDefined();

    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Selection')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Enter the patient\'s weight in kg, remember that it cannot be lower than 10 kg.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Calculate')).toBeInTheDocument();
  });

  test('CardInputWeight component renders with translations in Spanish', () => {
    i18n.changeLanguage('es');
    render(
      <I18nextProvider i18n={i18n}>
        <CardInputWeight
          titleContent={t('app_info.card_selection_title')}
          description={t('app_info.input_weight_description', {weight: '10'})}
          showTitleCard={true}
          showCategoryIcon={true}
          titleCard={t('app_info.card_category_title')}
          lowerBound={10}
          upperBound={50}
          disableComponent={false}
        />
      </I18nextProvider>
    );
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.app_info.card_category_title
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.app_info.card_selection_title
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.app_info.weight_button
      )
    ).toBeDefined();

    expect(screen.getByText('Categoría')).toBeInTheDocument();
    expect(screen.getByText('Selección')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Ingrese el peso del paciente en kg, recuerda que no puede ser menor a 10 kg'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Calcular')).toBeInTheDocument();
  });

  test('Displays error messages when the user enters values below or above the weight limits.', () => {
    i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <CardInputWeight
          titleContent={t('app_info.card_selection_title')}
          description={t('app_info.input_weight_description', {weight: '10'})}
        />
      </I18nextProvider>
    );
    const input = screen.getByLabelText('weight-input');
    fireEvent.change(input, {target: {value: 2}});
    expect(
      screen.getByText(
        'The weight can not be less than 3 kg enter a valid entry.'
      )
    );

    fireEvent.change(input, {target: {value: 201}});
    expect(
      screen.getByText(
        'The weight can not be greater than 200 kg enter a valid entry.'
      )
    );
  });
});
