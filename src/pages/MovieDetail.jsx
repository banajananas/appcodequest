import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tmdbApi } from '../api/tmdb';
import VideoPlayer from '../components/VideoPlayer';
import { IoArrowBack, IoStar } from 'react-icons/io5';

function MovieDetail() {
  const { type, id } = useParams();
  const { t } = useTranslation();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const data = await tmdbApi.getDetails(type, id);
        setDetails(data);
      } catch (error) {
        console.error('Error fetching details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [type, id]);

  if (loading) {
    return <div className="loading">{t('loading')}</div>;
  }

  if (!details) {
    return <div className="no-results">{t('noResults')}</div>;
  }

  const title = details.title || details.name;
  const releaseDate = details.release_date || details.first_air_date;
  const trailer = details.videos?.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube');

  return (
    <div className="detail-page">
      <div 
        className="detail-backdrop"
        style={{
          backgroundImage: `url(${tmdbApi.getImageUrl(details.backdrop_path, 'original')})`
        }}
      />
      
      <div className="detail-content">
        <Link to="/" className="back-link">
          <IoArrowBack /> {t('backToHome')}
        </Link>
        
        <div className="detail-header">
          <div className="detail-poster">
            <img src={tmdbApi.getImageUrl(details.poster_path, 'w500')} alt={title} />
          </div>
          
          <div className="detail-info">
            <h1 className="detail-title">{title}</h1>
            
            <div className="detail-meta">
              {releaseDate && (
                <span>{new Date(releaseDate).getFullYear()}</span>
              )}
              {details.runtime && (
                <span>{details.runtime} {t('minutes')}</span>
              )}
              {details.vote_average && (
                <span className="rating-badge">
                  <IoStar /> {details.vote_average.toFixed(1)}
                </span>
              )}
            </div>

            {details.genres && details.genres.length > 0 && (
              <div className="genres">
                {details.genres.map(genre => (
                  <span key={genre.id} className="genre-tag">{genre.name}</span>
                ))}
              </div>
            )}

            <div className="detail-section">
              <h2>{t('overview')}</h2>
              <p>{details.overview || t('noOverview')}</p>
            </div>

            {type === 'tv' && (
              <div className="detail-stats">
                {details.number_of_seasons && (
                  <div className="stat">
                    <strong>{t('seasons')}:</strong> {details.number_of_seasons}
                  </div>
                )}
                {details.number_of_episodes && (
                  <div className="stat">
                    <strong>{t('episodes')}:</strong> {details.number_of_episodes}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {trailer && (
          <div className="detail-section">
            <h2>{t('watchTrailer')}</h2>
            <VideoPlayer url={tmdbApi.getVideoUrl(trailer.key)} />
          </div>
        )}

        {details.credits?.cast && details.credits.cast.length > 0 && (
          <div className="detail-section">
            <h2>{t('cast')}</h2>
            <div className="cast-grid">
              {details.credits.cast.slice(0, 12).map(person => (
                <div key={person.id} className="cast-card">
                  <img 
                    src={tmdbApi.getImageUrl(person.profile_path, 'w185')} 
                    alt={person.name}
                  />
                  <div className="cast-info">
                    <p className="cast-name">{person.name}</p>
                    <p className="cast-character">{person.character}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
