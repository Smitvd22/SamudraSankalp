import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowLeft, User, Settings, HelpCircle, LogOut, BarChart3, Trophy, Target } from 'lucide-react';

interface CommunityMemberProfileProps {
  onNavigate: (screen: string) => void;
}

export function CommunityMemberProfile({ onNavigate }: CommunityMemberProfileProps) {
  const userStats = {
    activities: 23,
    credits: 12.5,
    projects: 2,
    rank: 15,
    streak: 7,
    badges: 3
  };

  const achievements = [
    { name: 'Tree Planter', description: 'Planted 50+ trees', earned: true },
    { name: 'Data Collector', description: 'Uploaded 100+ data points', earned: true },
    { name: 'Community Helper', description: 'Active for 30 days', earned: true },
    { name: 'Conservation Hero', description: 'Top 10 contributor', earned: false }
  ];

  const recentActivities = [
    { action: 'Uploaded mangrove photos', credits: 2.5, date: '2 hours ago' },
    { action: 'Completed tree monitoring', credits: 1.8, date: '1 day ago' },
    { action: 'Participated in cleanup', credits: 3.2, date: '3 days ago' }
  ];

  return (
    <div className="h-full bg-gray-50 relative">
      {/* Header */}
      <div className="bg-blue-600 px-6 py-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm" onClick={() => onNavigate('home')} className="text-white hover:bg-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-light">My Profile</h1>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-medium">Ramesh Kumar</h2>
              <Badge className="bg-green-100 text-green-800">
                Member
              </Badge>
            </div>
            <p className="text-blue-100 text-sm">Active contributor to blue carbon projects</p>
            <div className="flex items-center gap-4 mt-2 text-sm">
              <span className="text-blue-200">{userStats.streak} day streak</span>
              <span className="text-blue-200">#{userStats.rank} rank</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 pb-24">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-white border border-gray-100">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-light text-blue-600">{userStats.activities}</p>
              <p className="text-sm text-gray-600">Activities</p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-gray-100">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-light text-blue-600">{userStats.credits}</p>
              <p className="text-sm text-gray-600">Credits</p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-gray-100">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-light text-blue-600">{userStats.badges}</p>
              <p className="text-sm text-gray-600">Badges</p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="bg-white border border-gray-100">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Trophy className="w-5 h-5 text-blue-600" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500'
                  }`}>
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-black">{achievement.name}</p>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                  {achievement.earned && (
                    <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">
                      Earned
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="bg-white border border-gray-100">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-blue-600">+{activity.credits}</p>
                    <p className="text-xs text-gray-600">BCT</p>
                  </div>
                </div>
              ))}
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
                <User className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">Personal Information</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-3">
                <Settings className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">App Preferences</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-3">
                <BarChart3 className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">Activity Reports</span>
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