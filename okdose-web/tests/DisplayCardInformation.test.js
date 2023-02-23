import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import * as dotenv from 'dotenv';
import {join} from 'path';
import DisplayCardInformation from '../components/common/DisplayCardInformation';
import i18n from '../i18n';
import {I18nextProvider} from 'react-i18next';

dotenv.config({path: join(__dirname, '../', '.env')});

describe('It renders DisplayCardInformation component', () => {
  let miltefosine;
  beforeEach(() => {
    miltefosine = {
      name: 'leishmaniasis.miltefosine.name',
      presentation: 'leishmaniasis.miltefosine.presentation',
      warning: 'leishmaniasis.miltefosine.warning_under_150_mg'
    };
  });
  // unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  test('DisplayCardInformation component renders with English translations when type is warning', () => {
    i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <DisplayCardInformation
          type='warning'
          title={'app_info.card_info.warning'}
          description={miltefosine.warning}
        />
      </I18nextProvider>
    );
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.leishmaniasis.miltefosine
          .warning_under_150_mg
      )
    ).toBeDefined();
    expect(
      screen.getByText('Do not exceed 150 mg per day')
    ).toBeInTheDocument();
  });

  test('DisplayCardInformation component renders with Spanish translations when type is warning', () => {
    i18n.changeLanguage('es');
    render(
      <I18nextProvider i18n={i18n}>
        <DisplayCardInformation
          type='warning'
          title={'app_info.card_info.warning'}
          description={miltefosine.warning}
        />
      </I18nextProvider>
    );
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.leishmaniasis.miltefosine
          .warning_under_150_mg
      )
    ).toBeDefined();
    expect(
      screen.getByText('No se deben superar 150 mg al día')
    ).toBeInTheDocument();
  });

  test('DisplayCardInformation component renders with English translations when type is info', () => {
    i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <DisplayCardInformation
          type='info'
          title={miltefosine.name}
          description={miltefosine.presentation}
        />
      </I18nextProvider>
    );
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.leishmaniasis.miltefosine.name
      )
    ).toBeDefined();
    expect(screen.getByText('Miltefosine')).toBeInTheDocument();
  });
  test('DisplayCardInformation component renders with Spanish translations when type is info', () => {
    i18n.changeLanguage('es');
    render(
      <I18nextProvider i18n={i18n}>
        <DisplayCardInformation
          type='info'
          title={miltefosine.name}
          description={miltefosine.presentation}
        />
      </I18nextProvider>
    );
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.leishmaniasis.miltefosine.name
      )
    ).toBeDefined();
    expect(screen.getByText('Miltefosina')).toBeInTheDocument();
  });
});
