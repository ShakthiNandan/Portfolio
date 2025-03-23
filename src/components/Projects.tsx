import React from 'react';
import { Box, Typography, Grid, Paper, Link, Chip, useTheme, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CodeIcon from '@mui/icons-material/Code';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SchoolIcon from '@mui/icons-material/School';

interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
  icon: React.ReactNode;
  status: 'Completed' | 'In Progress';
  category: string;
  demoPath?: string;
  link?: string;
  type?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: "USIM Clinical System",
    description: "Medical records management with QR-based access to securely retrieve patient data.",
    githubUrl: "https://github.com/ShakthiNandan/USIM-Clinical-System",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    icon: <MedicalServicesIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'Completed',
    category: 'Healthcare',
    type: 'Web Development'
  },
  {
    id: '2',
    title: "Typing Test App",
    description: "An interactive speed tester for measuring typing speed and accuracy, built with Flask.",
    githubUrl: "https://github.com/ShakthiNandan/Typing-Test-App",
    technologies: ["Flask", "JavaScript", "HTML", "CSS"],
    icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'Completed',
    category: 'Web Development',
    type: 'Web Application'
  },
  {
    id: '3',
    title: "AR-Based Home Decor Project",
    description: "Enables vendors to upload their products while allowing customers to visualize items in their own space using augmented reality.",
    githubUrl: "https://github.com/ShakthiNandan/AR-Home-Decor",
    technologies: ["AR.js", "JavaScript", "HTML", "CSS"],
    icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'Completed',
    category: 'AR/VR',
    type: 'Augmented Reality'
  },
  {
    id: '4',
    title: "Student Attendance Tracker App",
    description: "Simplifies attendance tracking for educational institutions, developed using Flutter and Firebase.",
    githubUrl: "https://github.com/ShakthiNandan/Student-Attendance-Tracker",
    technologies: ["Flutter", "Firebase"],
    icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'Completed',
    category: 'Mobile Development',
    type: 'Mobile Application'
  },
  {
    id: '5',
    title: "Java File Metadata Extractor",
    description: "Analyzes file metadata to help identify potential malware, leveraging Java for feature extraction and analysis.",
    githubUrl: "https://github.com/ShakthiNandan/Java-Metadata-Extractor",
    technologies: ["Java"],
    icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'Completed',
    category: 'Security',
    type: 'Java Application'
  },
  {
    id: '6',
    title: "Swifties Webpage",
    description: "A multimedia fan page dedicated to Taylor Swift, showcasing various forms of media and content related to the artist.",
    githubUrl: "https://github.com/ShakthiNandan/Swifties-Webpage",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'Completed',
    category: 'Web Development',
    type: 'Web Application'
  },
  {
    id: '7',
    title: "Forum Website",
    description: "Provides a platform for users to register, list projects, and collaborate, built with React, TypeScript, Node.js, Express.js, and PostgreSQL.",
    githubUrl: "https://github.com/ShakthiNandan/Forum-Website",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'Completed',
    category: 'Web Development',
    type: 'Full-Stack Application'
  },
  {
    id: '8',
    title: "MEDME: Resuscitation Room Support Software",
    description: "Designed to digitize and manage patient vitals and health records in a clinical setting, transitioning from Python Flask to TypeScript with PostgreSQL.",
    githubUrl: "https://github.com/ShakthiNandan/MEDME-Software",
    technologies: ["TypeScript", "PostgreSQL"],
    icon: <MedicalServicesIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'In Progress',
    category: 'Healthcare',
    type: 'Web Development'
  },
  {
    id: '9',
    title: "On-Device Malware Detection (Samsung Prism)",
    description: "Android app developed in Java that integrates a TensorFlow model for real-time malware detection.",
    githubUrl: "https://github.com/ShakthiNandan/On-Device-Malware-Detection",
    technologies: ["Java", "TensorFlow", "Android"],
    icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'Completed',
    category: 'Security',
    type: 'Android Application'
  },
  {
    id: '10',
    title: "Paddy Disease Classification",
    description: "Classifies up to 10 different paddy diseases using deep learning with TensorFlow.",
    githubUrl: "https://github.com/ShakthiNandan/Paddy-Disease-Classification",
    technologies: ["TensorFlow", "Python"],
    icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'Completed',
    category: 'AI/ML',
    type: 'Machine Learning'
  },
  {
    id: '11',
    title: "Webcam-Based Eye Tracker",
    description: "Currently In Progress, aims to track eye movements using a webcam for accessibility or user interaction improvements.",
    githubUrl: "https://github.com/ShakthiNandan/Webcam-Eye-Tracker",
    technologies: ["Python", "OpenCV"],
    icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'In Progress',
    category: 'AI/ML',
    type: 'Machine Learning'
  },
  {
    id: '12',
    title: "AI-Based Cybersecurity Initiatives",
    description: "Includes projects for malicious APK/ZIP detection, stock price forecasting, and healthcare AI for seizure prediction.",
    githubUrl: "https://github.com/ShakthiNandan/Cybersecurity-Initiatives",
    technologies: ["Python", "Machine Learning"],
    icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    status: 'In Progress',
    category: 'Security',
    type: 'AI/ML'
  }
];

const Projects: React.FC = () => {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [selectedStatus, setSelectedStatus] = React.useState<string>('all');
  const ITEMS_PER_PAGE = 6;

  const categories = ['all', ...new Set(projects.map(project => project.category))];
  const statuses = ['all', ...new Set(projects.map(project => project.status))];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const visibleProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Box component="section" id="projects" sx={{ py: { xs: 4, sm: 6 } }}>
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
        Projects
      </Typography>

      <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "contained" : "outlined"}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              sx={{
                textTransform: 'capitalize',
                minWidth: 100,
                background: selectedCategory === category
                  ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                  : 'transparent',
                '&:hover': {
                  background: selectedCategory === category
                    ? `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`
                    : 'rgba(25, 118, 210, 0.04)',
                },
              }}
            >
              {category}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {statuses.map((status) => (
            <Button
              key={status}
              variant={selectedStatus === status ? "contained" : "outlined"}
              onClick={() => {
                setSelectedStatus(status);
                setCurrentPage(1);
              }}
              sx={{
                textTransform: 'capitalize',
                minWidth: 100,
                background: selectedStatus === status
                  ? `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`
                  : 'transparent',
                '&:hover': {
                  background: selectedStatus === status
                    ? `linear-gradient(45deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.dark})`
                    : 'rgba(25, 118, 210, 0.04)',
                },
              }}
            >
              {status}
            </Button>
          ))}
        </Box>
      </Box>

      <Grid container spacing={3}>
        {visibleProjects.map((project, index) => (
          <Grid item xs={12} md={6} key={project.id}>
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
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                    : 'linear-gradient(145deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ mr: 2 }}>
                    {project.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {project.description}
                </Typography>

                <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.1)'
                          : 'rgba(0,0,0,0.05)',
                        color: 'text.primary',
                        '&:hover': {
                          backgroundColor: theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.15)'
                            : 'rgba(0,0,0,0.1)',
                        },
                      }}
                    />
                  ))}
                </Box>

                <Box sx={{ mt: 'auto', display: 'flex', gap: 2 }}>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'primary.main',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    <GitHubIcon sx={{ mr: 1 }} />
                    View Code
                  </Link>
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'primary.main',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      <VisibilityIcon sx={{ mr: 1 }} />
                      Live Demo
                    </Link>
                  )}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Chip
                key={page}
                label={page}
                onClick={() => setCurrentPage(page)}
                sx={{
                  backgroundColor: currentPage === page
                    ? 'primary.main'
                    : theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.1)'
                      : 'rgba(0,0,0,0.05)',
                  color: currentPage === page
                    ? 'background.paper'
                    : 'text.primary',
                  '&:hover': {
                    backgroundColor: currentPage === page
                      ? 'primary.dark'
                      : theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.15)'
                        : 'rgba(0,0,0,0.1)',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Projects;
