import TitleWeightCard from './TitleWeightCard';
import Button from './Button';
import {useTranslation} from 'react-i18next';

function WeightCard () {
  const {t} = useTranslation();
  const dosage = t('app_info.dosage');
  return (
    <div className='flex flex-col justify-center items-center pl-11 pr-5 pb-8 gap-5 isolate'>
      <TitleWeightCard title={dosage} />
      <Button type='weight' titleKey='app_info.weight_button' />
      <Button type='back' titleKey='app_info.back_button' />
    </div>
  );
}

export default WeightCard;
