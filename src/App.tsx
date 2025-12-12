import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Box, useMediaQuery } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import AboutMe from './components/AboutMe';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import HighlightProject from './components/HighlightProject';
import CurrentlyWorkingOn from './components/CurrentlyWorkingOn';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Patents from './components/Patents';
import Chatbot from './Chatbot';
import BlenderShowcase from './components/BlenderShowcase';
import GodotShowcase from './components/GodotShowcase';
import Layout from './components/Layout';
import getTheme from './theme';
import EmailSender from './components/EmailSender';
import ProfessionalExperience from './components/ProfessionalExperience';
import PositionsOfResponsibility from './components/PositionsOfResponsibility';
import NavigationShortcuts from './components/NavigationShortcuts';

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

const AnimatedTitle: React.FC<{ text: string; variant: "h2" | "h3"; component?: React.ElementType; gutterBottom?: boolean; align?: "center" | "left" | "right" }> = ({
  text,
  variant,
  component,
  gutterBottom = false,
  align = "left"
}) => {
  return (
    <Box sx={{ overflow: 'hidden', display: 'inline-block', width: align === "center" ? "100%" : "auto" }}>
      <Typography
        variant={variant}
        component={component || variant}
        gutterBottom={gutterBottom}
        align={align}
        sx={{
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
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
            custom={index}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
          >
            {char}
          </motion.span>
        ))}
      </Typography>
    </Box>
  );
};

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  const theme = React.useMemo(() => getTheme(mode), [mode]);

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout toggleTheme={toggleColorMode}>
          <NavigationShortcuts />
          <AnimatePresence mode="wait">
            <motion.div
              key="container"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Container maxWidth="lg">
                <Box sx={{ py: 4 }}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    id="home"
                  >
                    <AnimatedTitle
                      text="Welcome to My Portfolio"
                      variant="h2"
                      component="h1"
                      gutterBottom
                      align="center"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <AboutMe />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <ProfessionalExperience />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <PositionsOfResponsibility />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Timeline />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Skills />
                  </motion.div>
                  <motion.div variants={itemVariants} id="projects">
                    <Projects />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Certifications />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Patents />
                  </motion.div>

                  {/* 3D Models Section */}
                  <motion.div variants={itemVariants}>
                    <Box sx={{ my: 4 }}>
                      <AnimatedTitle
                        text="3D Models"
                        variant="h3"
                        gutterBottom
                      />
                      <BlenderShowcase />
                    </Box>
                  </motion.div>

                  {/* Games Section */}
                  <motion.div variants={itemVariants}>
                    <Box sx={{ my: 4 }}>
                      <AnimatedTitle
                        text="Games"
                        variant="h3"
                        gutterBottom
                      />
                      <GodotShowcase />
                    </Box>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Box sx={{ my: 4 }}>
                      <AnimatedTitle
                        text="Freelance Projects"
                        variant="h3"
                        gutterBottom
                      />
                      <HighlightProject
                        title="Icon Embeded Controls"
                        subtitle="Industrial Equipment Website"
                        description="A modern, responsive website showcasing industrial equipment and machinery manufactured by Icon Embeded Controls. Built with Next.js 14, React 19, and Tailwind CSS 4. Features a clean, professional design, advanced product search, and SEO optimization."
                        imageUrl="/images/icon_site_thumb.png"
                        technologies={["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Nodemailer"]}
                        features={["Responsive Design", "Modern UI/UX", "Product Search", "Contact Forms", "SEO Optimized"]}
                        liveLink="https://www.iconembededcontrols.com"
                      />
                    </Box>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Box sx={{ my: 4 }}>
                      <AnimatedTitle
                        text="Highlight Project"
                        variant="h3"
                        gutterBottom
                      />
                      <HighlightProject
                        title="360° VR College Tour"
                        subtitle="An Immersive Virtual Reality Experience"
                        description="Experience a cutting-edge virtual reality tour of the college campus. This project combines 360° photography with web-based VR technology to create an interactive and immersive exploration experience."
                        imageUrl="/images/VR.png"
                        technologies={["HTML5", "Python", "Flask", "VR Technology", "Three.js", "React"]}
                        features={["Immersive 360° Views", "Complete Campus Coverage", "Web-Based VR Technology"]}
                        githubLink="https://github.com/ShakthiNandan/360-VR-College"
                        liveLink="https://shakthi.pythonanywhere.com/"
                        reverse
                      />
                    </Box>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <CurrentlyWorkingOn />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Box sx={{ mt: 4 }}>
                      <Chatbot />
                    </Box>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <EmailSender />
                  </motion.div>
                </Box>
              </Container>
            </motion.div>
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
