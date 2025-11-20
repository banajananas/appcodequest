import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          {t('developedBy')} <span className="footer-developer">@rulerhmod</span>
        </p>
        <p className="footer-tmdb">
          This product uses the TMDb API but is not endorsed or certified by TMDb.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
