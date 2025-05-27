import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import { motion } from 'framer-motion';
import { API_BASE_URL, ENABLE_ANALYTICS } from '../config';

interface TrafficStats {
  online: number;
  total: number;
}

const TrafficStats: React.FC = () => {
  const [stats, setStats] = useState<TrafficStats>({ online: 0, total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  useEffect(() => {
    if (!ENABLE_ANALYTICS) return;

    const trackVisit = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/track`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        
        if (!response.ok) {
          throw new Error('Failed to track visit');
        }
        
        const data = await response.json();
        setStats(data);
        setError(null);
      } catch (err) {
        console.error('Error tracking visit:', err);
        setError('Analytics service unavailable');
      } finally {
        setIsLoading(false);
      }
    };

    const updateStats = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/stats`, {
          credentials: 'include',
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        
        const data = await response.json();
        setStats(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching stats:', err);
        setError('Failed to load stats');
      }
    };

    // Initial tracking and stats fetch
    trackVisit();
    updateStats();

    // Update stats every minute
    const interval = setInterval(updateStats, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!ENABLE_ANALYTICS) {
    return null;
  }

  if (!ENABLE_ANALYTICS) {
    return null;
  }

  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={4}
      sx={{
        py: 1,
        '& > *': {
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        },
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Site Analytics
      </Typography>
      
      {error ? (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      ) : isLoading ? (
        <Typography variant="body2" color="text.secondary">
          Loading...
        </Typography>
      ) : (
        <>
          <Box>
            <PersonIcon color="primary" fontSize="small" />
            <Typography variant="body2" component="span" sx={{ ml: 0.5 }}>
              <motion.span
                key={`online-${stats.online}`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {stats.online}
              </motion.span>{' '}
              online now
            </Typography>
          </Box>
          
          <Box>
            <PeopleIcon color="secondary" fontSize="small" />
            <Typography variant="body2" component="span" sx={{ ml: 0.5 }}>
              <motion.span
                key={`total-${stats.total}`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {stats.total.toLocaleString()}
              </motion.span>{' '}
              total visits
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default TrafficStats;
