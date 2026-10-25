import React from 'react';
import { HashRouter } from 'react-router-dom';
import { AppContent } from './AppContent';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
