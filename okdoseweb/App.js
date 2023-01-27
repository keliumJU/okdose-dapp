import * as React from 'react';
import { useTranslation } from 'react-i18next'

export default function App({ prescription }) {
  const { t } = useTranslation();

  return (
    <main>
      <div>
        <span>
        <h1 className="text-3xl underline text-customColor">{ t(`${prescription.name}`) }</h1>
        <h1>{ t(`${prescription.presentation}.0`) }</h1>
        <h1>{ t(`${prescription.presentation}.1`) }</h1>
        <h1>{ t(`${prescription.treatmentTime}.0`) }</h1>
        <h1>{ t(`${prescription.warning}`) }</h1>
        <h1>{ t(`${prescription.note}`) }</h1>
        <h1>{ prescription.weightDose }</h1>
        <h1>{ prescription.volumeDose }</h1>
        </span>
      </div>
    </main>
  );
}

