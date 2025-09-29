import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { 
  Trees, Award, MapPin, TrendingUp, Users, FileCheck, 
  Activity, Clock, User, LogOut,
  LayoutDashboard, FolderOpen, CheckCircle, CreditCard, BarChart3, FileText
} from 'lucide-react';

interface MainDashboardProps {
  onNavigate: (screen: string) => void;
  userRole: string;
}

export function MainDashboard({ onNavigate, userRole }: MainDashboardProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const kpis = [
    { label: 'Total CO₂ Sequestered', value: '12,847', unit: 'tons', icon: Trees, color: 'text-green-600', change: '+8.2%' },
    { label: 'Active Projects', value: '156', unit: 'projects', icon: FolderOpen, color: 'text-blue-600', change: '+12' },
    { label: 'Credits Issued', value: '89,432', unit: 'BCT', icon: Award, color: 'text-purple-600', change: '+1,247' },
    { label: 'Communities Engaged', value: '2,341', unit: 'members', icon: Users, color: 'text-orange-600', change: '+89' }
  ];

  const monthlyData = [
    { month: 'Jan', credits: 4800, projects: 12 },
    { month: 'Feb', credits: 5200, projects: 15 },
    { month: 'Mar', credits: 4900, projects: 18 },
    { month: 'Apr', credits: 6100, projects: 22 },
    { month: 'May', credits: 7300, projects: 28 },
    { month: 'Jun', credits: 8900, projects: 34 }
  ];

  const projectTypes = [
    { name: 'Mangrove Restoration', value: 45, color: '#10B981' },
    { name: 'Coastal Afforestation', value: 32, color: '#3B82F6' },
    { name: 'Seagrass Conservation', value: 23, color: '#8B5CF6' }
  ];

  const recentActivities = [
    { 
      type: 'verification', 
      description: 'Project #127 verified by Auditor Sarah M.', 
      location: 'Sundarbans East',
      time: '2 hours ago',
      status: 'completed'
    },
    { 
      type: 'upload', 
      description: 'New monitoring data uploaded', 
      location: 'Mangrove Site A2',
      time: '4 hours ago',
      status: 'pending'
    },
    { 
      type: 'credit', 
      description: '1,250 BCT credits issued', 
      location: 'Community Collective',
      time: '6 hours ago',
      status: 'completed'
    },
    { 
      type: 'project', 
      description: 'New project application received', 
      location: 'Coastal Village B3',
      time: '1 day ago',
      status: 'review'
    }
  ];

  const projectLocations = [
    { name: 'Sundarbans East', coords: [22.5, 89.5], status: 'active', credits: 12500 },
    { name: 'Kerala Backwaters', coords: [9.5, 76.5], status: 'active', credits: 8900 },
    { name: 'Gujarat Coastal', coords: [22.0, 70.0], status: 'pending', credits: 5600 },
    { name: 'Odisha Deltaic', coords: [20.0, 86.0], status: 'active', credits: 15600 },
    { name: 'Tamil Nadu Coast', coords: [11.0, 79.5], status: 'active', credits: 9800 }
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, active: true },
    { id: 'projects', label: 'Project Management', icon: FolderOpen },
    { id: 'verification', label: 'Verification', icon: CheckCircle },
    { id: 'issuance', label: 'Credit Issuance', icon: CreditCard },
    { id: 'overall-impact', label: 'Overall Impact', icon: BarChart3 },
    { id: 'audit', label: 'Audit Trail', icon: FileText }
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-card shadow-sm border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white">🌊</span>
            </div>
            <div>
              <h2 className="text-lg text-foreground">Samudra Sankalp</h2>
              <p className="text-sm text-muted-foreground capitalize">{userRole} Portal</p>
            </div>
          </div>
        </div>
        
        <nav className="p-4 flex-1">
          {sidebarItems.map((item) => (
            <Button
              key={item.id}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start mb-2 ${item.active ? 'bg-blue-600' : ''}`}
              onClick={() => {
                if (item.id === 'projects') onNavigate('projects');
                if (item.id === 'verification') onNavigate('verification');
                if (item.id === 'issuance') onNavigate('issuance');
                if (item.id === 'overall-impact') onNavigate('overall-impact');
              }}
            >
              <item.icon className="w-4 h-4 mr-3" />
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Profile Section */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-foreground">Admin User</p>
              <p className="text-xs text-muted-foreground">{userRole}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full text-red-600 hover:bg-red-50">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-card shadow-sm border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-foreground">Carbon Credit Dashboard</h1>
              <p className="text-muted-foreground">Real-time monitoring and management</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <div className="text-sm">
                  <div>{currentTime.toLocaleDateString('en-IN', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</div>
                  <div className="text-xs">{currentTime.toLocaleTimeString('en-IN')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                    <Badge variant="outline" className="text-green-600 text-xs">
                      {kpi.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-xl text-gray-900 mb-1">{kpi.value}</p>
                    <p className="text-xs text-gray-600">{kpi.label}</p>
                    <p className="text-xs text-gray-500">{kpi.unit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Credits Trend Chart */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  Monthly Credits Issued
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" fontSize={12} />
                    <YAxis fontSize={12} />
                    <Tooltip />
                    <Line type="monotone" dataKey="credits" stroke="#3B82F6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Project Types Distribution */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                  Project Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie
                      data={projectTypes}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${value}%`}
                    >
                      {projectTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Full Width India Map */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <MapPin className="w-4 h-4 text-orange-600" />
                Blue Carbon Project Locations - India
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1717700299773-1accc14b67f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMG1hcCUyMGNvYXN0YWwlMjBhcmVhc3xlbnwxfHx8fDE3NTkwODYwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="India coastal blue carbon projects map"
                  className="w-full h-96 object-cover rounded-lg"
                />
                
                {/* Coastal project markers positioned along Indian coast */}
                <div className="absolute inset-0">
                  {/* West Bengal - Sundarbans */}
                  <div className="absolute top-20 right-16 bg-green-600 text-white rounded-lg p-2 text-xs shadow-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white">Sundarbans East</span>
                    </div>
                    <p className="text-green-100">12,500 BCT</p>
                    <Badge variant="secondary" className="bg-white/20 text-white text-xs mt-1">Active</Badge>
                  </div>

                  {/* Gujarat Coast */}
                  <div className="absolute top-32 left-20 bg-blue-600 text-white rounded-lg p-2 text-xs shadow-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white">Gujarat Coastal</span>
                    </div>
                    <p className="text-blue-100">5,600 BCT</p>
                    <Badge variant="secondary" className="bg-white/20 text-white text-xs mt-1">Pending</Badge>
                  </div>

                  {/* Kerala Backwaters */}
                  <div className="absolute bottom-32 left-24 bg-green-600 text-white rounded-lg p-2 text-xs shadow-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white">Kerala Backwaters</span>
                    </div>
                    <p className="text-green-100">8,900 BCT</p>
                    <Badge variant="secondary" className="bg-white/20 text-white text-xs mt-1">Active</Badge>
                  </div>

                  {/* Tamil Nadu Coast */}
                  <div className="absolute bottom-24 right-32 bg-green-600 text-white rounded-lg p-2 text-xs shadow-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white">Tamil Nadu Coast</span>
                    </div>
                    <p className="text-green-100">9,800 BCT</p>
                    <Badge variant="secondary" className="bg-white/20 text-white text-xs mt-1">Active</Badge>
                  </div>

                  {/* Odisha Deltaic */}
                  <div className="absolute top-24 right-24 bg-green-600 text-white rounded-lg p-2 text-xs shadow-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white">Odisha Deltaic</span>
                    </div>
                    <p className="text-green-100">15,600 BCT</p>
                    <Badge variant="secondary" className="bg-white/20 text-white text-xs mt-1">Active</Badge>
                  </div>
                </div>
              </div>

              {/* Map Legend */}
              <div className="flex items-center justify-center gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span>Active Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span>Pending Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span>Under Review</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities - Improved */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Activity className="w-4 h-4 text-purple-600" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          activity.status === 'completed' ? 'bg-green-500' : 
                          activity.status === 'pending' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900 mb-1">{activity.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-600">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {activity.location}
                            </span>
                            <span>{activity.time}</span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant="outline"
                        className={`text-xs ${
                          activity.status === 'completed' ? 'text-green-600 border-green-300' :
                          activity.status === 'pending' ? 'text-yellow-600 border-yellow-300' :
                          'text-blue-600 border-blue-300'
                        }`}
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>


        </div>
      </div>
    </div>
  );
}