import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { 
  ArrowLeft, TrendingUp, Users, IndianRupee, TreePine,
  Download, FileSpreadsheet, FileText, Share2,
  Shield, AlertTriangle, CheckCircle, Activity
} from 'lucide-react';

interface ImpactAnalyticsProps {
  onNavigate: (screen: string) => void;
}

export function ImpactAnalytics({ onNavigate }: ImpactAnalyticsProps) {
  const [selectedMetric, setSelectedMetric] = useState('carbon');
  const [selectedTimeframe, setSelectedTimeframe] = useState('yearly');
  const [selectedComparison, setSelectedComparison] = useState('states');

  // Carbon Sequestration Trend Data
  const carbonTrendData = [
    { year: '2020', total: 45000, mangrove: 32000, wetland: 8000, seagrass: 5000 },
    { year: '2021', total: 67000, mangrove: 48000, wetland: 12000, seagrass: 7000 },
    { year: '2022', total: 89000, mangrove: 62000, wetland: 16000, seagrass: 11000 },
    { year: '2023', total: 156000, mangrove: 108000, wetland: 28000, seagrass: 20000 },
    { year: '2024', total: 312500, mangrove: 218000, wetland: 56500, seagrass: 38000 }
  ];

  // Community Benefit Distribution
  const communityBenefitData = [
    { state: 'West Bengal', directBeneficiaries: 12500, employment: 2340, income: 450 },
    { state: 'Gujarat', directBeneficiaries: 9800, employment: 1890, income: 380 },
    { state: 'Kerala', directBeneficiaries: 7800, employment: 1560, income: 320 },
    { state: 'Tamil Nadu', directBeneficiaries: 8900, employment: 1670, income: 350 },
    { state: 'Odisha', directBeneficiaries: 6700, employment: 1234, income: 280 },
    { state: 'Maharashtra', directBeneficiaries: 5400, employment: 980, income: 220 },
    { state: 'Karnataka', directBeneficiaries: 4200, employment: 760, income: 180 },
    { state: 'Andhra Pradesh', directBeneficiaries: 4800, employment: 890, income: 200 }
  ];

  // Insurance Buffer Pool Usage
  const insurancePoolData = [
    { month: 'Jan', totalPool: 2500000, claims: 45000, reserves: 2455000 },
    { month: 'Feb', totalPool: 2600000, claims: 38000, reserves: 2562000 },
    { month: 'Mar', totalPool: 2750000, claims: 67000, reserves: 2683000 },
    { month: 'Apr', totalPool: 2890000, claims: 52000, reserves: 2838000 },
    { month: 'May', totalPool: 3020000, claims: 78000, reserves: 2942000 },
    { month: 'Jun', totalPool: 3150000, claims: 89000, reserves: 3061000 },
    { month: 'Jul', totalPool: 3280000, claims: 56000, reserves: 3224000 },
    { month: 'Aug', totalPool: 3420000, claims: 72000, reserves: 3348000 },
    { month: 'Sep', totalPool: 3560000, claims: 93000, reserves: 3467000 }
  ];

  // Ecosystem Health Indicators
  const ecosystemHealthData = [
    { ecosystem: 'Mangrove Forests', health: 85, area: 450000, threatLevel: 'Low' },
    { ecosystem: 'Coastal Wetlands', health: 78, area: 180000, threatLevel: 'Medium' },
    { ecosystem: 'Salt Marshes', health: 72, area: 95000, threatLevel: 'Medium' },
    { ecosystem: 'Seagrass Beds', health: 68, area: 67000, threatLevel: 'High' },
    { ecosystem: 'Coral Reefs', health: 64, area: 34000, threatLevel: 'High' }
  ];

  // Climate Impact Metrics
  const climateImpactData = [
    { indicator: 'Sea Level Rise Protection', value: 89, unit: '% coastline protected', trend: 'improving' },
    { indicator: 'Storm Surge Mitigation', value: 76, unit: '% reduction capacity', trend: 'stable' },
    { indicator: 'Biodiversity Index', value: 82, unit: 'species richness score', trend: 'improving' },
    { indicator: 'Water Quality Index', value: 74, unit: 'WQI score', trend: 'improving' },
    { indicator: 'Fisheries Productivity', value: 68, unit: '% of optimal yield', trend: 'stable' }
  ];

  const getHealthColor = (health: number) => {
    if (health >= 80) return 'text-green-600';
    if (health >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'stable': return <Activity className="w-4 h-4 text-blue-600" />;
      case 'declining': return <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => onNavigate('dashboard')}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-xl text-gray-900">Impact Analytics</h1>
                <p className="text-gray-600">Comprehensive blue carbon impact analysis</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="carbon">Carbon Sequestration</SelectItem>
                  <SelectItem value="community">Community Benefits</SelectItem>
                  <SelectItem value="economic">Economic Impact</SelectItem>
                  <SelectItem value="ecosystem">Ecosystem Health</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yearly">Yearly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <TreePine className="w-6 h-6 text-green-100" />
                <TrendingUp className="w-4 h-4 text-green-100" />
              </div>
              <p className="text-2xl mb-1">312.5K</p>
              <p className="text-xs text-green-100">Tons CO₂ Sequestered</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-6 h-6 text-blue-100" />
                <CheckCircle className="w-4 h-4 text-blue-100" />
              </div>
              <p className="text-2xl mb-1">59.4K</p>
              <p className="text-xs text-blue-100">Direct Beneficiaries</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <IndianRupee className="w-6 h-6 text-purple-100" />
                <TrendingUp className="w-4 h-4 text-purple-100" />
              </div>
              <p className="text-2xl mb-1">₹2,380 Cr</p>
              <p className="text-xs text-purple-100">Economic Impact</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Shield className="w-6 h-6 text-orange-100" />
                <Activity className="w-4 h-4 text-orange-100" />
              </div>
              <p className="text-2xl mb-1">78%</p>
              <p className="text-xs text-orange-100">Ecosystem Health</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <AlertTriangle className="w-6 h-6 text-red-100" />
                <Activity className="w-4 h-4 text-red-100" />
              </div>
              <p className="text-2xl mb-1">15%</p>
              <p className="text-xs text-red-100">High Risk Areas</p>
            </CardContent>
          </Card>
        </div>

        {/* Carbon Sequestration Trends */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Carbon Sequestration Trends by Ecosystem</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={carbonTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="mangrove" stackId="1" stroke="#10B981" fill="#10B981" name="Mangrove Forests" />
                <Area type="monotone" dataKey="wetland" stackId="1" stroke="#3B82F6" fill="#3B82F6" name="Coastal Wetlands" />
                <Area type="monotone" dataKey="seagrass" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" name="Seagrass Beds" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Community Benefits by State */}
          <Card>
            <CardHeader>
              <CardTitle>Community Benefit Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={communityBenefitData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="state" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="directBeneficiaries" fill="#10B981" name="Direct Beneficiaries" />
                  <Bar dataKey="employment" fill="#3B82F6" name="Employment Generated" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Insurance Buffer Pool Usage */}
          <Card>
            <CardHeader>
              <CardTitle>Insurance Buffer Pool Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={insurancePoolData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="totalPool" stroke="#8B5CF6" strokeWidth={2} name="Total Pool (₹)" />
                  <Line type="monotone" dataKey="claims" stroke="#EF4444" strokeWidth={2} name="Claims (₹)" />
                  <Line type="monotone" dataKey="reserves" stroke="#10B981" strokeWidth={2} name="Reserves (₹)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Ecosystem Health Dashboard */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Ecosystem Health Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {ecosystemHealthData.map((ecosystem, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm text-gray-900">{ecosystem.ecosystem}</h4>
                    <Badge className={getThreatLevelColor(ecosystem.threatLevel)}>
                      {ecosystem.threatLevel}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <p className={`text-3xl mb-1 ${getHealthColor(ecosystem.health)}`}>
                      {ecosystem.health}%
                    </p>
                    <p className="text-xs text-gray-600">Health Score</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {(ecosystem.area / 1000).toFixed(0)}K hectares
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Climate Impact Metrics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Climate Impact Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {climateImpactData.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {getTrendIcon(metric.trend)}
                    <div>
                      <h4 className="text-gray-900">{metric.indicator}</h4>
                      <p className="text-sm text-gray-600">{metric.unit}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl text-gray-900">{metric.value}</p>
                    <Badge variant="outline" className={
                      metric.trend === 'improving' ? 'text-green-600' :
                      metric.trend === 'stable' ? 'text-blue-600' : 'text-red-600'
                    }>
                      {metric.trend}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Export Options */}
        <Card>
          <CardHeader>
            <CardTitle>Report Generation & Export</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                <span>PDF Report</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <FileSpreadsheet className="w-6 h-6 text-green-600" />
                <span>Excel Export</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Share2 className="w-6 h-6 text-purple-600" />
                <span>Share Dashboard</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Download className="w-6 h-6 text-orange-600" />
                <span>Raw Data</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Sources Footer */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg text-blue-900 mb-2">Data Sources & Methodology</h3>
              <p className="text-blue-700 text-sm">
                Data compiled from satellite monitoring, community field reports, carbon verification audits, 
                and socio-economic impact assessments. Updated real-time through blockchain-verified submissions.
              </p>
            </div>
            <div className="text-right">
              <p className="text-blue-800 text-sm">Last Updated</p>
              <p className="text-blue-600 text-xs">September 28, 2024 - 14:30 IST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}