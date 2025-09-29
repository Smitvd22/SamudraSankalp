import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowLeft, Shield, Settings, HelpCircle, LogOut, Wallet, Users, BarChart3, TrendingUp, Target } from 'lucide-react';

interface CommunityLeaderProfileProps {
  onNavigate: (screen: string) => void;
}

export function CommunityLeaderProfile({ onNavigate }: CommunityLeaderProfileProps) {
  const userStats = {
    credits: 45.2,
    teamSize: 12,
    projects: 4,
    activities: 67,
    totalManaged: 156.7,
    monthlyGrowth: 15.3
  };

  const teamMembers = [
    { name: 'Ramesh Kumar', role: 'Member', credits: 12.5, status: 'active' },
    { name: 'Priya Sharma', role: 'Member', credits: 8.3, status: 'active' },
    { name: 'Raj Patel', role: 'Member', credits: 15.2, status: 'active' },
    { name: 'Anita Singh', role: 'Member', credits: 6.7, status: 'inactive' }
  ];

  const projectOverview = [
    { name: 'Sundarbans Conservation', progress: 78, credits: 25.2, members: 8 },
    { name: 'Mangrove Restoration', progress: 65, credits: 18.5, members: 6 },
    { name: 'Coastal Afforestation', progress: 45, credits: 12.3, members: 4 }
  ];

  return (
    <div className="h-full bg-gray-50 relative">
      {/* Header */}
      <div className="bg-blue-600 px-6 py-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm" onClick={() => onNavigate('home')} className="text-white hover:bg-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-light">Leader Dashboard</h1>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-medium">Ramesh Kumar</h2>
              <Badge className="bg-blue-100 text-blue-800">
                Leader
              </Badge>
            </div>
            <p className="text-blue-100 text-sm">Managing {userStats.teamSize} community members</p>
            <div className="flex items-center gap-4 mt-2 text-sm">
              <span className="text-blue-200">{userStats.projects} active projects</span>
              <span className="text-blue-200">+{userStats.monthlyGrowth}% growth</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 pb-24">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white border border-gray-100">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-light text-blue-600">{userStats.totalManaged}</p>
              <p className="text-sm text-gray-600">Total Credits Managed</p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-gray-100">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-light text-blue-600">{userStats.teamSize}</p>
              <p className="text-sm text-gray-600">Team Members</p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-gray-100">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-light text-blue-600">{userStats.projects}</p>
              <p className="text-sm text-gray-600">Active Projects</p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-gray-100">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-light text-blue-600">{userStats.credits}</p>
              <p className="text-sm text-gray-600">Personal Credits</p>
            </CardContent>
          </Card>
        </div>

        {/* Project Overview */}
        <Card className="bg-white border border-gray-100">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projectOverview.map((project, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm text-black">{project.name}</h4>
                    <Badge variant="outline" className="text-blue-600 border-blue-300">
                      {project.members} members
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <span>{project.progress}% complete</span>
                    <span>{project.credits} BCT earned</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Management */}
        <Card className="bg-white border border-gray-100">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Team Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {teamMembers.slice(0, 4).map((member, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">{member.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-black">{member.name}</p>
                      <p className="text-xs text-gray-600">{member.credits} BCT earned</p>
                    </div>
                  </div>
                  <Badge variant={member.status === 'active' ? 'outline' : 'secondary'} className="text-xs">
                    {member.status}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full" onClick={() => onNavigate('team')}>
                View All Members
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Leadership Tools */}
        <Card className="bg-white border border-gray-100">
          <CardHeader>
            <CardTitle className="text-base">Leadership Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-3" onClick={() => onNavigate('wallet')}>
                <Wallet className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">Wallet Management</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-3">
                <TrendingUp className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">Analytics Dashboard</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-3">
                <Users className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">Team Management</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-3">
                <BarChart3 className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">Performance Reports</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card className="bg-white border border-gray-100">
          <CardHeader>
            <CardTitle className="text-base">Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-3">
                <Settings className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">App Preferences</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-3">
                <HelpCircle className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">Help Center</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="bg-white border border-gray-100">
          <CardContent className="p-0">
            <Button
              variant="ghost"
              className="w-full justify-start text-left h-auto py-4 text-red-600 hover:bg-red-50"
              onClick={() => onNavigate('onboarding')}
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span>Logout</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}