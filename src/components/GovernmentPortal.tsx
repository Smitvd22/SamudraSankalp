import React, { useState } from 'react';
import { NationalDashboard } from './government/NationalDashboard';
import { ImpactAnalytics } from './government/ImpactAnalytics';

type GovernmentScreen = 'dashboard' | 'analytics';

export function GovernmentPortal() {
  const [currentScreen, setCurrentScreen] = useState<GovernmentScreen>('dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <NationalDashboard onNavigate={setCurrentScreen} />;
      case 'analytics':
        return <ImpactAnalytics onNavigate={setCurrentScreen} />;
      default:
        return <NationalDashboard onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderScreen()}
    </div>
  );
}