import { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouch) return;

    setEnabled(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 mix-blend-lighten"

      style={{
        background: `
          radial-gradient(
            120px at ${pos.x}px ${pos.y}px,
            rgba(147,197,253,0.35),
            rgba(96,165,250,0.15) 45%,
            transparent 70%
          )
        `,
      }}
    />
  );
};

export default CursorGlow;
