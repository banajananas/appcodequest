import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { tmdbApi } from '../api/tmdb';
import MediaGrid from '../components/MediaGrid';

function TVShows() {
  const { t } = useTranslation();
  const [shows, setShows] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('popularity.desc');

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await tmdbApi.getGenres('tv');
        setGenres(data.genres || []);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      try {
        const data = await tmdbApi.discover('tv', {
          genre: selectedGenre,
          sortBy
        });
        setShows(data.results || []);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, [selectedGenre, sortBy]);

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">{t('tvShows')}</h1>
        
        <div className="filters">
          <div className="filter-group">
            <label>{t('filterByGenre')}</label>
            <select 
              value={selectedGenre} 
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="filter-select"
            >
              <option value="">{t('all')}</option>
              {genres.map(genre => (
                <option key={genre.id} value={genre.id}>{genre.name}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>{t('sortBy')}</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="popularity.desc">{t('popular')}</option>
              <option value="vote_average.desc">{t('topRated')}</option>
              <option value="first_air_date.desc">{t('firstAirDate')}</option>
            </select>
          </div>
        </div>

        <MediaGrid items={shows} loading={loading} />
      </div>
    </div>
  );
}

export default TVShows;
