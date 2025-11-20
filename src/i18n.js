import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: {
      appName: 'أفلامي',
      home: 'الرئيسية',
      movies: 'أفلام',
      tvShows: 'مسلسلات',
      search: 'بحث',
      searchPlaceholder: 'ابحث عن فيلم أو مسلسل...',
      trending: 'الأكثر رواجاً',
      popular: 'شائع',
      topRated: 'الأعلى تقييماً',
      upcoming: 'قريباً',
      nowPlaying: 'يعرض الآن',
      rating: 'التقييم',
      releaseDate: 'تاريخ الإصدار',
      firstAirDate: 'تاريخ العرض الأول',
      overview: 'نبذة',
      cast: 'طاقم التمثيل',
      genres: 'الأنواع',
      runtime: 'المدة',
      status: 'الحالة',
      language: 'اللغة',
      budget: 'الميزانية',
      revenue: 'الإيرادات',
      seasons: 'المواسم',
      episodes: 'الحلقات',
      watchTrailer: 'شاهد الإعلان',
      noResults: 'لا توجد نتائج',
      loading: 'جاري التحميل...',
      filterByGenre: 'حسب النوع',
      filterByYear: 'حسب السنة',
      sortBy: 'الترتيب',
      all: 'الكل',
      developedBy: 'تم التطوير بواسطة',
      darkMode: 'الوضع الداكن',
      lightMode: 'الوضع الفاتح',
      switchLanguage: 'Switch to English',
      backToHome: 'العودة للرئيسية',
      noOverview: 'لا يوجد وصف متاح',
      minutes: 'دقيقة'
    }
  },
  en: {
    translation: {
      appName: 'Aflami',
      home: 'Home',
      movies: 'Movies',
      tvShows: 'TV Shows',
      search: 'Search',
      searchPlaceholder: 'Search for a movie or TV show...',
      trending: 'Trending',
      popular: 'Popular',
      topRated: 'Top Rated',
      upcoming: 'Upcoming',
      nowPlaying: 'Now Playing',
      rating: 'Rating',
      releaseDate: 'Release Date',
      firstAirDate: 'First Air Date',
      overview: 'Overview',
      cast: 'Cast',
      genres: 'Genres',
      runtime: 'Runtime',
      status: 'Status',
      language: 'Language',
      budget: 'Budget',
      revenue: 'Revenue',
      seasons: 'Seasons',
      episodes: 'Episodes',
      watchTrailer: 'Watch Trailer',
      noResults: 'No Results Found',
      loading: 'Loading...',
      filterByGenre: 'Filter by Genre',
      filterByYear: 'Filter by Year',
      sortBy: 'Sort By',
      all: 'All',
      developedBy: 'Developed by',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      switchLanguage: 'العربية',
      backToHome: 'Back to Home',
      noOverview: 'No overview available',
      minutes: 'min'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    lng: 'ar',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
