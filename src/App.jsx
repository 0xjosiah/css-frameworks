import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Bootstrap from './components/Bootstrap';
import Tailwind from './components/Tailwind';
import MaterialUI from './components/MaterialUI';
import StyledComponents from './components/StyledComponents';

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img 
              src={'public/image.png'} 
              alt="Logo" 
              style={{ width: '100px' }} 
            />
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/bootstrap">
            Bootstrap
          </Button>
          <Button color="inherit" component={Link} to="/tailwind">
            Tailwind
          </Button>
          <Button color="inherit" component={Link} to="/mui">
            Material UI
          </Button>
          <Button color="inherit" component={Link} to="/styled-components">
            styled-components
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bootstrap" element={<Bootstrap />} />
          <Route path="/tailwind" element={<Tailwind />} />
          <Route path="/mui" element={<MaterialUI />} />
          <Route path="/styled-components" element={<StyledComponents />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
