'use client';
import { useState } from 'react';
import GrandEntrance from './GrandEntrance';

export default function GrandEntranceClient() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  if (showPortfolio) {
    return null;
  }

  return (
    <GrandEntrance
      onComplete={() => {
        // Trigger content reveal animation on the main page
        if (typeof document !== 'undefined') {
          document.documentElement.classList.add('content-revealed');
        }
        setShowPortfolio(true);
      }}
    />
  );
}
