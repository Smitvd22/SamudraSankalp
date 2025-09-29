import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  ArrowLeft, Search, Filter, MapPin, Calendar, Users, Trees, 
  Award, FileCheck, Clock, AlertCircle, CheckCircle, CreditCard,
  Eye, TrendingUp, Leaf
} from 'lucide-react';

interface ProjectManagementProps {
  onNavigate: (screen: string, projectId?: string) => void;
}

interface Project {
  id: string;
  title: string;
  community: string;
  location: string;
  area: string;
  species: string;
  status: 'planning' | 'ongoing' | 'verification-pending' | 'credit-issuance-pending' | 'completed' | 'rejected';
  startDate: string;
  expectedCredits: number;
  currentCredits: number;
  progress: number;
  priority: 'high' | 'medium' | 'low';
}

export function ProjectManagement({ onNavigate }: ProjectManagementProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 'SUN-2024-127',
      title: 'Sundarbans Mangrove Restoration Phase 2',
      community: 'Sundarbans Warriors Collective',
      location: 'Sundarbans East, West Bengal',
      area: '2.5 hectares',
      species: 'Avicennia marina, Rhizophora apiculata',
      status: 'verification-pending',
      startDate: '2024-01-15',
      expectedCredits: 125,
      currentCredits: 0,
      progress: 85,
      priority: 'high'
    },
    {
      id: 'KER-2024-089',
      title: 'Kerala Backwaters Seagrass Conservation',
      community: 'Coastal Kerala Collective',
      location: 'Vembanad Lake, Kerala',
      area: '1.8 hectares',
      species: 'Zostera marina, Halophila ovalis',
      status: 'credit-issuance-pending',
      startDate: '2024-02-01',
      expectedCredits: 89,
      currentCredits: 89,
      progress: 100,
      priority: 'medium'
    },
    {
      id: 'GUJ-2024-156',
      title: 'Gujarat Coastal Afforestation Initiative',
      community: 'Gujarat Marine Guardians',
      location: 'Kutch District, Gujarat',
      area: '3.2 hectares',
      species: 'Avicennia officinalis, Ceriops tagal',
      status: 'ongoing',
      startDate: '2024-03-10',
      expectedCredits: 165,
      currentCredits: 0,
      progress: 45,
      priority: 'high'
    },
    {
      id: 'ODI-2024-201',
      title: 'Odisha Deltaic Mangrove Restoration',
      community: 'Odisha Delta Defenders',
      location: 'Bhitarkanika, Odisha',
      area: '4.1 hectares',
      species: 'Rhizophora mucronata, Bruguiera gymnorrhiza',
      status: 'planning',
      startDate: '2024-04-05',
      expectedCredits: 220,
      currentCredits: 0,
      progress: 15,
      priority: 'medium'
    },
    {
      id: 'TN-2024-145',
      title: 'Tamil Nadu Coastal Protection Project',
      community: 'Tamil Coast Conservators',
      location: 'Pichavaram, Tamil Nadu',
      area: '2.9 hectares',
      species: 'Avicennia marina, Rhizophora apiculata',
      status: 'completed',
      startDate: '2023-11-20',
      expectedCredits: 145,
      currentCredits: 145,
      progress: 100,
      priority: 'low'
    },
    {
      id: 'AND-2024-078',
      title: 'Andaman Islands Coral Reef Conservation',
      community: 'Andaman Marine Alliance',
      location: 'Havelock Island, Andaman',
      area: '1.5 hectares',
      species: 'Coral restoration, Seagrass beds',
      status: 'rejected',
      startDate: '2024-01-30',
      expectedCredits: 78,
      currentCredits: 0,
      progress: 25,
      priority: 'low'
    }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'planning':
        return { label: 'Planning', color: 'bg-blue-100 text-blue-800', icon: Clock };
      case 'ongoing':
        return { label: 'Ongoing', color: 'bg-yellow-100 text-yellow-800', icon: TrendingUp };
      case 'verification-pending':
        return { label: 'Verification Pending', color: 'bg-orange-100 text-orange-800', icon: FileCheck };
      case 'credit-issuance-pending':
        return { label: 'Credit Issuance Pending', color: 'bg-purple-100 text-purple-800', icon: CreditCard };
      case 'completed':
        return { label: 'Completed', color: 'bg-green-100 text-green-800', icon: CheckCircle };
      case 'rejected':
        return { label: 'Rejected', color: 'bg-red-100 text-red-800', icon: AlertCircle };
      default:
        return { label: 'Unknown', color: 'bg-gray-100 text-gray-800', icon: Clock };
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.community.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleTrackProgress = (project: Project) => {
    setSelectedProject(null);
    if (project.status === 'verification-pending') {
      onNavigate('verification', project.id);
    } else if (project.status === 'credit-issuance-pending') {
      onNavigate('issuance', project.id);
    }
  };

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card shadow-sm border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => onNavigate('dashboard')}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-2xl text-foreground">Project Management</h1>
              <p className="text-muted-foreground">Monitor and manage blue carbon projects</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="planning">Planning</SelectItem>
                <SelectItem value="ongoing">Ongoing</SelectItem>
                <SelectItem value="verification-pending">Verification Pending</SelectItem>
                <SelectItem value="credit-issuance-pending">Credit Issuance Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="grid gap-4">
          {filteredProjects.map((project) => {
            const statusInfo = getStatusInfo(project.status);
            const StatusIcon = statusInfo.icon;
            
            return (
              <Card 
                key={project.id} 
                className={`cursor-pointer hover:shadow-md transition-shadow border-l-4 ${getPriorityColor(project.priority)}`}
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg text-foreground">{project.title}</h3>
                        <Badge className={statusInfo.color}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {statusInfo.label}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">ID: {project.id}</p>
                      <p className="text-sm text-muted-foreground">{project.community}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Progress</p>
                      <p className="text-2xl text-foreground">{project.progress}%</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Leaf className="w-4 h-4" />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(project.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="w-4 h-4" />
                      <span>{project.currentCredits}/{project.expectedCredits} BCT</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Trees className="w-5 h-5 text-blue-600" />
              Project Details
            </DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-6">
              {/* Project Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl text-foreground mb-1">{selectedProject.title}</h2>
                  <p className="text-sm text-muted-foreground mb-2">ID: {selectedProject.id}</p>
                  <Badge className={getStatusInfo(selectedProject.status).color}>
                    {getStatusInfo(selectedProject.status).label}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Progress</p>
                  <p className="text-3xl text-foreground">{selectedProject.progress}%</p>
                </div>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">Community</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedProject.community}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium">Location</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedProject.location}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium">Area & Species</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedProject.area}</p>
                    <p className="text-xs text-muted-foreground mt-1">{selectedProject.species}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium">Carbon Credits</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.currentCredits} / {selectedProject.expectedCredits} BCT
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Project Progress</span>
                  <span className="text-sm text-muted-foreground">{selectedProject.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${selectedProject.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  onClick={() => handleTrackProgress(selectedProject)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  disabled={selectedProject.status === 'planning' || selectedProject.status === 'ongoing' || selectedProject.status === 'completed' || selectedProject.status === 'rejected'}
                >
                  {selectedProject.status === 'verification-pending' ? (
                    <>
                      <FileCheck className="w-4 h-4 mr-2" />
                      Start Verification
                    </>
                  ) : selectedProject.status === 'credit-issuance-pending' ? (
                    <>
                      <CreditCard className="w-4 h-4 mr-2" />
                      Process Credits
                    </>
                  ) : (
                    <>
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Track Progress
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={() => setSelectedProject(null)}>
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}