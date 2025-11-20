import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { tmdbApi } from '../api/tmdb';
import MediaGrid from '../components/MediaGrid';

function Movies() {
  const { t } = useTranslation();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [sortBy, setSortBy] = useState('popularity.desc');

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await tmdbApi.getGenres('movie');
        setGenres(data.genres || []);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data = await tmdbApi.discover('movie', {
          genre: selectedGenre,
          year: selectedYear,
          sortBy
        });
        setMovies(data.results || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [selectedGenre, selectedYear, sortBy]);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">{t('movies')}</h1>
        
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
            <label>{t('filterByYear')}</label>
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(e.target.value)}
              className="filter-select"
            >
              <option value="">{t('all')}</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
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
              <option value="release_date.desc">{t('releaseDate')}</option>
            </select>
          </div>
        </div>

        <MediaGrid items={movies} loading={loading} />
      </div>
    </div>
  );
}

export default Movies;
