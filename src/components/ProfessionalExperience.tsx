import React from "react";
import { Box, Typography, useTheme, useMediaQuery, Paper } from "@mui/material";

import { motion } from "framer-motion";
import {
  Code as CodeIcon,
  PhoneAndroid as PhoneIcon,
  Web as WebIcon,
  Cloud as CloudIcon,
  BugReport as BugReportIcon,
  Layers as FullStackIcon,
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
    title: "Full Stack Developer",
    company: "Icon Embeded Controls",
    location: "Coimbatore",
    period: "11/2025 - 12/2025",
    description: [
      "Web Development & Hosting",
      "React Next.js"
    ],
    icon: <FullStackIcon />
  },
  {
    title: "Software Tester",
    company: "Akamai Technologies",
    location: "Bangalore",
    period: "06/2025",
    description: [
      "UI Testing & Automation - Python Playwright, Jenkins"
    ],
    icon: <BugReportIcon />
  },
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

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <Box
              key={index}
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
              {/* Content Side */}
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
                        textAlign: 'left', // Keep list items left aligned even if container is right aligned
                        display: 'inline-block', // To contain the list width
                        maxWidth: '100%',
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
                {React.cloneElement(exp.icon as React.ReactElement<any>, { fontSize: 'small' })}
              </Box>

              {/* Date Side */}
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
                  {exp.period}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProfessionalExperience; 