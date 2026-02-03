import { useEffect, useState } from 'react';
import Landing from './pages/Landing';
import Home from './pages/Home';
import CursorGlow from './components/CursorGlow';

function App() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    document.title = 'Yash Kansal | Software Engineer';

    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
  <div className="min-h-screen bg-gray-900 relative overflow-hidden">
    {/* Cursor Glow (always on top of background) */}
    <CursorGlow />

    {/* Landing Page */}
    {!showHome && (
      <Landing onEnter={() => setShowHome(true)} />
    )}

    {/* Main Content */}
    <div
      className={`relative z-10 transition-opacity duration-700 ${
        showHome ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Home />
    </div>
  </div>
  );
}

export default App;
