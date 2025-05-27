const isProduction = process.env.NODE_ENV === 'production';

export const API_BASE_URL = isProduction
  ? process.env.REACT_APP_API_URL || 'https://portfolio-analytics.onrender.com'
  : 'http://localhost:3001';

export const ENABLE_ANALYTICS = process.env.REACT_APP_ENABLE_ANALYTICS !== 'false';
