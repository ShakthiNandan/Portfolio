import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  IconButton,
  useTheme,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  LocationOn as LocationIcon,
  Cake as CakeIcon,
  PictureAsPdf as PictureAsPdfIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';

const InfoItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    {icon}
    <Typography variant="body1">{text}</Typography>
  </Stack>
);

const AboutMe: React.FC = () => {
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
                mb: 3,
                textAlign: 'center',
                fontSize: { xs: '2.5rem', sm: '3.5rem' },
                letterSpacing: 2,
              }}
            >
              NANDAN'S PRISM
            </Typography>

            <Stack spacing={3}>
              <Box>
                <Typography variant="h4" gutterBottom color="primary" sx={{ textAlign: 'center' }}>
                  About Me
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ textAlign: 'center' }}>
                  B.Tech AI & Data Science Student
                </Typography>
              </Box>

              <Stack spacing={2}>
                <InfoItem 
                  icon={<PersonIcon color="primary" />} 
                  text="Male"
                />
                <InfoItem 
                  icon={<EmailIcon color="primary" />} 
                  text="shakthinandanp0712@gmail.com"
                />
                <InfoItem 
                  icon={<SchoolIcon color="primary" />} 
                  text="CIT, Coimbatore"
                />
                <InfoItem 
                  icon={<CakeIcon color="primary" />} 
                  text="7th December 2004"
                />
                <InfoItem 
                  icon={<LocationIcon color="primary" />} 
                  text="Coimbatore, Tamil Nadu"
                />
              </Stack>

              <Box>
                <Typography variant="h6" gutterBottom color="primary">
                  Connect with me
                </Typography>
                <IconButton 
                  href="https://www.linkedin.com/in/shakthinandan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#0077B5',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 119, 181, 0.1)',
                    },
                  }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom color="primary">
                  Resume
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="/data/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<PictureAsPdfIcon />}
                    sx={{
                      background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                      '&:hover': {
                        background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`,
                      },
                    }}
                  >
                    View Resume
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="/data/resume.pdf"
                    download
                    startIcon={<DownloadIcon />}
                  >
                    Download Resume
                  </Button>
                </Stack>
              </Box>

              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                I am a passionate student pursuing B.Tech in AI & Data Science at CIT, Coimbatore. 
                My interests span across various domains of technology including web development, 
                virtual reality, and artificial intelligence. I have worked on several projects 
                including a 360° VR College Tour that showcases my ability to blend innovative 
                technology with practical applications. I am constantly learning and exploring 
                new technologies to expand my skill set and create impactful solutions.
              </Typography>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutMe;
