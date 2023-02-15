import FooterButton from './FooterButton';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';

function Footer ({showExtraInfo}) {
  const {t} = useTranslation();

  return (
    <div className='flex flex-col gap-4 items-center'>
      <p className='text-gray-welcome text-center'>
        {t('app_info.footer_presentation')}
      </p>
      {showExtraInfo ? (
        <>
          <FooterButton title={t('app_info.politics')} />
          <FooterButton title={t('app_info.credits')} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

Footer.defaultProps = {
  showExtraInfo: false
};

Footer.propTypes = {
  showExtraInfo: PropTypes.string
};

export default Footer;
