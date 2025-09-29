import React, { useState } from 'react';
import { MobileApp } from './components/MobileApp';
import { AdminDashboard } from './components/AdminDashboard';
import { Marketplace } from './components/Marketplace';
import { GovernmentPortal } from './components/GovernmentPortal';
import { ThemeProvider } from './components/ThemeProvider';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';

type Platform = 'mobile' | 'admin' | 'marketplace' | 'government';

export default function App() {
  const [currentPlatform, setCurrentPlatform] = useState<Platform>('mobile');

  const platforms = [
    { id: 'mobile', name: '📱 Mobile App', shortName: 'Mobile', description: 'Community blue carbon app' },
    { id: 'admin', name: '🖥 Admin Dashboard', shortName: 'Admin', description: 'Samudra Sankalp admin portal' },
    { id: 'marketplace', name: '🌍 Marketplace', shortName: 'Market', description: 'Corporate buyer portal' },
    { id: 'government', name: '📊 Government Portal', shortName: 'Gov', description: 'National monitoring dashboard' }
  ];

  const renderCurrentPlatform = () => {
    switch (currentPlatform) {
      case 'mobile':
        return <MobileApp />;
      case 'admin':
        return <AdminDashboard />;
      case 'marketplace':
        return <Marketplace />;
      case 'government':
        return <GovernmentPortal />;
      default:
        return <MobileApp />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        {/* Platform Selector */}
        <div className="fixed top-4 left-4 z-50">
          <Card className="p-2 bg-card/95 backdrop-blur-sm border border-border shadow-lg">
            <div className="flex flex-wrap gap-1">
              {platforms.map((platform) => (
                <Button
                  key={platform.id}
                  variant={currentPlatform === platform.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentPlatform(platform.id as Platform)}
                  className={`text-xs px-2 py-1 h-8 ${
                    currentPlatform === platform.id 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'hover:bg-muted text-foreground'
                  }`}
                  title={`${platform.name} - ${platform.description}`}
                >
                  <span className="hidden sm:inline">{platform.name}</span>
                  <span className="sm:hidden">{platform.shortName}</span>
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Current Platform Content */}
        <div className={currentPlatform === 'mobile' ? 'pt-8 pb-8' : 'pt-20'}>
          {renderCurrentPlatform()}
        </div>
      </div>
    </ThemeProvider>
  );
}