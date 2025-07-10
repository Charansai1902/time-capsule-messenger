import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ComposePage from './components/ComposePage';
import ConfirmationPage from './components/ConfirmationPage';
import { MessageProvider } from './context/MessageContext';

function App() {
  return (
    <MessageProvider>
      <Router>
        <div className="min-h-screen bg-cream">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/compose" element={<ComposePage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </div>
      </Router>
    </MessageProvider>
  );
}

export default App; 