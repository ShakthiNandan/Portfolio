import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Chip,
  Stack,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  ThreeSixty as VRIcon,
  Code as CodeIcon,
  GitHub as GitHubIcon,
  School as SchoolIcon,
  Launch as LaunchIcon,
} from '@mui/icons-material';

interface HighlightProjectProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const technologies = [
  'HTML5',
  'Python',
  'Flask',
  'VR Technology',
  '360° Photography',
  'Web Development',
  'Three.js',
  'React'
];

const HighlightProject: React.FC<HighlightProjectProps> = ({
  title = "360° VR College Tour",
  description = "An Immersive Virtual Reality Experience",
  imageUrl = "/images/VR.png"
}) => {
  const theme = useTheme();
  
  return (
    <Box component="section" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 4 },
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
                : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              },
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(45deg, #fff 30%, #888 90%)'
                        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      textShadow: theme.palette.mode === 'dark'
                        ? '0 0 20px rgba(255,255,255,0.3)'
                        : '0 0 20px rgba(33,150,243,0.3)',
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    {description}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Experience a cutting-edge virtual reality tour of the college campus. 
                    This project combines 360° photography with web-based VR technology to create 
                    an interactive and immersive exploration experience. Visitors can navigate 
                    through various campus locations, view detailed information, and get a real 
                    feel for the campus environment from anywhere in the world.
                  </Typography>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                      Key Features:
                    </Typography>
                    <Stack spacing={1}>
                      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <VRIcon color="primary" /> Immersive 360° Views
                      </Typography>
                      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SchoolIcon color="primary" /> Complete Campus Coverage
                      </Typography>
                      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CodeIcon color="primary" /> Web-Based VR Technology
                      </Typography>
                    </Stack>
                  </Box>
                  <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                    <Button
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      href="https://github.com/ShakthiNandan/360-VR-College"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #1565c0, #7b1fa2)',
                        },
                      }}
                    >
                      View on GitHub
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<VRIcon />}
                      href="https://sssnandan.pythonanywhere.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderImage: 'linear-gradient(45deg, #1976d2, #9c27b0) 1',
                        '&:hover': {
                          borderImage: 'linear-gradient(45deg, #1565c0, #7b1fa2) 1',
                        },
                      }}
                    >
                      View Live Demo
                    </Button>
                  </Stack>
                  <Box>
                    <Typography variant="subtitle1" gutterBottom sx={{ color: 'primary.main' }}>
                      Technologies Used:
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            m: 0.5,
                            background: (theme) =>
                              theme.palette.mode === 'dark'
                                ? 'linear-gradient(45deg, rgba(25, 118, 210, 0.2), rgba(156, 39, 176, 0.2))'
                                : 'linear-gradient(45deg, rgba(25, 118, 210, 0.1), rgba(156, 39, 176, 0.1))',
                            '&:hover': {
                              background: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? 'linear-gradient(45deg, rgba(25, 118, 210, 0.3), rgba(156, 39, 176, 0.3))'
                                  : 'linear-gradient(45deg, rgba(25, 118, 210, 0.2), rgba(156, 39, 176, 0.2))',
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: '100%',
                    minHeight: 400,
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: (theme) =>
                      `0 8px 24px ${
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.1)'
                          : 'rgba(0,0,0,0.1)'
                      }`,
                  }}
                >
                  <Box
                    component="img"
                    src={imageUrl}
                    alt={`${title} Preview`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop
                      target.src = '/images/VR.png'; // Fallback image
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <VRIcon
                      sx={{
                        fontSize: 80,
                        color: 'white',
                        opacity: 0.9,
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HighlightProject;
