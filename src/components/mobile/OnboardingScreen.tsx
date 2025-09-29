import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useTheme } from '../ThemeProvider';
import { Globe, Shield, UserCheck, Sun, Moon } from 'lucide-react';

type UserRole = 'community-member' | 'community-leader' | 'community-agent';

interface OnboardingScreenProps {
  onLogin: (role: UserRole) => void;
}

export function OnboardingScreen({ onLogin }: OnboardingScreenProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { theme, toggleTheme } = useTheme();

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'हिंदी' },
    { value: 'bn', label: 'বাংলা' },
    { value: 'ta', label: 'தமிழ்' },
    { value: 'te', label: 'తెలుగు' },
    { value: 'mr', label: 'मराठी' }
  ];

  const welcomeMessages = {
    en: {
      welcome: "Welcome to Samudra Sathi",
      subtitle: "Your Blue Carbon Community Partner",
      description: "Join coastal communities in protecting mangroves and earning carbon credits together."
    },
    hi: {
      welcome: "समुद्र साथी में आपका स्वागत है",
      subtitle: "आपका नीला कार्बन समुदाय साथी",
      description: "मैंग्रोव्स की सुरक्षा और कार्बन क्रेडिट अर्जित करने में तटीय समुदायों से जुड़ें।"
    }
  };

  const currentMessage = welcomeMessages[selectedLanguage as keyof typeof welcomeMessages] || welcomeMessages.en;

  return (
    <div className="h-full bg-background relative overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-6 left-6 z-10">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="border-border bg-card/95 backdrop-blur-sm"
        >
          {theme === 'light' ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-10">
        <div className="bg-card border border-border rounded-lg shadow-lg">
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-40 border-0 bg-transparent">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-foreground">
                  {languages.find(lang => lang.value === selectedLanguage)?.label}
                </span>
              </div>
            </SelectTrigger>
            <SelectContent className="w-40">
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value} className="py-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">{lang.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="h-full flex flex-col items-center justify-center px-8">
        {/* Minimalistic Logo */}
        <div className="mb-12">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-sm">
            <span className="text-white text-2xl">🌊</span>
          </div>
        </div>

        {/* Welcome Content */}
        <div className="text-center mb-12 max-w-md">
          <h1 className="text-4xl mb-3 font-light text-foreground">{currentMessage.welcome}</h1>
          <p className="text-blue-600 mb-6 text-lg">{currentMessage.subtitle}</p>
          <p className="text-muted-foreground leading-relaxed">
            {currentMessage.description}
          </p>
        </div>

        {/* Login Buttons */}
        <div className="w-full max-w-sm space-y-4">
          <Button 
            onClick={() => onLogin('community-member')}
            className="w-full bg-blue-600 text-white hover:bg-blue-700 py-6 rounded-xl shadow-sm"
          >
            <Shield className="w-5 h-5 mr-2" />
            Community Member
          </Button>
          
          <Button 
            onClick={() => onLogin('community-leader')}
            variant="outline"
            className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-6 rounded-xl"
          >
            <UserCheck className="w-5 h-5 mr-2" />
            Community Leader
          </Button>

          <Button 
            onClick={() => onLogin('community-agent')}
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-6 rounded-xl"
          >
            <UserCheck className="w-5 h-5 mr-2" />
            Community Agent
          </Button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-center text-muted-foreground text-xs">
          <p>Powered by Blockchain Technology</p>
          <p className="mt-1">🔒 Secure • 🌱 Sustainable • 🤝 Community-driven</p>
        </div>
      </div>
    </div>
  );
}