'use client';

import { useEffect, useState } from 'react';
import Landing from './views/Landing';
import Home from './views/Home';
import CursorGlow from './CursorGlow';

function ClientHome() {
    const [showHome, setShowHome] = useState(false);

    useEffect(() => {
        // Scroll behavior is now handled globally, but we can keep title logic if dynamic
        // document.title = 'Yash Kansal | Software Engineer'; // Handled by Metadata in layout/page
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
            {/* Cursor Glow (always on top of background) */}
            <CursorGlow />

            {/* Landing Page */}
            {!showHome && <Landing onEnter={() => setShowHome(true)} />}

            {/* Main Content */}
            <div
                className={`relative z-10 transition-opacity duration-700 ${showHome ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <Home />
            </div>
        </div>
    );
}

export default ClientHome;
