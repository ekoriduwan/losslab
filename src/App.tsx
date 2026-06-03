import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Assets from './components/Assets';
import Simulator from './components/Simulator';
import AIInsights from './components/AIInsights';
import Gamification from './components/Gamification';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/ai-insights" element={<AIInsights />} />
          <Route path="/gamification" element={<Gamification />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
