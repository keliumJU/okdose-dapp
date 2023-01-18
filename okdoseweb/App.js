import * as React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { NearInterface } from '@near-interface';
import { prescribePentamidineIsethionate } from '@leishmaniasis';

export default function App({ wallet }) {
  const { t } = useTranslation();
  const nearInterface = new NearInterface({ walletToUse: wallet });
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState({});
  const weight = 50;

  React.useEffect(() => {
    prescribePentamidineIsethionate(nearInterface, weight)
      .then(setValueFromBlockchain)
      .catch(alert);
  }, []);

  const handleWeight = (event) => {
    prescribePentamidineIsethionate(nearInterface, parseFloat(event.target.value))
      .then(setValueFromBlockchain)
      .catch(alert);
  };

  return (
    <main>
      <input name="weight" onChange={handleWeight} placeholder="weight" />
      <br />
      <hr />
      <p>{ t('leishmaniasis.name') }</p>
      <p>{ t(valueFromBlockchain.name) }</p>
      <p>{ t(`${valueFromBlockchain.presentation}.0`) }</p>
      <p>{ t(`${valueFromBlockchain.treatmentTime}.0`) }</p>
      <p>{ t(valueFromBlockchain.via) }</p>
      <p>{ t(valueFromBlockchain.frequency) }</p>
      <p>{ t(valueFromBlockchain.warning) }</p>
      <p>{ t(`${valueFromBlockchain.preparation}.0`) }</p>
      <p>{ valueFromBlockchain.volumeDose }</p>
      <p>{ valueFromBlockchain.weightDose}</p>
    </main>
  );
}

App.propTypes = {
  wallet: PropTypes.shape().isRequired,
};
