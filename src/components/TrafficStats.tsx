import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, useTheme, IconButton, Tooltip } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import { API_BASE_URL, ENABLE_ANALYTICS } from '../config';

interface TrafficStats {
  online: number;
  total: number;
}

interface TrafficStatsProps {
  onClose?: () => void;
  showCloseButton?: boolean;
}

const TrafficStats: React.FC<TrafficStatsProps> = ({ onClose, showCloseButton = false }) => {
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
      >
        <Paper 
          elevation={3}
          sx={{
            p: 2,
            position: 'relative',
            borderRadius: 2,
            background: theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(0, 0, 0, 0.02)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.palette.divider}`,
            minWidth: 180,
          }}
        >
          {showCloseButton && (
            <IconButton
              size="small"
              onClick={onClose}
              sx={{
                position: 'absolute',
                top: 4,
                right: 4,
                color: 'text.secondary',
                '&:hover': {
                  color: 'text.primary',
                },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
          
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Site Traffic
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
                <Box display="flex" alignItems="center" gap={1}>
                  <PersonIcon color="primary" fontSize="small" />
                  <Typography variant="body2">
                    <motion.span
                      key={`online-${stats.online}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stats.online}
                    </motion.span>{' '}
                    online now
                  </Typography>
                </Box>
                
                <Box display="flex" alignItems="center" gap={1}>
                  <PeopleIcon color="secondary" fontSize="small" />
                  <Typography variant="body2">
                    <motion.span
                      key={`total-${stats.total}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stats.total.toLocaleString()}
                    </motion.span>{' '}
                    total visits
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Paper>
      </motion.div>
    </AnimatePresence>
  );
};

export default TrafficStats;
