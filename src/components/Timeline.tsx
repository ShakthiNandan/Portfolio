import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
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
  LocalHospital as HospitalIcon,
  PhoneAndroid as PhoneIcon,
  Gamepad as GamepadIcon,
  PhoneIphone as MobileIcon,
  Psychology as AIIcon,
  Agriculture as AgricultureIcon,
  MusicNote as MusicIcon,
  HealthAndSafety as HealthIcon,
  ThreeSixty as ThreeSixtyIcon,
  Brush as BrushIcon,
} from '@mui/icons-material';

const MotionPaper = motion(Paper);
const MotionTimelineDot = motion(TimelineDot);

interface TimelineEvent {
  year: string;
  title: string;
  icon: React.ReactNode;
  color: string;
}

const timelineEvents: TimelineEvent[] = [
  { year: '2017', title: 'Blender3D', icon: <BrushIcon />, color: '#ff9800' },
  { year: '2021', title: 'Python Beginner', icon: <CodeIcon />, color: '#2196f3' },
  { year: '2022-I', title: 'HTML5 Web Development', icon: <WebIcon />, color: '#e91e63' },
  { year: '2022-II', title: 'PythonAnywhere Hosting & Godot Development', icon: <CloudIcon />, color: '#4caf50' },
  { year: '2022-III', title: 'Aalam Dev', icon: <BusinessIcon />, color: '#9c27b0' },
  { year: '2023-I', title: 'Covid CHATBOT AISHA', icon: <ChatIcon />, color: '#00bcd4' },
  { year: '2023-II', title: 'USIM Clinical System', icon: <HospitalIcon />, color: '#f44336' },
  { year: '2023-III', title: 'Samsung Prism', icon: <PhoneIcon />, color: '#3f51b5' },
  { year: '2023-IV', title: 'IOT Gauntlet', icon: <GamepadIcon />, color: '#ff5722' },
  { year: '2023-V', title: 'Flutter Development', icon: <MobileIcon />, color: '#2196f3' },
  { year: '2024-I', title: 'Machine Learning', icon: <AIIcon />, color: '#673ab7' },
  { year: '2024-II', title: 'Paddy Disease Classifier', icon: <AgricultureIcon />, color: '#4caf50' },
  { year: '2024-III', title: 'Emotion Detection Song Player', icon: <MusicIcon />, color: '#e91e63' },
  { year: '2024-IV', title: 'Medme Software', icon: <HealthIcon />, color: '#00bcd4' },
  { year: '2025', title: '360 College Virtual Tour', icon: <ThreeSixtyIcon />, color: '#ff9800' },
];

const Timeline: React.FC = () => (
  <Box component="section" id="timeline" sx={{ py: 6 }}>
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            mb: 4,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: 'uppercase'
          }}
        >
          Journey
        </Typography>
      </motion.div>
      <MuiTimeline position="alternate">
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ m: 'auto 0' }}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.8,
                  delay: 0.2
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    textShadow: (theme) => 
                      theme.palette.mode === 'dark'
                        ? '0 0 8px rgba(255,255,255,0.3)'
                        : '0 0 8px rgba(0,0,0,0.1)',
                  }}
                >
                  {event.year}
                </Typography>
              </motion.div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.6,
                  delay: 0.3
                }}
              >
                <TimelineDot 
                  sx={{ 
                    bgcolor: event.color, 
                    boxShadow: 3,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: 6,
                    }
                  }}
                >
                  {event.icon}
                </TimelineDot>
              </motion.div>
              {index < timelineEvents.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4
                  }}
                  style={{ width: '100%', transformOrigin: 'top' }}
                >
                  <TimelineConnector />
                </motion.div>
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.8,
                  delay: 0.2
                }}
              >
                <MotionPaper
                  elevation={3}
                  sx={{ 
                    p: 2, 
                    bgcolor: 'background.default',
                    borderLeft: (theme) => `4px solid ${event.color}`,
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 500,
                      letterSpacing: 0.5,
                      background: `linear-gradient(45deg, ${event.color} 30%, ${event.color}90 90%)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      textShadow: '0 0 8px rgba(0,0,0,0.1)',
                    }}
                  >
                    {event.title}
                  </Typography>
                </MotionPaper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </MuiTimeline>
    </Container>
  </Box>
);

export default Timeline;
