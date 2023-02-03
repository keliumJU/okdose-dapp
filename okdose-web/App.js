import * as React from 'react';
import { useTranslation } from 'react-i18next'

export default function App({ prescription }) {
  const { t } = useTranslation();

  return (
    <main>
      <div>
        <h1 className="text-3xl underline text-customColor">{ t(`${prescription.name}`) }</h1>
        <p data-testid="presentation">{ t(`${prescription.presentation}.0`) }</p>
        <p>{ t(`${prescription.presentation}.1`) }</p>
        <p>{ t(`${prescription.treatmentTime}.0`) }</p>
        <p>{ t(`${prescription.warning}`) }</p>
        <p>{ t(`${prescription.note}`) }</p>
        <p>{ prescription.weightDose }</p>
        <p>{ prescription.volumeDose }</p>
      </div>
    </main>
  );
}

