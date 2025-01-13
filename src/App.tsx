import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar';
import AssetAndPersonnel from './pages/AssetAndPersonnel';
import Home from './pages/Home';
import DataAndReporting from './pages/DataAndReporting';
import SecureCommunication from './pages/SecureCommunication';
import RestrictedZones from './pages/RestrictedZones';
import RealTimeTracking from './pages/RealTimeTracking';
import ThreatDetectionAndResponse from './pages/ThreatDetectionAndResponse';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assetsandpersonnel" element={<AssetAndPersonnel />} />
        <Route path="/dataandreporting" element={<DataAndReporting />} />
        <Route path="/securecommunication" element={<SecureCommunication />} />
        <Route path="/restrictedzones" element={<RestrictedZones />} />
        <Route path="/realtimetracking" element={<RealTimeTracking />} />
        <Route
          path="/threatdetection"
          element={<ThreatDetectionAndResponse />}
        />
      </Routes>
    </Router>
  );
}

export default App;
