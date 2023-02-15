import forwardArrowIcon from '../../assets/images/icons/forwardArrowIcon.svg';
import {useTranslation} from 'react-i18next';

function DisplayCardInformation ({prescription: {name, presentation}}) {
  const {t} = useTranslation();

  return (
    <div className='w-96 h-28'>
      <div>
        <p className='text-lg not-itali text-indigo-700 font-bold'>
          {t(`${name}`)}
        </p>
        <div className='py-5 text-sm not-itali font-normal'>
          <p>{t(`${presentation}.0`)}</p>
          <p>{t(`${presentation}.1`)}</p>
        </div>
      </div>
      <div className='flex flex-row justify-end items-center text-sm not-itali font-normal mb-5'>
        <p>{t('app_info.see_more')}</p>
        <img className='pl-1' src={forwardArrowIcon} alt='icon-next' />
      </div>
      <hr className='divide-solid bg-gray-200 h-1' />
    </div>
  );
}

export default DisplayCardInformation;
