import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdLocalMovies, MdLightMode, MdDarkMode } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';

function Navbar({ theme, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <MdLocalMovies className="logo-icon" />
          <span className="logo-text">{t('appName')}</span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link">{t('home')}</Link>
          <Link to="/movies" className="nav-link">{t('movies')}</Link>
          <Link to="/tv" className="nav-link">{t('tvShows')}</Link>
        </div>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <IoSearch />
          </button>
        </form>

        <div className="navbar-actions">
          <button onClick={toggleTheme} className="icon-btn" title={theme === 'dark' ? t('lightMode') : t('darkMode')}>
            {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button onClick={toggleLanguage} className="icon-btn lang-btn">
            {t('switchLanguage')}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
