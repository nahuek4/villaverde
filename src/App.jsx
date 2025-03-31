import { useState, useEffect } from 'react';
import Router from '../src/app/Router';
import { Outlet } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Duración del loader
  }, []);

  return (
    <div className="app-wrapper">
      {/* Loader */}
      <div className={`loader ${isLoading ? "visible" : "hidden"}`}>
        <div className="loader-content">
          <span className="first-line">MOVETE BIEN</span>
          <span className="second-line">VIVÍ SIN DOLOR</span>
        </div>
      </div>

      {/* Contenido de la App */}
      <div className={`app-content ${isLoading ? "hidden" : "visible"}`}>
        <Router />
        <Outlet />
      </div>
    </div>
  );
};

export default App;

if (document.getElementById('app')) {
  createRoot(document.getElementById('app')).render(<App />);
}
