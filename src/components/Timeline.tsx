import React from 'react';
import { Box, Container, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { motion } from 'framer-motion';
import {
  Code as CodeIcon,
  Web as WebIcon,
  Cloud as CloudIcon,
  Business as BusinessIcon,
  Chat as ChatIcon,
  PhoneIphone as MobileIcon,
  Psychology as AIIcon,
  Brush as BrushIcon,
} from '@mui/icons-material';

const MotionPaper = motion(Paper);
const MotionTimelineDot = motion(TimelineDot);

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const events: TimelineEvent[] = [
  {
    year: "2025",
    title: "360 College",
    description: "Virtual Reality College Tour Project",
    icon: <CodeIcon />
  },
  {
    year: "2024-II",
    title: "VR Development",
    description: "Advanced Virtual Reality Development",
    icon: <WebIcon />
  },
  {
    year: "2024-I",
    title: "Machine Learning",
    description: "Advanced Machine Learning and AI Development",
    icon: <AIIcon />
  },
  {
    year: "2023-V",
    title: "Flutter Development",
    description: "Mobile App Development with Flutter",
    icon: <MobileIcon />
  },
  {
    year: "2023-IV",
    title: "Arduino Programming",
    description: "Embedded Systems and IoT Development",
    icon: <CloudIcon />
  },
  {
    year: "2023-III",
    title: "Java Development",
    description: "Enterprise Java Development",
    icon: <BusinessIcon />
  },
  {
    year: "2023-II",
    title: "Python Flask",
    description: "Web Development with Flask Framework",
    icon: <ChatIcon />
  },
  {
    year: "2023-I",
    title: "Python AI Modules",
    description: "Artificial Intelligence and Machine Learning with Python",
    icon: <AIIcon />
  },
  {
    year: "2022-II",
    title: "PythonAnywhere Hosting & Godot Development",
    description: "Web Hosting and Game Development",
    icon: <WebIcon />
  },
  {
    year: "2022-I",
    title: "HTML5 Web Development",
    description: "Modern Web Development with HTML5",
    icon: <CodeIcon />
  },
  {
    year: "2021",
    title: "Python Beginner",
    description: "Introduction to Python Programming",
    icon: <AIIcon />
  },
  {
    year: "2017",
    title: "Blender3D",
    description: "3D Modeling and Animation",
    icon: <BrushIcon />
  }
];

const Timeline: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      component="section" 
      id="timeline" 
      sx={{ 
        py: { xs: 3, sm: 4, md: 6 },
        px: { xs: 0, sm: 1, md: 2 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: { xs: 2, sm: 3, md: 4 },
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
              fontFamily: 'Roboto',
              fontWeight: 700,
              background: (theme) => 
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, #fff 30%, #888 90%)'
                  : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: (theme) => 
                theme.palette.mode === 'dark'
                  ? '0 0 20px rgba(255,255,255,0.3)'
                  : '0 0 20px rgba(33,150,243,0.3)',
            }}
          >
            Skill Development
          </Typography>
        </motion.div>
        <MuiTimeline 
          position={isMobile ? "right" : "alternate"}
          sx={{
            p: { xs: 0, sm: 1, md: 2 },
            [`& .MuiTimelineItem-root`]: {
              minHeight: { xs: '60px', sm: '80px', md: '100px' },
              '&::before': {
                // This removes the padding on mobile that causes misalignment
                ...(isMobile && {
                  display: 'none',
                }),
              },
            },
            [`& .MuiTimelineContent-root`]: {
              px: { xs: 2, sm: 2, md: 3 },
              py: { xs: 1, sm: 1.5, md: 2 },
            },
            [`& .MuiTimelineDot-root`]: {
              margin: { xs: 1, sm: 1.5, md: 2 },
              padding: { xs: 1, sm: 1.5, md: 2 },
            },
            [`& .MuiTimelineConnector-root`]: {
              width: { xs: 1, sm: 2, md: 3 },
            },
            [`& .MuiTimelineOppositeContent-root`]: {
              display: { xs: 'none', sm: 'block' },
            },
          }}
        >
          {events.map((event, index) => (
            <TimelineItem key={event.year}>
              {!isMobile && (
                <TimelineOppositeContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {event.year}
                  </Typography>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TimelineDot
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      boxShadow: theme.shadows[3],
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: theme.palette.primary.dark,
                        boxShadow: theme.shadows[5],
                      },
                    }}
                  >
                    {event.icon}
                  </TimelineDot>
                </motion.div>
                {index < events.length - 1 && (
                  <TimelineConnector 
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      opacity: 0.3,
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: isMobile ? 20 : isTablet ? 30 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.4,
                    delay: isMobile ? index * 0.1 : index * 0.15,
                    ease: "easeOut"
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: { xs: 1.5, sm: 2, md: 2.5 },
                      backgroundColor: theme.palette.background.paper,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: theme.shadows[4],
                      },
                    }}
                  >
                    {isMobile && (
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: { xs: '0.85rem', sm: '0.9rem' },
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                          mb: 0.5,
                        }}
                      >
                        {event.year}
                      </Typography>
                    )}
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                        fontWeight: 500,
                        color: theme.palette.text.primary,
                        mb: 0.5,
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {event.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </MuiTimeline>
      </Container>
    </Box>
  );
};

export default Timeline;
