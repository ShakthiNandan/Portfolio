import React from "react";
import { Box, Typography, useTheme, useMediaQuery, Paper } from "@mui/material";
import { 
  Timeline as MuiTimeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab";
import { motion } from "framer-motion";
import {
  Code as CodeIcon,
  PhoneAndroid as PhoneIcon,
  Web as WebIcon,
  Cloud as CloudIcon,
} from "@mui/icons-material";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
}

const experiences: Experience[] = [
  {
    title: "Software Developer",
    company: "Lofty Agrotech",
    location: "Coimbatore",
    period: "12/2024",
    description: [
      "Developing and maintaining software solutions for agricultural technology",
      "Working with modern development practices and tools"
    ],
    icon: <CodeIcon />
  },
  {
    title: "Java Developer",
    company: "Samsung Prism",
    location: "Coimbatore",
    period: "05/2024",
    description: [
      "Java development for Samsung's enterprise solutions",
      "Contributing to large-scale software projects"
    ],
    icon: <CodeIcon />
  },
  {
    title: "Web Developer",
    company: "Universiti Sains Islam Malaysia",
    location: "Malaysia",
    period: "07/2024",
    description: [
      "Web development for educational institution",
      "Creating responsive and accessible web applications"
    ],
    icon: <WebIcon />
  },
  {
    title: "Android Development Intern",
    company: "Prodigy Infotech",
    location: "Coimbatore",
    period: "01/2024",
    description: [
      "Mobile app development using Android",
      "Learning and implementing best practices in mobile development"
    ],
    icon: <PhoneIcon />
  },
  {
    title: "Web Development Intern",
    company: "Aalam Cloud",
    location: "Coimbatore",
    period: "05/2023 – 11/2023",
    description: [
      "Cloud-based web development",
      "Working with modern web technologies and frameworks"
    ],
    icon: <CloudIcon />
  }
];

const ProfessionalExperience: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 3, sm: 4, md: 6 },
        px: { xs: 0, sm: 1, md: 2 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
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
          Professional Experience
        </Typography>
      </motion.div>

      <MuiTimeline 
        position={isMobile ? "right" : "alternate"}
        sx={{
          p: { xs: 0, sm: 1, md: 2 },
          [`& .MuiTimelineItem-root`]: {
            minHeight: { xs: '60px', sm: '80px', md: '100px' },
            '&::before': {
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
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
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
                  {exp.period}
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
                  {exp.icon}
                </TimelineDot>
              </motion.div>
              {index < experiences.length - 1 && (
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
                      {exp.period}
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
                    {exp.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                      color: theme.palette.text.secondary,
                      mb: 1,
                    }}
                  >
                    {exp.company} | {exp.location}
                  </Typography>
                  <Box 
                    component="ul" 
                    sx={{ 
                      pl: 2,
                      m: 0,
                      listStyleType: 'disc',
                    }}
                  >
                    {exp.description.map((item, i) => (
                      <Typography
                        key={i}
                        component="li"
                        variant="body2"
                        sx={{
                          fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                          color: theme.palette.text.secondary,
                          mb: 0.5,
                          '&:last-child': {
                            mb: 0,
                          },
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </MuiTimeline>
    </Box>
  );
};

export default ProfessionalExperience; 