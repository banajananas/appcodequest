import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tmdbApi } from '../api/tmdb';
import MediaGrid from '../components/MediaGrid';

function Home() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  
  const [trending, setTrending] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (searchQuery) {
          const data = await tmdbApi.search(searchQuery);
          setSearchResults(data.results || []);
        } else {
          const data = await tmdbApi.getTrending();
          setTrending(data.results || []);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const displayItems = searchQuery ? searchResults : trending;

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">
          {searchQuery ? `${t('search')}: ${searchQuery}` : t('trending')}
        </h1>
        <MediaGrid items={displayItems} loading={loading} />
      </div>
    </div>
  );
}

export default Home;
