import TitleWeightCard from './TitleWeightCard';
import Button from './Button';

function WeightCard () {
  return (
    <div className='flex flex-col justify-center items-center pl-11 pr-5 pb-8 gap-5 isolate'>
      <TitleWeightCard title='Dosage' />
      <Button type='weight' titleKey='app_info.weight_button' />
      <Button type='back' titleKey='app_info.back_button' />
    </div>
  );
}

export default WeightCard;
