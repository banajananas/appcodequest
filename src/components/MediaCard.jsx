import { Link } from 'react-router-dom';
import { tmdbApi } from '../api/tmdb';
import { useTranslation } from 'react-i18next';
import { IoStar } from 'react-icons/io5';

function MediaCard({ item }) {
  const { t } = useTranslation();
  const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
  const title = item.title || item.name;
  const releaseDate = item.release_date || item.first_air_date;
  const year = releaseDate ? new Date(releaseDate).getFullYear() : '';

  return (
    <Link to={`/${mediaType}/${item.id}`} className="media-card">
      <div className="media-card-image">
        <img
          src={tmdbApi.getImageUrl(item.poster_path)}
          alt={title}
          loading="lazy"
        />
        <div className="media-card-overlay">
          <div className="rating">
            <IoStar /> {item.vote_average?.toFixed(1)}
          </div>
        </div>
      </div>
      <div className="media-card-info">
        <h3 className="media-card-title">{title}</h3>
        {year && <p className="media-card-year">{year}</p>}
      </div>
    </Link>
  );
}

export default MediaCard;
