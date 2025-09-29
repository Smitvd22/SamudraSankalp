import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowLeft, Award, Settings, HelpCircle, LogOut, Upload, BarChart3, MapPin, Building, Database, Users } from 'lucide-react';

interface CommunityAgentProfileProps {
  onNavigate: (screen: string) => void;
}

export function CommunityAgentProfile({ onNavigate }: CommunityAgentProfileProps) {
  const userStats = {
    communities: 5,
    credits: 89.7,
    projects: 8,
    activities: 156,
    dataUploads: 342,
    monthlyCollections: 28
  };

  const communityOverview = [
    { name: 'Sundarbans West', members: 24, credits: 45.2, status: 'active' },
    { name: 'Coastal Bengal', members: 18, credits: 32.1, status: 'active' },
    { name: 'Mangrove Delta', members: 15, credits: 28.4, status: 'active' },
    { name: 'Tamil Coast', members: 12, credits: 19.7, status: 'planning' },
    { name: 'Odisha Marine', members: 8, credits: 14.3, status: 'planning' }
  ];

  const recentUploads = [
    { type: 'Bulk CSV', communities: 3, records: 156, date: '2 hours ago' },
    { type: 'Photo Collection', communities: 2, records: 48, date: '1 day ago' },
    { type: 'Survey Data', communities: 1, records: 24, date: '2 days ago' }
  ];

  const agentTools = [
    { name: 'Bulk Data Upload', description: 'Upload CSV/Excel files', icon: Upload },
    { name: 'Community Analytics', description: 'Cross-community insights', icon: BarChart3 },
    { name: 'Field Survey Tools', description: 'Data collection templates', icon: Database },
    { name: 'Geographic Mapping', description: 'Location-based analysis', icon: MapPin }
  ];

  return (
    <div className="h-full bg-gray-50 relative">
      {/* Header */}
      <div className="bg-blue-600 px-6 py-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="sm" onClick={() => onNavigate('home')} className="text-white hover:bg-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-light">Agent Dashboard</h1>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
            <Award className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-medium">Ramesh Kumar</h2>
              <Badge className="bg-purple-100 text-purple-800">
                Agent
              </Badge>
            </div>
            <p className="text-blue-100 text-sm">Managing {userStats.communities} communities across regions</p>
            <div className="flex items-center gap-4 mt-2 text-sm">
              <span className="text-blue-200">{userStats.dataUploads} uploads</span>
              <span className="text-blue-200">{userStats.monthlyCollections} collections this month</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 pb-24">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-white border border-gray-100">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-light text-blue-600">{userStats.communities}</p>
              <p className="text-sm text-gray-600">Communities</p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-gray-100">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-light text-blue-600">{userStats.credits}</p>
              <p className="text-sm text-gray-600">Total Credits</p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-gray-100">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-light text-blue-600">{userStats.dataUploads}</p>
              <p className="text-sm text-gray-600">Data Uploads</p>
            </CardContent>
          </Card>
        </div>

        {/* Agent Tools */}
        <Card className="bg-white border border-gray-100">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-600" />
              Agent Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {agentTools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-20 flex-col gap-2 border-blue-200 hover:bg-blue-50"
                    onClick={() => tool.name === 'Bulk Data Upload' ? onNavigate('upload') : undefined}
                  >
                    <IconComponent className="w-5 h-5 text-blue-600" />
                    <div className="text-center">
                      <p className="text-xs font-medium text-black">{tool.name}</p>
                      <p className="text-xs text-gray-600">{tool.description}</p>
                    </div>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Community Overview */}
        <Card className="bg-white border border-gray-100">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Building className="w-5 h-5 text-blue-600" />
              Communities Managed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {communityOverview.map((community, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm text-black">{community.name}</h4>
                    <Badge variant={community.status === 'active' ? 'outline' : 'secondary'} className="text-xs">
                      {community.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {community.members} members
                      </span>
                    </div>
                    <span className="font-medium text-blue-600">{community.credits} BCT</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Uploads */}
        <Card className="bg-white border border-gray-100">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Upload className="w-5 h-5 text-blue-600" />
              Recent Data Uploads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentUploads.map((upload, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex-1">
                    <p className="font-medium text-sm text-black">{upload.type}</p>
                    <p className="text-xs text-gray-600">
                      {upload.communities} communities • {upload.records} records
                    </p>
                    <p className="text-xs text-gray-500">{upload.date}</p>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">
                    Synced
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Advanced Features */}
        <Card className="bg-white border border-gray-100">
          <CardHeader>
            <CardTitle className="text-base">Advanced Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-3">
                <BarChart3 className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">Cross-Community Analytics</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-3">
                <MapPin className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">Geographic Insights</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-3">
                <Database className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">Data Export Tools</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-3">
                <Settings className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">Agent Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="bg-white border border-gray-100">
          <CardHeader>
            <CardTitle className="text-base">Support</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start text-left h-auto py-3">
                <HelpCircle className="w-5 h-5 mr-3 text-gray-600" />
                <span className="text-gray-700">Agent Help Center</span>
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