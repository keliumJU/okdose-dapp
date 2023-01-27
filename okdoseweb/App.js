import * as React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import  NearInterface  from '@near-interface';
import { prescribeMiltefosine } from '@leishmaniasis';

export default function App({ wallet }) {
  const { t } = useTranslation();
  const nearInterface = new NearInterface({ walletToUse: wallet });
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState({});
  const weight = 50;

  React.useEffect(() => {
    prescribeMiltefosine(nearInterface, weight)
      .then(setValueFromBlockchain)
      .catch(alert);
  }, []);

  const handleWeight = (event) => {
    prescribeMiltefosine(nearInterface, parseFloat(event.target.value))
      .then(setValueFromBlockchain)
      .catch(alert);
  };

  return (
    <main>
      <input name="weight" onChange={handleWeight} placeholder="weight" />
      <br />
      <hr />
      <p className="text-3xl underline text-customColor">{ t('leishmaniasis.name') }</p>
      <p>{ t(valueFromBlockchain.name) }</p>
      <p>{ valueFromBlockchain.weightDose }</p>
      <p>{ t(`${valueFromBlockchain.presentation}.0`) }</p>
      <p>{ t(`${valueFromBlockchain.presentation}.1`) }</p>
      <p>{ t(`${valueFromBlockchain.treatmentTime}.0`) }</p>
      <p>{ t(valueFromBlockchain.frequency) }</p>
      <p>{ t(valueFromBlockchain.warning) }</p>
      <p>{ t(valueFromBlockchain.note) }</p>
    </main>
  );
}

App.propTypes = {
  wallet: PropTypes.shape().isRequired,
};
