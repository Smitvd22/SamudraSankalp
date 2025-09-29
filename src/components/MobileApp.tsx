import React, { useState } from 'react';
import { OnboardingScreen } from './mobile/OnboardingScreen';
import { HomeDashboard } from './mobile/HomeDashboard';
import { UploadDataScreen } from './mobile/UploadDataScreen';
import { WalletScreen } from './mobile/WalletScreen';
import { LeaderboardScreen } from './mobile/LeaderboardScreen';
import { CommunityMemberProfile } from './mobile/CommunityMemberProfile';
import { CommunityLeaderProfile } from './mobile/CommunityLeaderProfile';
import { CommunityAgentProfile } from './mobile/CommunityAgentProfile';

type MobileScreen = 'onboarding' | 'home' | 'upload' | 'wallet' | 'leaderboard' | 'projects' | 'profile';
type UserRole = 'community-member' | 'community-leader' | 'community-agent';

export function MobileApp() {
  const [currentScreen, setCurrentScreen] = useState<MobileScreen>('onboarding');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>('community-member');

  const handleLogin = (role: UserRole) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentScreen('home');
  };

  const renderScreen = () => {
    if (!isLoggedIn && currentScreen === 'onboarding') {
      return <OnboardingScreen onLogin={handleLogin} />;
    }

    switch (currentScreen) {
      case 'home':
        return <HomeDashboard onNavigate={setCurrentScreen} userRole={userRole} />;
      case 'upload':
        return <UploadDataScreen onNavigate={setCurrentScreen} userRole={userRole} />;
      case 'wallet':
        return <WalletScreen onNavigate={setCurrentScreen} userRole={userRole} />;
      case 'leaderboard':
        return <LeaderboardScreen onNavigate={setCurrentScreen} />;
      case 'projects':
        return <HomeDashboard onNavigate={setCurrentScreen} userRole={userRole} initialTab="projects" />;
      case 'profile':
        switch (userRole) {
          case 'community-member':
            return <CommunityMemberProfile onNavigate={setCurrentScreen} />;
          case 'community-leader':
            return <CommunityLeaderProfile onNavigate={setCurrentScreen} />;
          case 'community-agent':
            return <CommunityAgentProfile onNavigate={setCurrentScreen} />;
          default:
            return <CommunityMemberProfile onNavigate={setCurrentScreen} />;
        }
      case 'onboarding':
        setIsLoggedIn(false);
        return <OnboardingScreen onLogin={handleLogin} />;
      default:
        return <HomeDashboard onNavigate={setCurrentScreen} userRole={userRole} />;
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-card shadow-2xl rounded-3xl overflow-hidden h-[800px] relative">
      {renderScreen()}
    </div>
  );
}