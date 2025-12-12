import React from 'react';
import { Box, Container, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';

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

        <Box sx={{ position: 'relative', width: '100%', py: 2 }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', sm: '50%' },
              top: 0,
              bottom: 0,
              width: '2px',
              bgcolor: theme.palette.primary.main,
              opacity: 0.3,
              transform: { xs: 'none', sm: 'translateX(-50%)' },
              zIndex: 0,
            }}
          />

          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <Box
                key={event.year}
                sx={{
                  display: 'flex',
                  mb: 4,
                  width: '100%',
                  flexDirection: { xs: 'row', sm: isLeft ? 'row-reverse' : 'row' },
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Content Side (Right on mobile, Left/Right on desktop) */}
                <Box
                  sx={{
                    width: { xs: 'calc(100% - 60px)', sm: '50%' },
                    pl: { xs: 2, sm: isLeft ? 0 : 4 },
                    pr: { xs: 0, sm: isLeft ? 4 : 0 },
                    ml: { xs: '60px', sm: 0 },
                    textAlign: { xs: 'left', sm: isLeft ? 'right' : 'left' },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
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
                </Box>

                {/* Dot */}
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.2 }}
                  sx={{
                    position: 'absolute',
                    left: { xs: '20px', sm: '50%' },
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    bgcolor: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: { xs: 'translateX(-50%)', sm: 'translateX(-50%)' },
                    zIndex: 2,
                    boxShadow: theme.shadows[3],
                    color: '#fff',
                  }}
                >
                  {React.cloneElement(event.icon as React.ReactElement<any>, { fontSize: 'small' })}
                </Box>

                {/* Date Side (Hidden on mobile, Opposite on desktop) */}
                <Box
                  sx={{
                    width: '50%',
                    px: 4,
                    display: { xs: 'none', sm: 'block' },
                    textAlign: isLeft ? 'left' : 'right',
                  }}
                >
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
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Timeline;
