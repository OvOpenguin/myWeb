import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FateSelector from './pages/FateSelector';
import ScenarioManager from './pages/ScenarioManager';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/fateselector" element={<FateSelector />} />
        <Route path="/scenario" element={<ScenarioManager />} />
      </Routes>
    </Router>
  );
}

export default App;
