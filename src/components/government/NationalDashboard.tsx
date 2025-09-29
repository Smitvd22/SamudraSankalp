import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  MapPin, Trees, Users, TrendingUp, Filter, Download,
  BarChart3, Activity, Award, Building, Eye, 
  IndianRupee, Globe, Shield, FileText
} from 'lucide-react';

interface NationalDashboardProps {
  onNavigate: (screen: string) => void;
}

export function NationalDashboard({ onNavigate }: NationalDashboardProps) {
  const [selectedState, setSelectedState] = useState('all-states');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedEcosystem, setSelectedEcosystem] = useState('all-ecosystems');

  const nationalStats = {
    mangrovesPlanted: 1247000,
    co2Sequestered: 312500, // tons
    activeCommunities: 2341,
    totalProjects: 156,
    coastlineProtected: 2847, // km
    economicImpact: 45600000, // INR in crores
    employmentGenerated: 8940,
    womenParticipation: 67 // percentage
  };

  const stateData = [
    {
      state: 'West Bengal',
      projects: 34,
      communities: 456,
      mangrovesPlanted: 234000,
      co2Sequestered: 58500,
      coastline: 158,
      status: 'Leading',
      fundingUtilized: 89,
      coordinates: [22.5, 88.5]
    },
    {
      state: 'Gujarat',
      projects: 28,
      communities: 387,
      mangrovesPlanted: 189000,
      co2Sequestered: 47250,
      coastline: 1600,
      status: 'Active',
      fundingUtilized: 76,
      coordinates: [22.5, 71.5]
    },
    {
      state: 'Kerala',
      projects: 22,
      communities: 298,
      mangrovesPlanted: 156000,
      co2Sequestered: 39000,
      coastline: 580,
      status: 'Active',
      fundingUtilized: 82,
      coordinates: [10.5, 76.0]
    },
    {
      state: 'Tamil Nadu',
      projects: 26,
      communities: 334,
      mangrovesPlanted: 167000,
      co2Sequestered: 41750,
      coastline: 1076,
      status: 'Active',
      fundingUtilized: 78,
      coordinates: [11.0, 78.5]
    },
    {
      state: 'Odisha',
      projects: 18,
      communities: 245,
      mangrovesPlanted: 134000,
      co2Sequestered: 33500,
      coastline: 485,
      status: 'Developing',
      fundingUtilized: 65,
      coordinates: [20.0, 85.5]
    },
    {
      state: 'Maharashtra',
      projects: 12,
      communities: 178,
      mangrovesPlanted: 89000,
      co2Sequestered: 22250,
      coastline: 720,
      status: 'Developing',
      fundingUtilized: 71,
      coordinates: [19.0, 73.0]
    },
    {
      state: 'Karnataka',
      projects: 8,
      communities: 123,
      mangrovesPlanted: 67000,
      co2Sequestered: 16750,
      coastline: 300,
      status: 'Developing',
      fundingUtilized: 58,
      coordinates: [15.0, 75.0]
    },
    {
      state: 'Andhra Pradesh',
      projects: 8,
      communities: 134,
      mangrovesPlanted: 78000,
      co2Sequestered: 19500,
      coastline: 974,
      status: 'Developing',
      fundingUtilized: 63,
      coordinates: [15.5, 80.0]
    }
  ];

  const ecosystemTypes = ['All Ecosystems', 'Mangrove Forests', 'Coastal Wetlands', 'Salt Marshes', 'Seagrass Beds', 'Coral Reefs'];
  const years = ['2024', '2023', '2022', '2021'];

  const recentActivities = [
    {
      type: 'project',
      description: 'New mangrove restoration project approved in Sundarbans',
      state: 'West Bengal',
      time: '2 hours ago',
      amount: '₹2.4 Cr funding'
    },
    {
      type: 'verification',
      description: 'Carbon credit verification completed for 12 projects',
      state: 'Multiple States',
      time: '4 hours ago',
      amount: '15,600 BCT credits'
    },
    {
      type: 'community',
      description: '89 new community members onboarded',
      state: 'Kerala',
      time: '6 hours ago',
      amount: '3 new villages'
    },
    {
      type: 'policy',
      description: 'Blue Carbon Policy Framework updated',
      state: 'National',
      time: '1 day ago',
      amount: 'Policy v2.1'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Leading': return 'bg-green-600';
      case 'Active': return 'bg-blue-600';
      case 'Developing': return 'bg-orange-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-foreground mb-1">Overall Impact Dashboard</h1>
              <p className="text-muted-foreground">National Blue Carbon Monitoring Portal</p>
              <p className="text-sm text-muted-foreground">Ministry of Environment, Forest and Climate Change - Government of India</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-xs text-muted-foreground">Official Portal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All States" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-states">All States</SelectItem>
                  {stateData.map((state) => (
                    <SelectItem key={state.state} value={state.state}>
                      {state.state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedEcosystem} onValueChange={setSelectedEcosystem}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Ecosystems" />
                </SelectTrigger>
                <SelectContent>
                  {ecosystemTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* National KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Trees className="w-8 h-8 text-green-600" />
                <Badge variant="outline" className="text-green-600 border-green-300">
                  Total
                </Badge>
              </div>
              <p className="text-3xl text-foreground mb-1">{(nationalStats.mangrovesPlanted / 1000000).toFixed(2)}M</p>
              <p className="text-sm text-muted-foreground">Mangroves Planted</p>
              <p className="text-xs text-muted-foreground mt-2">Across {nationalStats.totalProjects} projects</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <Badge variant="outline" className="text-blue-600 border-blue-300">
                  Impact
                </Badge>
              </div>
              <p className="text-3xl text-foreground mb-1">{(nationalStats.co2Sequestered / 1000).toFixed(1)}K</p>
              <p className="text-sm text-muted-foreground">Tons CO₂ Sequestered</p>
              <p className="text-xs text-muted-foreground mt-2">Annual sequestration capacity</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-purple-600" />
                <Badge variant="outline" className="text-purple-600 border-purple-300">
                  Active
                </Badge>
              </div>
              <p className="text-3xl text-foreground mb-1">{(nationalStats.activeCommunities / 1000).toFixed(1)}K</p>
              <p className="text-sm text-muted-foreground">Active Communities</p>
              <p className="text-xs text-muted-foreground mt-2">{nationalStats.womenParticipation}% women participation</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <IndianRupee className="w-8 h-8 text-orange-600" />
                <Badge variant="outline" className="text-orange-600 border-orange-300">
                  Economic
                </Badge>
              </div>
              <p className="text-3xl text-foreground mb-1">₹{(nationalStats.economicImpact / 10000000).toFixed(0)}K Cr</p>
              <p className="text-sm text-muted-foreground">Economic Impact</p>
              <p className="text-xs text-muted-foreground mt-2">{nationalStats.employmentGenerated.toLocaleString()} jobs created</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* India Coastal Map */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Coastal Blue Carbon Projects - India
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Map Image */}
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1717700299773-1accc14b67f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMG1hcCUyMGNvYXN0YWwlMjBhcmVhc3xlbnwxfHx8fDE3NTkwODYwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="India coastal blue carbon projects map"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  
                  {/* Simple location markers */}
                  <div className="absolute top-4 right-4 bg-green-600 text-white rounded-lg p-2 text-xs shadow-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>West Bengal</span>
                    </div>
                    <p className="text-green-100">34 Projects</p>
                  </div>

                  <div className="absolute top-12 left-4 bg-blue-600 text-white rounded-lg p-2 text-xs shadow-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Gujarat</span>
                    </div>
                    <p className="text-blue-100">28 Projects</p>
                  </div>

                  <div className="absolute bottom-8 left-6 bg-blue-600 text-white rounded-lg p-2 text-xs shadow-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Kerala</span>
                    </div>
                    <p className="text-blue-100">22 Projects</p>
                  </div>

                  <div className="absolute bottom-6 right-8 bg-blue-600 text-white rounded-lg p-2 text-xs shadow-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Tamil Nadu</span>
                    </div>
                    <p className="text-blue-100">26 Projects</p>
                  </div>

                  <div className="absolute top-8 right-12 bg-orange-600 text-white rounded-lg p-2 text-xs shadow-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Odisha</span>
                    </div>
                    <p className="text-orange-100">18 Projects</p>
                  </div>
                </div>

                {/* State Overview Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {stateData.slice(0, 6).map((state) => (
                    <div key={state.state} className="bg-muted rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-3 h-3 ${getStatusColor(state.status)} rounded-full`}></div>
                        <span className="text-sm font-medium text-foreground">{state.state}</span>
                      </div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>{state.projects} Projects</p>
                        <p>{(state.co2Sequestered / 1000).toFixed(1)}K tons CO₂</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Legend */}
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <span>Leading States</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span>Active States</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                    <span>Developing States</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* State Rankings & Recent Activities */}
          <div className="space-y-6">
            {/* State Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  Top Performing States
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {stateData.slice(0, 5).map((state, index) => (
                    <div key={state.state} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 ${getStatusColor(state.status)} rounded-full flex items-center justify-center text-white text-xs`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm text-foreground">{state.state}</p>
                          <p className="text-xs text-muted-foreground">{state.projects} projects</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-foreground">{(state.co2Sequestered / 1000).toFixed(1)}K</p>
                        <p className="text-xs text-muted-foreground">tons CO₂</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-600" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground">{activity.description}</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-muted-foreground">{activity.state}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {activity.amount}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed State Data Table */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-600" />
              State-wise Blue Carbon Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2">State</th>
                    <th className="text-right py-3 px-2">Projects</th>
                    <th className="text-right py-3 px-2">Communities</th>
                    <th className="text-right py-3 px-2">Trees Planted</th>
                    <th className="text-right py-3 px-2">CO₂ Sequestered</th>
                    <th className="text-right py-3 px-2">Coastline (km)</th>
                    <th className="text-right py-3 px-2">Funding Used</th>
                    <th className="text-center py-3 px-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {stateData.map((state, index) => (
                    <tr key={state.state} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 ${getStatusColor(state.status)} rounded-full`}></div>
                          {state.state}
                        </div>
                      </td>
                      <td className="text-right py-3 px-2">{state.projects}</td>
                      <td className="text-right py-3 px-2">{state.communities.toLocaleString()}</td>
                      <td className="text-right py-3 px-2">{(state.mangrovesPlanted / 1000).toFixed(0)}K</td>
                      <td className="text-right py-3 px-2">{(state.co2Sequestered / 1000).toFixed(1)}K tons</td>
                      <td className="text-right py-3 px-2">{state.coastline.toLocaleString()}</td>
                      <td className="text-right py-3 px-2">{state.fundingUtilized}%</td>
                      <td className="text-center py-3 px-2">
                        <Badge 
                          variant="outline" 
                          className={`${
                            state.status === 'Leading' ? 'text-green-600 border-green-300' :
                            state.status === 'Active' ? 'text-blue-600 border-blue-300' :
                            'text-orange-600 border-orange-300'
                          }`}
                        >
                          {state.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Government Footer */}
        <div className="mt-12 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span>Government of India</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-green-600" />
              <span>MoEFCC</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600" />
              <span>National Blue Carbon Initiative</span>
            </div>
          </div>
          <p className="text-sm">
            Last Updated: September 28, 2024 | Data Source: National Carbon Credit Registry (NCCR)
          </p>
        </div>
      </div>
    </div>
  );
}