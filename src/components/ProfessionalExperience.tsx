import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Timeline as MuiTimeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
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

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 4, sm: 6 },
        px: { xs: 1, sm: 2 },
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
            mb: 4,
            fontSize: { xs: '2rem', sm: '3rem' },
            fontFamily: 'Roboto',
            fontWeight: 700,
            color: theme.palette.text.primary,
            background: (theme) => 
              theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #fff 30%, #888 90%)'
                : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            textShadow: (theme) => 
              theme.palette.mode === 'dark'
                ? '0 0 20px rgba(255,255,255,0.3)'
                : '0 0 20px rgba(33,150,243,0.3)',
          }}
        >
          Professional Experience
        </Typography>
      </motion.div>

      <MuiTimeline position={isMobile ? "right" : "alternate"}>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" sx={{ bgcolor: theme.palette.primary.main }}>
                {exp.icon}
              </TimelineDot>
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  {exp.period}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                  }}
                >
                  {exp.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: 'Roboto',
                    color: theme.palette.text.secondary,
                    mb: 1,
                  }}
                >
                  {exp.company} | {exp.location}
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {exp.description.map((item, i) => (
                    <Typography
                      key={i}
                      component="li"
                      sx={{
                        fontFamily: 'Roboto',
                        color: theme.palette.text.secondary,
                        mb: 0.5,
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </MuiTimeline>
    </Box>
  );
};

export default ProfessionalExperience; 