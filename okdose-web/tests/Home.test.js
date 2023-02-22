import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import i18n from '../i18n';
import {I18nextProvider} from 'react-i18next';
import Home from '../containers/Home';

describe('It renders the Home component', () => {
  // unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  test('Header displays the logo image', () => {
    render(<Home />);
    //A double image is rendered because the <Header /> component is rendered in the <Welcome> and <Home /> component.
    //Now, it should be noted that the <Home /> component calls the <Welcome /> component.
    const logo = screen.getAllByTestId('logo-image');
    expect(logo[0]).toHaveAttribute('alt', 'logo');
    expect(logo[1]).toHaveAttribute('alt', 'logo');
  });

  test('Home component renders with translations in English', async () => {
    i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <Home />,
      </I18nextProvider>
    );
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.app_info.dropdown_description
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.app_info.footer_politics
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.app_info.footer_credits
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('en').translation.app_info.card_category_title
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        'Select one of the disease types to calculate its dosage'
      )
    ).toBeInTheDocument();

    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Politics and regulations')).toBeInTheDocument();
    expect(screen.getByText('Credits')).toBeInTheDocument();
  });

  test('Home component renders with translations in Spanish', () => {
    i18n.changeLanguage('es');
    render(
      <I18nextProvider i18n={i18n}>
        <Home />,
      </I18nextProvider>
    );
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.app_info.dropdown_description
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.app_info.footer_politics
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.app_info.footer_credits
      )
    ).toBeDefined();
    expect(
      screen.getByText(
        i18n.getDataByLanguage('es').translation.app_info.card_category_title
      )
    ).toBeDefined();

    expect(
      screen.getByText(
        'Selecciona uno de los tipos de enfermedad para calcular su dosificación'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Categoría')).toBeInTheDocument();
    expect(screen.getByText('Políticas y regulaciones')).toBeInTheDocument();
    expect(screen.getByText('Créditos')).toBeInTheDocument();
  });
});
