import Section from './common/Section';
import DropdownMenuButton from './common/DropdownMenuButton';
import {useTranslation} from 'react-i18next';
import {transmissionTypes} from '../../okdose/app';

function DropdownMenu () {
  const {t} = useTranslation();

  const listItems = Object.keys(transmissionTypes).map((medium, index) => (
    <Section
      key={index}
      title={t(`${transmissionTypes[medium].name}`)}
      iconName={transmissionTypes[medium].icon}
    >
      {Object.keys(transmissionTypes[medium].types).map((disease, index) => (
        <DropdownMenuButton
          key={index}
          title={t(`${transmissionTypes[medium].types[disease].name}`)}
        />
      ))}
    </Section>
  ));

  return (
    <div className='m-auto w-full sm:m-auto sm:w-[420px] sm:h-[180px] sm:z-10'>
      {listItems}
    </div>
  );
}

export default DropdownMenu;
