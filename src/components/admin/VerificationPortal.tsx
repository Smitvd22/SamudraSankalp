import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { Textarea } from '../ui/textarea';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ArrowLeft, CheckCircle, XCircle, Flag, MapPin, Calendar, 
  Camera, Satellite, ZoomIn, RotateCcw, Download, Eye, FileCheck
} from 'lucide-react';

interface VerificationPortalProps {
  onNavigate: (screen: string) => void;
}

export function VerificationPortal({ onNavigate }: VerificationPortalProps) {
  const [selectedImage, setSelectedImage] = useState<'community' | 'satellite'>('community');
  const [checklist, setChecklist] = useState({
    location: false,
    timeline: false,
    species: false,
    density: false,
    health: false,
    documentation: false
  });
  const [comments, setComments] = useState('');

  const project = {
    id: 'SUN-2024-127',
    title: 'Sundarbans Mangrove Restoration Phase 2',
    community: 'Sundarbans Warriors Collective',
    location: 'Sundarbans East, West Bengal',
    coordinates: '22°30\'N, 89°15\'E',
    date: 'March 15, 2024',
    area: '2.5 hectares',
    species: 'Avicennia marina, Rhizophora apiculata',
    expectedCredits: '125 BCT',
    status: 'pending'
  };

  const checklistItems = [
    { key: 'location', label: 'GPS coordinates match project boundaries', critical: true },
    { key: 'timeline', label: 'Planting completed within specified timeframe', critical: true },
    { key: 'species', label: 'Correct species planted as per project plan', critical: true },
    { key: 'density', label: 'Minimum tree density requirements met', critical: true },
    { key: 'health', label: 'Saplings show healthy growth indicators', critical: false },
    { key: 'documentation', label: 'All required documentation provided', critical: true }
  ];

  const handleChecklistChange = (key: string, checked: boolean) => {
    setChecklist(prev => ({ ...prev, [key]: checked }));
  };

  const isApprovalReady = () => {
    const criticalItems = checklistItems.filter(item => item.critical);
    return criticalItems.every(item => checklist[item.key as keyof typeof checklist]);
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
              <h1 className="text-xl text-foreground">Verification Portal</h1>
              <p className="text-muted-foreground">Project ID: {project.id}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-orange-600">
              {project.status}
            </Badge>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        {/* Project Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-600" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Community</p>
                <p className="text-foreground">{project.community}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="text-foreground">{project.location}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Area</p>
                <p className="text-foreground">{project.area}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Expected Credits</p>
                <p className="text-foreground">{project.expectedCredits}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Two Pane Visual Verification */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-green-600" />
              Visual Verification
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Community Uploaded Images */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Camera className="w-4 h-4 text-blue-600" />
                  Community Uploaded Images
                </h4>
                <div className="space-y-4">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1742613718529-ab6985d46c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGZvcmVzdCUyMGNvYXN0YWwlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU5MDg2MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Community uploaded verification"
                      className="w-full h-64 object-cover rounded-lg border"
                    />
                    <div className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm rounded px-2 py-1 text-xs">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {project.coordinates}
                    </div>
                    <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm rounded px-2 py-1 text-xs">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {project.date}
                    </div>
                  </div>
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1623628846089-1ba35e7a76a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMHBsYW50aW5nJTIwY29tbXVuaXR5fGVufDF8fHx8MTc1OTA4NjQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Community planting activity"
                      className="w-full h-64 object-cover rounded-lg border"
                    />
                  </div>
                </div>
              </div>

              {/* Satellite View Images */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Satellite className="w-4 h-4 text-green-600" />
                  Satellite View Images
                </h4>
                <div className="space-y-4">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1613153262531-aeff570789ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjB2aWV3JTIwbWFuZ3JvdmUlMjBmb3Jlc3QlMjBhZXJpYWx8ZW58MXx8fHwxNzU5MDg2MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Satellite verification view"
                      className="w-full h-64 object-cover rounded-lg border"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button variant="secondary" size="sm">
                        <ZoomIn className="w-3 h-3" />
                      </Button>
                      <Button variant="secondary" size="sm">
                        <RotateCcw className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1547949003-9792a18a2601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwY29hc3RhbCUyMGZvcmVzdHxlbnwxfHx8fDE3NTkwODY0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Aerial view comparison"
                      className="w-full h-64 object-cover rounded-lg border"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Image Controls */}
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" size="sm">
                <ZoomIn className="w-4 h-4 mr-2" />
                Zoom View
              </Button>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Side by Side
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Images
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Full Width Verification Checklist */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-600" />
              Verification Checklist
            </CardTitle>
            <p className="text-sm text-muted-foreground">Complete all critical items to proceed with project approval</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {checklistItems.map((item) => (
                <div key={item.key} className="flex items-start gap-3 p-4 border border-border rounded-lg">
                  <Checkbox
                    checked={checklist[item.key as keyof typeof checklist]}
                    onCheckedChange={(checked) => handleChecklistChange(item.key, checked as boolean)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm text-foreground">{item.label}</p>
                      {item.critical && (
                        <Badge variant="outline" className="text-red-600 text-xs">
                          Critical
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground">Verification Progress</span>
                <span className="text-sm text-muted-foreground">
                  {Object.values(checklist).filter(Boolean).length}/{checklistItems.length}
                </span>
              </div>
              <div className="w-full bg-background rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${(Object.values(checklist).filter(Boolean).length / checklistItems.length) * 100}%` 
                  }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {isApprovalReady() 
                  ? '✅ Ready for approval' 
                  : `${checklistItems.filter(item => item.critical && !checklist[item.key as keyof typeof checklist]).length} critical items remaining`
                }
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Auditor's Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-orange-600" />
              Auditor's Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Add your detailed verification notes, observations, and recommendations..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="min-h-32 mb-4"
            />
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>🔍 Field verification completed</span>
              <span>📊 Satellite analysis reviewed</span>
              <span>📋 Documentation verified</span>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Button 
            className="bg-green-600 hover:bg-green-700 px-8"
            disabled={!isApprovalReady()}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Approve Project
          </Button>
          
          <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50 px-8">
            <XCircle className="w-4 h-4 mr-2" />
            Reject Project
          </Button>
          
          <Button variant="outline" className="text-orange-600 border-orange-300 hover:bg-orange-50 px-8">
            <Flag className="w-4 h-4 mr-2" />
            Flag for Review
          </Button>
        </div>
      </div>
    </div>
  );
}