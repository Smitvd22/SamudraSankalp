import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Shield, Lock, Users, FileCheck, Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

interface AdminLoginProps {
  onLogin: (role: string) => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { theme, toggleTheme } = useTheme();

  const roles = [
    { value: 'admin', label: 'System Administrator', icon: Shield },
    { value: 'auditor', label: 'Carbon Credit Auditor', icon: FileCheck },
    { value: 'ngo', label: 'NGO Supervisor', icon: Users }
  ];

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'हिंदी' },
    { value: 'bn', label: 'বাংলা' },
    { value: 'ta', label: 'தமிழ்' },
    { value: 'te', label: 'తెలుగు' },
    { value: 'mr', label: 'मराठी' }
  ];

  const handleLogin = () => {
    if (selectedRole) {
      onLogin(selectedRole);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-60 right-32 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl mb-8">
            <span className="text-blue-600 text-3xl">🌊</span>
          </div>
          <h1 className="text-5xl mb-4 font-light">Samudra Sankalp</h1>
          <p className="text-xl text-blue-100 mb-8 text-center">Admin Dashboard</p>
          <p className="text-blue-100 text-center leading-relaxed max-w-md">
            Comprehensive platform for managing blue carbon projects, verification workflows, and carbon credit issuance
          </p>
          
          {/* Features */}
          <div className="mt-12 space-y-4 text-blue-100">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5" />
              <span>Secure project verification</span>
            </div>
            <div className="flex items-center gap-3">
              <FileCheck className="w-5 h-5" />
              <span>Automated compliance tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              <span>Community impact management</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Top Controls */}
        <div className="absolute top-6 right-6 flex items-center gap-4">
          {/* Theme Toggle */}
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

          {/* Language Selector */}
          <div className="bg-card border border-border rounded-lg shadow-sm">
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-36 border-0 bg-transparent">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-foreground">
                    {languages.find(lang => lang.value === selectedLanguage)?.label}
                  </span>
                </div>
              </SelectTrigger>
              <SelectContent className="w-36">
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    <span className="text-sm font-medium">{lang.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Mobile Logo */}
        <div className="lg:hidden text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-sm mx-auto mb-4">
            <span className="text-white text-xl">🌊</span>
          </div>
          <h1 className="text-3xl text-foreground">Samudra Sankalp</h1>
          <p className="text-blue-600">Admin Dashboard</p>
        </div>

        <div className="w-full max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl text-foreground mb-2">Welcome Back</h2>
            <p className="text-muted-foreground">Sign in to access your admin dashboard</p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            {/* Role Selection */}
            <div className="space-y-2">
              <Label htmlFor="role" className="text-foreground">Select Role</Label>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="bg-card border-border h-12">
                  <SelectValue placeholder="Choose your role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      <div className="flex items-center gap-2 py-1">
                        <role.icon className="w-4 h-4 text-blue-600" />
                        <span>{role.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card border-border h-12"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-card border-border h-12"
              />
            </div>

            {/* Login Buttons */}
            <div className="space-y-3 pt-4">
              <Button 
                onClick={handleLogin}
                className="w-full bg-blue-600 text-white hover:bg-blue-700 h-12"
                disabled={!selectedRole}
              >
                <Shield className="w-5 h-5 mr-2" />
                Access Dashboard
              </Button>
              
              <Button 
                onClick={handleLogin}
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 h-12"
                disabled={!selectedRole}
              >
                <Lock className="w-5 h-5 mr-2" />
                Login with Digital ID
              </Button>
            </div>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-muted-foreground">
                  <p className="mb-1 font-medium">Secure Access Protocol</p>
                  <p>All activities are logged and monitored for compliance with carbon credit verification standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-muted-foreground text-sm">
          <p>🔒 SSL Encrypted • 🛡️ Multi-Factor Authentication</p>
          <p className="mt-1">Powered by Blockchain Technology</p>
        </div>
      </div>
    </div>
  );
}