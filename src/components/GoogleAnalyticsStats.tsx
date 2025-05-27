import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, useTheme, CircularProgress } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { motion } from 'framer-motion';
import { TrafficStats, getTrafficStats, trackVisit } from '../services/trafficService';

const GoogleAnalyticsStats: React.FC = () => {
  const [data, setData] = useState<TrafficStats>({ 
    onlineUsers: 0, 
    activeUsers: 0, 
    pageViews: 0 
  });
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  const fetchData = async () => {
    try {
      // First track the visit
      await trackVisit();
      
      // Then get the latest stats
      const stats = await getTrafficStats();
      setData(stats);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchData();

    // Set up polling every minute
    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  if (loading) {
    return (
      <Paper 
        elevation={3} 
        sx={{ 
          p: 2, 
          borderRadius: 2,
          background: theme.palette.background.paper,
          minWidth: 250,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1
        }}
      >
        <CircularProgress size={24} />
        <Typography variant="body2" color="text.secondary">
          Loading analytics...
        </Typography>
      </Paper>
    );
  }


  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 2, 
        borderRadius: 2,
        background: theme.palette.background.paper,
        minWidth: 250,
      }}
    >
      <Typography 
        variant="subtitle1" 
        fontWeight="bold" 
        gutterBottom
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <span style={{ color: theme.palette.primary.main }}>•</span>
        Site Analytics
      </Typography>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        <motion.div 
          variants={itemVariants}
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <Box sx={{ 
            backgroundColor: theme.palette.primary.main + '20',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <PersonOutlineIcon color="primary" fontSize="small" />
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">Active Now</Typography>
            <Typography variant="h6">{data.onlineUsers}</Typography>
          </Box>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <Box sx={{ 
            backgroundColor: theme.palette.primary.main + '20',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <PeopleIcon color="primary" fontSize="small" />
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">Active Today</Typography>
            <Typography variant="h6">{data.activeUsers.toLocaleString()}</Typography>
          </Box>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <Box sx={{ 
            backgroundColor: theme.palette.primary.main + '20',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <VisibilityIcon color="primary" fontSize="small" />
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">Page Views</Typography>
            <Typography variant="h6">{data.pageViews.toLocaleString()}</Typography>
          </Box>
        </motion.div>
      </motion.div>
    </Paper>
  );
};

export default GoogleAnalyticsStats;
