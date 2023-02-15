import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';

function PrescriptionView ({
  prescription: {
    name,
    presentation,
    treatmentTime,
    warning,
    note,
    weightDose,
    volumeDose
  }
}) {
  const {t} = useTranslation();
  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl underline text-customColor'>{t(`${name}`)}</h1>
      <p data-testid='presentation'>{t(`${presentation}.0`)}</p>
      <p>{t(`${presentation}.1`)}</p>
      <p>{t(`${treatmentTime}.0`)}</p>
      <p>{t(`${warning}`)}</p>
      <p>{t(`${note}`)}</p>
      <p>{weightDose}</p>
      <p>{volumeDose}</p>
    </div>
  );
}

PrescriptionView.defaultProps = {
  prescription: {}
};

PrescriptionView.propTypes = {
  prescription: PropTypes.object.isRequired
};

export default PrescriptionView;
