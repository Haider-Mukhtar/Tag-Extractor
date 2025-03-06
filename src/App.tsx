import { Route, Routes } from 'react-router';
import GlobalBackground from './components/global-background';
import Home from './pages/home';

const App = () => {
  return (
    <Routes>
      <Route element={<GlobalBackground />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;