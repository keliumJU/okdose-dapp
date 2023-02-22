import Section from './common/Section';
import DropdownMenuButton from './common/DropdownMenuButton';
import {useTranslation} from 'react-i18next';
import {transmissionTypes} from '../../okdose/app';
import byVectorsIcon from '../assets/images/icons/byVectorsIcon.svg';
import zonosesIcon from '../assets/images/icons/zoonosesIcon.svg';
import mycobacteriaIcon from '../assets/images/icons/mycobacteriaIcon.svg';

function DropdownMenu () {
  const {t} = useTranslation();

  const transmissionTypesIcons = {
    byVectorsIcon: byVectorsIcon,
    mycobacteriaIcon: mycobacteriaIcon,
    zoonosesIcon: zonosesIcon
  };

  const listSections = Object.keys(transmissionTypes).map((medium, index) => (
    <Section
      key={index}
      title={t(`${transmissionTypes[medium].name}`)}
      iconMedium={transmissionTypesIcons[transmissionTypes[medium].icon]}
    >
      {Object.keys(transmissionTypes[medium].diseases).map((disease, index) => (
        <DropdownMenuButton
          key={index}
          title={t(`${transmissionTypes[medium].diseases[disease].name}`)}
        />
      ))}
    </Section>
  ));

  return (
    <div className='m-auto w-full mb-5 sm:m-auto max-w-md sm:h-full'>
      <img src='' />
      {listSections}
    </div>
  );
}

export default DropdownMenu;
