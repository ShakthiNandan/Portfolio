import React from 'react';
import { Box, Typography, Grid, Paper, Link, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  url: string;
  icon: React.ReactNode;
}

const certifications: Certification[] = [
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "2024",
    url: "https://www.hackerrank.com/certificates/iframe/f1ad679250f7",
    icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2024",
    url: "https://www.hackerrank.com/certificates/iframe/6c3dc1092710",
    icon: <StorageIcon sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    url: "https://www.freecodecamp.org/certification/ShakthiNandan/javascript-algorithms-and-data-structures",
    icon: <DataObjectIcon sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM (Cognitive Class)",
    date: "August 21, 2023",
    url: "https://courses.cognitiveclass.ai/certificates/81e93610a7d04023b5853d93a4b81f87",
    icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />
  },
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM (Cognitive Class)",
    date: "April 15, 2024",
    url: "https://courses.cognitiveclass.ai/certificates/8098b693f5bf41909aa9eb9d1e94571e",
    icon: <StorageIcon sx={{ fontSize: 40, color: 'primary.main' }} />
  }
];

const Certifications: React.FC = () => {
  const theme = useTheme();

  return (
    <Box component="section" id="certifications" sx={{ py: { xs: 4, sm: 6 } }}>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          mb: { xs: 3, sm: 4 },
          fontSize: { xs: '2rem', sm: '3rem' },
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: 'uppercase',
          textAlign: { xs: 'center', sm: 'left' },
          color: 'text.primary',
          textShadow: theme.palette.mode === 'dark'
            ? '0 0 20px rgba(255,255,255,0.3)'
            : '0 0 20px rgba(0,0,0,0.1)',
        }}
      >
        Certifications
      </Typography>

      <Grid container spacing={3}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                    : 'linear-gradient(145deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {cert.icon}
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  {cert.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  gutterBottom
                >
                  {cert.issuer}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {cert.date}
                </Typography>
                <Link
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 'auto',
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  View Certificate
                </Link>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certifications;
