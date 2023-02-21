import FooterButton from './FooterButton';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';

function Footer ({showExtraInfo}) {
  const {t} = useTranslation();

  return (
    <div className='flex flex-col items-center pb-10'>
      <p className='text-soft-gray text-center'>
        {t('app_info.footer_presentation')}
      </p>
      {showExtraInfo && (
        <>
          <FooterButton title={t('app_info.footer_politics')} />
          <FooterButton title={t('app_info.footer_credits')} />
        </>
      )}
    </div>
  );
}

Footer.defaultProps = {
  showExtraInfo: false
};

Footer.propTypes = {
  showExtraInfo: PropTypes.bool
};

export default Footer;
