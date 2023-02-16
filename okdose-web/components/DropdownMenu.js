import Section from './common/Section';
import DropdownMenuButton from './common/DropdownMenuButton';
import downIcon from '../assets/images/icons/downIcon.svg';
import byVectorsIcon from '../assets/images/icons/byVectorsIcon.svg';
import mycobacteriaIcon from '../assets/images/icons/mycobacteriaIcon.svg';
import zoonosesIcon from '../assets/images/icons/zoonosesIcon.svg';
import leftIcon from '../assets/images/icons/leftIcon.svg';
import {useTranslation} from 'react-i18next';

function DropdownMenu () {
  const {t} = useTranslation();
  return (
    <div className='m-auto w-full sm:m-auto sm:w-[420px] sm:h-[180px] sm:z-10'>
      <Section
        title={t('transmission_types.transmitted_by_vectors')}
        iconName={byVectorsIcon}
        iconRight={downIcon}
      >
        <DropdownMenuButton title={t('leishmaniasis.name')} icon={leftIcon} />
        <DropdownMenuButton title={t('malaria.name')} icon={leftIcon} />
        <DropdownMenuButton title={t('chagas_disease.name')} icon={leftIcon} />
      </Section>
      <Section
        title={t('transmission_types.zoonoses')}
        iconName={zoonosesIcon}
        iconRight={downIcon}
      ></Section>
      <Section
        title={t('transmission_types.mycobacteria')}
        iconName={mycobacteriaIcon}
        iconRight={downIcon}
      ></Section>
    </div>
  );
}

export default DropdownMenu;
