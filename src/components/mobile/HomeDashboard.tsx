import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Bell, MessageCircle, Home, Upload, Wallet, Trophy, FolderOpen, ArrowRight, Calendar, MapPin, Users, User } from 'lucide-react';

type UserRole = 'community-member' | 'community-leader' | 'community-agent';

interface HomeDashboardProps {
  onNavigate: (screen: string) => void;
  userRole: UserRole;
  initialTab?: string;
}

export function HomeDashboard({ onNavigate, userRole, initialTab = 'home' }: HomeDashboardProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  // Wallet balance - only for leaders and agents
  const walletBalance = {
    total: '89.5',
    pending: '12.3',
    available: '77.2'
  };

  // Projects data
  const projects = [
    {
      id: '1',
      name: 'Sundarbans East Conservation',
      status: 'active',
      progress: 78,
      credits: '45.2',
      location: 'West Bengal',
      deadline: '15 Mar 2025',
      members: 24
    },
    {
      id: '2', 
      name: 'Coastal Mangrove Restoration',
      status: 'active',
      progress: 65,
      credits: '32.8',
      location: 'Odisha',
      deadline: '28 Apr 2025',
      members: 18
    },
    {
      id: '3',
      name: 'Community Afforestation Project',
      status: 'planning',
      progress: 25,
      credits: '11.5',
      location: 'Tamil Nadu',
      deadline: '10 Jun 2025',
      members: 12
    }
  ];

  const recentActivities = [
    { action: 'Tree planting verified', location: 'Sundarbans East', time: '2 hours ago', status: 'approved' },
    { action: 'Monitoring data uploaded', location: 'Mangrove Site A2', time: '1 day ago', status: 'pending' },
    { action: 'Carbon credit issued', location: 'Community Project', time: '3 days ago', status: 'completed' }
  ];

  const getRoleDisplayName = () => {
    switch (userRole) {
      case 'community-member': return 'Community Member';
      case 'community-leader': return 'Community Leader';
      case 'community-agent': return 'Community Agent';
      default: return 'Community Member';
    }
  };

  const canAccessWallet = userRole === 'community-leader' || userRole === 'community-agent';

  // Community credit balance for all users
  const communityBalance = '156.7';

  const renderHomeTab = () => (
    <div className="space-y-6">
      {/* Community Credit Balance - For all users */}
      <Card className="bg-blue-600 text-white border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-blue-100 text-sm">Community Credit Balance</p>
              <h2 className="text-3xl font-light">{communityBalance}</h2>
              <p className="text-blue-200 text-sm">Blue Carbon Tokens</p>
            </div>
            <div className="text-right">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-xs text-blue-200">Collective</p>
                <p className="text-lg">BCT</p>
              </div>
            </div>
          </div>
          {canAccessWallet && (
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => onNavigate('wallet')}
            >
              View Wallet Details
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Personal Wallet Balance - Only for leaders and agents */}
      {canAccessWallet && (
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-600 text-sm">Personal Credit Balance</p>
                <h2 className="text-3xl font-light text-black">{walletBalance.total}</h2>
                <p className="text-gray-500 text-sm">Blue Carbon Tokens</p>
              </div>
              <div className="text-right">
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-blue-600">Available</p>
                  <p className="text-lg text-blue-600">{walletBalance.available}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <div>
        <h3 className="text-black text-lg mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            className="h-24 flex-col gap-3 bg-blue-50 border-blue-200 hover:bg-blue-100"
            onClick={() => onNavigate('upload')}
          >
            <Upload className="w-6 h-6 text-blue-600" />
            <span className="text-blue-800 text-sm">Upload Data</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-24 flex-col gap-3 bg-blue-50 border-blue-200 hover:bg-blue-100"
            onClick={() => setActiveTab('projects')}
          >
            <FolderOpen className="w-6 h-6 text-blue-600" />
            <span className="text-blue-800 text-sm">View Projects</span>
          </Button>
        </div>
      </div>

      {/* Recent Activities */}
      <div>
        <h3 className="text-black text-lg mb-4">Recent Activities</h3>
        <div className="space-y-3">
          {recentActivities.map((activity, index) => (
            <Card key={index} className="bg-white border border-gray-100 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-black text-sm font-medium">{activity.action}</p>
                    <p className="text-gray-600 text-xs">{activity.location}</p>
                    <p className="text-gray-400 text-xs">{activity.time}</p>
                  </div>
                  <Badge 
                    variant={activity.status === 'approved' ? 'default' : 
                            activity.status === 'pending' ? 'secondary' : 'outline'}
                    className="text-xs"
                  >
                    {activity.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjectsTab = () => (
    <div className="space-y-4">
      {/* Community Credit Balance - Displayed on projects tab too */}
      <Card className="bg-blue-600 text-white border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-xs">Community Credits</p>
              <h3 className="text-xl font-light">{communityBalance} BCT</h3>
            </div>
            <div className="bg-white/10 rounded-lg p-2">
              <p className="text-xs text-blue-200">Collective</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <h3 className="text-black text-lg">Active Projects</h3>
        <Badge variant="outline" className="text-blue-600 border-blue-300">
          {projects.filter(p => p.status === 'active').length} Active
        </Badge>
      </div>
      
      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.id} className="bg-white border border-gray-100 shadow-sm">
            <CardContent className="p-5">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-black font-medium">{project.name}</h4>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {project.members} members
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={project.status === 'active' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-black">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Credits Earned</p>
                      <p className="text-black font-medium">{project.credits} BCT</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar className="w-3 h-3" />
                      {project.deadline}
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-blue-600 border-blue-300 hover:bg-blue-50"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-full bg-gray-50 relative flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 px-6 py-6 text-white flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-xl font-light">Good morning! 👋</h1>
            <p className="text-blue-100 text-sm">{getRoleDisplayName()}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/10 p-2"
              onClick={() => onNavigate('profile')}
            >
              <User className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Tab Selector */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex-shrink-0">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab('home')}
            className={`pb-2 text-sm border-b-2 transition-colors ${
              activeTab === 'home' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`pb-2 text-sm border-b-2 transition-colors ${
              activeTab === 'projects' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Projects
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 pb-24">
        {activeTab === 'home' ? renderHomeTab() : renderProjectsTab()}
      </div>

      {/* Floating Chatbot Button */}
      <div className="absolute bottom-24 right-4">
        <Button size="lg" className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg border-0">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex items-center justify-around py-2">
          {[
            { icon: Home, label: 'Home', screen: 'home', active: activeTab === 'home' },
            { icon: FolderOpen, label: 'Projects', screen: 'projects', active: activeTab === 'projects' },
            { icon: Upload, label: 'Upload', screen: 'upload' },
            ...(canAccessWallet ? [{ icon: Wallet, label: 'Wallet', screen: 'wallet' }] : []),
            { icon: Trophy, label: 'Leaderboard', screen: 'leaderboard' }
          ].map(({ icon: Icon, label, screen, active }) => (
            <Button
              key={screen}
              variant="ghost"
              size="sm"
              className={`flex-col gap-1 h-16 px-2 ${
                active ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => {
                if (screen === 'home' || screen === 'projects') {
                  setActiveTab(screen);
                } else {
                  onNavigate(screen);
                }
              }}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}