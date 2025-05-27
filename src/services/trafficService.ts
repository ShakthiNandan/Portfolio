// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

// Types
export interface TrafficStats {
  onlineUsers: number;
  activeUsers: number;
  pageViews: number;
}

/**
 * Track a visit to the website
 */
export const trackVisit = async (): Promise<TrafficStats> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.stats;
  } catch (error) {
    console.error('Error tracking visit:', error);
    return { onlineUsers: 0, activeUsers: 0, pageViews: 0 };
  }
};

/**
 * Get current traffic statistics
 */
export const getTrafficStats = async (): Promise<TrafficStats> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/stats`, {
      credentials: 'include',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.stats;
  } catch (error) {
    console.error('Error fetching traffic stats:', error);
    return { onlineUsers: 0, activeUsers: 0, pageViews: 0 };
  }
};
