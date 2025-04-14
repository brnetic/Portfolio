import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#4dabf5',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2a2a2a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3e5fc',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background />
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;
