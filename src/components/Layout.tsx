import React, { useState } from "react";
import { Box, Container, IconButton, Tooltip } from "@mui/material";
import { Analytics as AnalyticsIcon, Close as CloseIcon } from "@mui/icons-material";
import Footer from "./Footer";
import Navbar from "./Navbar";
import GoogleAnalyticsStats from "./GoogleAnalyticsStats";

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, toggleTheme }) => {
  const [showAnalytics, setShowAnalytics] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar toggleTheme={toggleTheme} />
      <Container maxWidth="lg" sx={{ minHeight: "80vh", mt: 8, position: 'relative' }}>
        {children}
        
        {/* Analytics Toggle Button */}
        <Box
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 2
          }}
        >
          {showAnalytics && (
            <Box
              sx={{
                mb: 2,
                boxShadow: 3,
                borderRadius: 2,
                overflow: 'hidden',
                animation: 'fadeIn 0.3s ease-in-out',
                '@keyframes fadeIn': {
                  from: { opacity: 0, transform: 'translateY(20px)' },
                  to: { opacity: 1, transform: 'translateY(0)' }
                }
              }}
            >
              <GoogleAnalyticsStats />
            </Box>
          )}
          
          <Tooltip title={showAnalytics ? 'Hide Analytics' : 'Show Analytics'}>
            <IconButton
              onClick={() => setShowAnalytics(!showAnalytics)}
              color="primary"
              sx={{
                backgroundColor: 'background.paper',
                boxShadow: 3,
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {showAnalytics ? <CloseIcon /> : <AnalyticsIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
