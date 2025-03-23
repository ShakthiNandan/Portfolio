import React from "react";
import { Box, Container } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, toggleTheme }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar toggleTheme={toggleTheme} />
      <Container maxWidth="lg" sx={{ minHeight: "80vh", mt: 8 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
