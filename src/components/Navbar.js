import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 64; // Height of the navbar
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Use viewport center as reference

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Run once on mount to set initial active section
    handleScroll();

    // Add a small debounce to prevent too many updates
    let timeoutId;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', debouncedScroll);
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AppBar 
      position="fixed"
      sx={{
        background: 'rgba(26, 26, 26, 0.95)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            color: 'primary.main',
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          LUKA BRNETIC
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <Button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              sx={{
                color: activeSection === item.id ? 'primary.main' : 'text.primary',
                position: 'relative',
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'transparent',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: activeSection === item.id ? '100%' : '0%',
                  height: '2px',
                  bottom: '0',
                  left: '0',
                  backgroundColor: 'primary.main',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 