import MediaCard from './MediaCard';
import { useTranslation } from 'react-i18next';

function MediaGrid({ items, loading }) {
  const { t } = useTranslation();

  if (loading) {
    return <div className="loading">{t('loading')}</div>;
  }

  if (!items || items.length === 0) {
    return <div className="no-results">{t('noResults')}</div>;
  }

  return (
    <div className="media-grid">
      {items.map(item => (
        <MediaCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MediaGrid;
