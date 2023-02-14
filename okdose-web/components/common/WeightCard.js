import Button from './Button';
import {useTranslation} from 'react-i18next';

function WeightCard () {
  const {t} = useTranslation();
  const dosage = t('app_info.dosage');
  return (
    <div className='flex flex-col justify-center items-center pl-11 pr-5 pb-8 gap-5 isolate'>
      <span className='not-italic font-normal text-lg text-center text-white flex flex-row justify-center items-center px-6 gap-2 bg-blue-800 rounded-full'>
        {dosage}
      </span>
      <Button type='weight' titleKey='app_info.weight_button' />
      <Button type='back' titleKey='app_info.back_button' />
    </div>
  );
}

export default WeightCard;
