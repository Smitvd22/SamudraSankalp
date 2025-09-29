import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { 
  ArrowLeft, Download, FileText, TrendingUp, Award, 
  Calendar, Building, Leaf, Target, CheckCircle, 
  ExternalLink, Share2, Mail, Printer
} from 'lucide-react';

interface ReportsPageProps {
  onNavigate: (screen: string) => void;
}

export function ReportsPage({ onNavigate }: ReportsPageProps) {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [reportType, setReportType] = useState('annual');

  const companyData = {
    name: 'TechCorp Industries',
    industry: 'Technology Services',
    employees: 2500,
    locations: ['Mumbai', 'Bangalore', 'Delhi', 'Chennai'],
    established: '2015',
    website: 'www.techcorp.com'
  };

  const carbonFootprint = {
    totalEmissions: 8750, // tons CO₂
    targetReduction: 50, // percentage
    currentReduction: 32, // percentage
    scope1: 1200,
    scope2: 4800,
    scope3: 2750
  };

  const offsetData = {
    totalCreditsRetired: 2800,
    totalCO2Offset: 7000, // tons
    offsetPercentage: 80, // of total emissions
    investmentAmount: 126000, // USD
    projectsSupported: 8,
    communitiesImpacted: 445
  };

  const monthlyData = [
    { month: 'Jan', emissions: 850, offset: 200 },
    { month: 'Feb', emissions: 780, offset: 180 },
    { month: 'Mar', emissions: 920, offset: 350 },
    { month: 'Apr', emissions: 680, offset: 280 },
    { month: 'May', emissions: 750, offset: 320 },
    { month: 'Jun', emissions: 890, offset: 400 },
    { month: 'Jul', emissions: 720, offset: 380 },
    { month: 'Aug', emissions: 800, offset: 420 },
    { month: 'Sep', emissions: 760, offset: 350 },
    { month: 'Oct', emissions: 840, offset: 390 },
    { month: 'Nov', emissions: 720, offset: 280 },
    { month: 'Dec', emissions: 780, offset: 240 }
  ];

  const projectBreakdown = [
    { name: 'Mangrove Restoration', value: 45, color: '#10B981', credits: 1260 },
    { name: 'Coastal Wetlands', value: 28, color: '#3B82F6', credits: 784 },
    { name: 'Seagrass Conservation', value: 18, color: '#8B5CF6', credits: 504 },
    { name: 'Salt Marsh Revival', value: 9, color: '#F59E0B', credits: 252 }
  ];

  const milestones = [
    { date: '2024-01', milestone: 'Carbon neutrality commitment announced', status: 'completed' },
    { date: '2024-03', milestone: 'First blue carbon credit purchase', status: 'completed' },
    { date: '2024-06', milestone: '50% emission reduction target', status: 'completed' },
    { date: '2024-09', milestone: '1000 credits retired milestone', status: 'completed' },
    { date: '2024-12', milestone: 'Net-zero transition plan', status: 'in-progress' },
    { date: '2025-06', milestone: 'Carbon negative target', status: 'planned' }
  ];

  const certifications = [
    { name: 'Science Based Targets Initiative (SBTi)', status: 'Certified', date: '2024-02' },
    { name: 'Carbon Trust Standard', status: 'Certified', date: '2024-01' },
    { name: 'UN Global Compact', status: 'Signatory', date: '2023-12' },
    { name: 'CDP Climate A-List', status: 'Achieved', date: '2024-03' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => onNavigate('wallet')}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-xl text-gray-900">ESG Reports</h1>
                <p className="text-gray-600">Carbon footprint and sustainability reporting</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="annual">Annual Report</SelectItem>
                  <SelectItem value="quarterly">Quarterly Report</SelectItem>
                  <SelectItem value="monthly">Monthly Report</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Company Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl text-gray-900 mb-2">{companyData.name}</h1>
                  <p className="text-gray-600 mb-1">{companyData.industry}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{companyData.employees.toLocaleString()} employees</span>
                    <span>Est. {companyData.established}</span>
                    <span>{companyData.locations.length} locations</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-green-600 text-white mb-2">
                  Carbon Neutral Certified
                </Badge>
                <p className="text-sm text-gray-600">Since March 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-red-100" />
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Total
                </Badge>
              </div>
              <p className="text-3xl mb-1">{carbonFootprint.totalEmissions.toLocaleString()}</p>
              <p className="text-sm text-red-100">Tons CO₂ Emissions</p>
              <p className="text-xs text-red-100 mt-2">
                {carbonFootprint.currentReduction}% reduction achieved
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Leaf className="w-8 h-8 text-green-100" />
                <CheckCircle className="w-5 h-5 text-green-100" />
              </div>
              <p className="text-3xl mb-1">{offsetData.totalCO2Offset.toLocaleString()}</p>
              <p className="text-sm text-green-100">Tons CO₂ Offset</p>
              <p className="text-xs text-green-100 mt-2">
                {offsetData.offsetPercentage}% of total emissions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-blue-100" />
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Retired
                </Badge>
              </div>
              <p className="text-3xl mb-1">{offsetData.totalCreditsRetired.toLocaleString()}</p>
              <p className="text-sm text-blue-100">Carbon Credits</p>
              <p className="text-xs text-blue-100 mt-2">
                From {offsetData.projectsSupported} projects
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Target className="w-8 h-8 text-purple-100" />
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Target
                </Badge>
              </div>
              <p className="text-3xl mb-1">{carbonFootprint.targetReduction}%</p>
              <p className="text-sm text-purple-100">Reduction Target</p>
              <p className="text-xs text-purple-100 mt-2">
                By 2030 (SBTi aligned)
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Emissions vs Offset Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Emissions vs Offset</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="emissions" stroke="#EF4444" strokeWidth={2} name="Emissions" />
                  <Line type="monotone" dataKey="offset" stroke="#10B981" strokeWidth={2} name="Offset" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Project Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Carbon Credit Project Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={projectBreakdown}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {projectBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Sustainability Milestones */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Sustainability Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'in-progress' ? 'bg-blue-500' :
                      'bg-gray-300'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-gray-900">{milestone.milestone}</p>
                      <p className="text-sm text-gray-600">{milestone.date}</p>
                    </div>
                    <Badge variant={
                      milestone.status === 'completed' ? 'default' :
                      milestone.status === 'in-progress' ? 'secondary' :
                      'outline'
                    }>
                      {milestone.status === 'in-progress' ? 'In Progress' :
                       milestone.status === 'completed' ? 'Completed' : 'Planned'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle>Certifications & Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <Badge variant="outline" className="text-green-600 text-xs">
                        {cert.status}
                      </Badge>
                    </div>
                    <h4 className="text-sm text-gray-900 mb-1">{cert.name}</h4>
                    <p className="text-xs text-gray-600">{cert.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Community & Environmental Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl text-blue-600 mb-2">{offsetData.communitiesImpacted}</p>
                <p className="text-gray-700">Community Members Supported</p>
                <p className="text-sm text-gray-600 mt-2">
                  Across {offsetData.projectsSupported} coastal restoration projects
                </p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl text-green-600 mb-2">15,600</p>
                <p className="text-gray-700">Trees Planted</p>
                <p className="text-sm text-gray-600 mt-2">
                  Native mangrove and coastal species
                </p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl text-purple-600 mb-2">125 Ha</p>
                <p className="text-gray-700">Ecosystem Restored</p>
                <p className="text-sm text-gray-600 mt-2">
                  Mangroves, wetlands, and coastal habitats
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certificate Generation */}
        <Card>
          <CardHeader>
            <CardTitle>Carbon Neutral Certificate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">Official Carbon Neutral Certificate</h3>
                  <p className="text-gray-600 mb-2">
                    Certified carbon neutral for {selectedYear} through verified blue carbon credits
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{offsetData.totalCO2Offset.toLocaleString()} tons CO₂ offset</span>
                    <span>{offsetData.totalCreditsRetired.toLocaleString()} credits retired</span>
                    <span>NCCR verified</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Download Certificate
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Certificate
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export Options */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Export & Share Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                <span>PDF Report</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <ExternalLink className="w-6 h-6 text-green-600" />
                <span>Web Version</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Mail className="w-6 h-6 text-purple-600" />
                <span>Email Report</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Printer className="w-6 h-6 text-gray-600" />
                <span>Print Version</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}