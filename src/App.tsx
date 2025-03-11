import { Route, Routes } from 'react-router';
import GlobalBackground from './components/global-background';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

const App = () => {
  return (
    <Routes>
      <Route element={<GlobalBackground />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;