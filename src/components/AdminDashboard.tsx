import React, { useState } from 'react';
import { AdminLogin } from './admin/AdminLogin';
import { MainDashboard } from './admin/MainDashboard';
import { ProjectManagement } from './admin/ProjectManagement';
import { VerificationPortal } from './admin/VerificationPortal';
import { CreditIssuanceWorkflow } from './admin/CreditIssuanceWorkflow';
import { NationalDashboard } from './government/NationalDashboard';

type AdminScreen = 'login' | 'dashboard' | 'projects' | 'verification' | 'issuance' | 'overall-impact';

export function AdminDashboard() {
  const [currentScreen, setCurrentScreen] = useState<AdminScreen>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string>('');

  const handleLogin = (role: string) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentScreen('dashboard');
  };

  const renderScreen = () => {
    if (!isLoggedIn) {
      return <AdminLogin onLogin={handleLogin} />;
    }

    switch (currentScreen) {
      case 'dashboard':
        return <MainDashboard onNavigate={setCurrentScreen} userRole={userRole} />;
      case 'projects':
        return <ProjectManagement onNavigate={setCurrentScreen} />;
      case 'verification':
        return <VerificationPortal onNavigate={setCurrentScreen} />;
      case 'issuance':
        return <CreditIssuanceWorkflow onNavigate={setCurrentScreen} />;
      case 'overall-impact':
        return <NationalDashboard onNavigate={setCurrentScreen} />;
      default:
        return <MainDashboard onNavigate={setCurrentScreen} userRole={userRole} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderScreen()}
    </div>
  );
}