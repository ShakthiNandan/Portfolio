import React from "react";
import { Box, Container, Paper } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";
import GoogleAnalyticsStats from "./GoogleAnalyticsStats";
import TrafficStats from "./TrafficStats";
import { ENABLE_ANALYTICS } from "../config";

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, toggleTheme }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar toggleTheme={toggleTheme} />
      <Container maxWidth="lg" sx={{ minHeight: "80vh", mt: 8, position: 'relative' }}>
        {children}
      </Container>
      
      {/* Analytics and Traffic Stats at Bottom */}
      {ENABLE_ANALYTICS && (
        <Box 
          component="footer"
          sx={{ 
            width: '100%',
            mt: 'auto',
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            background: (theme) => 
              theme.palette.mode === 'dark' 
                ? 'rgba(18, 18, 18, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Box 
            sx={{
              width: '100%',
              maxWidth: '100vw',
              mx: 'auto',
              px: { xs: 2, sm: 3, md: 4 },
              py: 3,
            }}
          >
            <Box 
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 3,
                maxWidth: '100%',
                mx: 'auto',
              }}
            >
              <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
                <GoogleAnalyticsStats />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      
      <Footer />
    </Box>
  );
};

export default Layout;
