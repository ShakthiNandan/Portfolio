import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Tooltip,
} from '@mui/material';
import { Menu as MenuIcon, DarkMode, LightMode } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  text: string;
  sectionId: string;
}

interface NavbarProps {
  toggleTheme: () => void;
}

const menuItems: NavItem[] = [
  { text: 'Home', sectionId: 'home' },
  { text: 'About', sectionId: 'about-me' },
  { text: 'Skills', sectionId: 'skills' },
  { text: 'Projects', sectionId: 'projects' },
  { text: 'Patents', sectionId: 'patents' },
];

const Navbar: React.FC<NavbarProps> = ({ toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <motion.div
          key={item.text}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ListItem 
            onClick={() => scrollToSection(item.sectionId)}
            sx={{ 
              cursor: 'pointer',
              '&:hover': {
                background: 'linear-gradient(45deg, rgba(25, 118, 210, 0.1), rgba(156, 39, 176, 0.1))',
              }
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        </motion.div>
      ))}
      <ListItem>
          <IconButton onClick={toggleTheme} color="inherit">
            <AnimatePresence mode="wait">
              <motion.div
                key={isDarkMode ? 'dark' : 'light'}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDarkMode ? <DarkMode /> : <LightMode />}
              </motion.div>
            </AnimatePresence>
          </IconButton>
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar 
        component={motion.div}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        position="sticky" 
        elevation={0}
        sx={{
          background: (theme) => 
            theme.palette.mode === 'dark'
              ? 'linear-gradient(180deg, rgba(18, 18, 18, 0.95), rgba(18, 18, 18, 0.85))'
              : 'linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #1976d2, #9c27b0, #1976d2)',
            opacity: 0.8,
          }
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ flexGrow: 1 }}
          >
            <Typography
              variant="h6"
              component="div"
              onClick={() => scrollToSection('home')}
              sx={{
                cursor: 'pointer',
                fontWeight: 700,
                background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 0 20px rgba(25, 118, 210, 0.3)',
                letterSpacing: '0.05em',
                display: 'inline-block',
              }}
            >
              Nandan's Prism
            </Typography>
          </motion.div>
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'flex-end' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {menuItems.map((item) => (
                  <motion.div
                    key={item.text}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Button
                      color="primary"
                      onClick={() => scrollToSection(item.sectionId)}
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: -100,
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                          transition: 'transform 0.3s ease',
                          transform: 'translateX(-100%)',
                        },
                        '&:hover::before': {
                          transform: 'translateX(200%)',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: '2px',
                          background: 'linear-gradient(90deg, #1976d2, #9c27b0)',
                          transform: 'scaleX(0)',
                          transition: 'transform 0.3s ease',
                          transformOrigin: 'right',
                        },
                        '&:hover::after': {
                          transform: 'scaleX(1)',
                          transformOrigin: 'left',
                        },
                      }}
                    >
                      {item.text}
                    </Button>
                  </motion.div>
                ))}

                <Tooltip title={`Switch to ${isDarkMode ? 'Light' : 'Dark'} Mode`}>
                  <IconButton 
                    onClick={toggleTheme} 
                    color="primary"
                    sx={{
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'rotate(180deg)',
                      },
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isDarkMode ? 'dark' : 'light'}
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isDarkMode ? <DarkMode /> : <LightMode />}
                      </motion.div>
                    </AnimatePresence>
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            background: (theme) => 
              theme.palette.mode === 'dark'
                ? 'linear-gradient(180deg, #121212, #1a1a1a)'
                : 'linear-gradient(180deg, #ffffff, #f5f5f5)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
