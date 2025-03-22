import React from "react";
import { Container } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ minHeight: "80vh", mt: 4 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
