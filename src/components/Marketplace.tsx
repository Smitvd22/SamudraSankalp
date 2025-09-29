import React, { useState } from 'react';
import { MarketplaceLanding } from './marketplace/MarketplaceLanding';
import { ProjectDetailsPage } from './marketplace/ProjectDetailsPage';
import { CorporateWallet } from './marketplace/CorporateWallet';
import { ReportsPage } from './marketplace/ReportsPage';

type MarketplaceScreen = 'landing' | 'project' | 'wallet' | 'reports';

export function Marketplace() {
  const [currentScreen, setCurrentScreen] = useState<MarketplaceScreen>('landing');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');

  const handleProjectSelect = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentScreen('project');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <MarketplaceLanding onNavigate={setCurrentScreen} onProjectSelect={handleProjectSelect} />;
      case 'project':
        return <ProjectDetailsPage onNavigate={setCurrentScreen} projectId={selectedProjectId} />;
      case 'wallet':
        return <CorporateWallet onNavigate={setCurrentScreen} />;
      case 'reports':
        return <ReportsPage onNavigate={setCurrentScreen} />;
      default:
        return <MarketplaceLanding onNavigate={setCurrentScreen} onProjectSelect={handleProjectSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderScreen()}
    </div>
  );
}