import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { ArrowLeft, Camera, Video, QrCode, MapPin, Wifi, WifiOff, Upload as UploadIcon, FolderUp } from 'lucide-react';

type UserRole = 'community-member' | 'community-leader' | 'community-agent';

interface UploadDataScreenProps {
  onNavigate: (screen: string) => void;
  userRole: UserRole;
}

export function UploadDataScreen({ onNavigate, userRole }: UploadDataScreenProps) {
  const [selectedProject, setSelectedProject] = useState('');
  const [isOnline, setIsOnline] = useState(true);

  const projects = [
    { value: 'sundarbans-east', label: 'Sundarbans East Conservation' },
    { value: 'mangrove-restoration', label: 'Coastal Mangrove Restoration' },
    { value: 'community-afforestation', label: 'Community Afforestation Project' }
  ];

  const canBulkUpload = userRole === 'community-agent';

  return (
    <div className="h-full bg-gray-50 relative">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => onNavigate('home')}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-lg text-black">Upload Field Data</h1>
              <p className="text-sm text-gray-600">Document your conservation work</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isOnline ? (
              <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">
                <Wifi className="w-3 h-3 mr-1" />
                Online
              </Badge>
            ) : (
              <Badge variant="outline" className="text-orange-600 border-orange-300 bg-orange-50">
                <WifiOff className="w-3 h-3 mr-1" />
                Offline
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 pb-24">
        {/* Project Selection */}
        <Card className="bg-white border border-gray-100 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-black">Select Project</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedProject} onValueChange={setSelectedProject}>
              <SelectTrigger className="border-gray-200">
                <SelectValue placeholder="Choose your project" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((project) => (
                  <SelectItem key={project.value} value={project.value}>
                    {project.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Media Upload */}
        <Card className="bg-white border border-gray-100 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-black">Capture Media</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="h-24 flex-col gap-3 bg-blue-50 border-blue-200 hover:bg-blue-100"
              >
                <Camera className="w-6 h-6 text-blue-600" />
                <span className="text-sm text-blue-800">Take Photo</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-24 flex-col gap-3 bg-blue-50 border-blue-200 hover:bg-blue-100"
              >
                <Video className="w-6 h-6 text-blue-600" />
                <span className="text-sm text-blue-800">Record Video</span>
              </Button>
            </div>
            
            {/* Auto-geotagging indicator */}
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 text-sm text-blue-700">
                <MapPin className="w-4 h-4" />
                <span>Auto-geotagging enabled</span>
                <Badge variant="secondary" className="text-xs bg-blue-200 text-blue-800">
                  GPS Active
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* QR Scanner */}
        <Card className="bg-white border border-gray-100 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-black">Quick Data Entry</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              className="w-full h-16 flex items-center gap-3 bg-gray-50 border-gray-200 hover:bg-gray-100"
            >
              <QrCode className="w-6 h-6 text-gray-600" />
              <div className="text-left">
                <p className="text-sm text-black">Scan QR Code</p>
                <p className="text-xs text-gray-600">Tree tags or monitoring codes</p>
              </div>
            </Button>
          </CardContent>
        </Card>

        {/* Bulk Upload - Only for Community Agents */}
        {canBulkUpload && (
          <Card className="bg-blue-600 text-white border-0 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-white">Community Agent Tools</CardTitle>
              <p className="text-sm text-blue-100">Bulk upload data for multiple communities</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full h-16 flex items-center gap-3 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <FolderUp className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-sm">Bulk CSV Upload</p>
                  <p className="text-xs text-blue-100">Upload multiple community data</p>
                </div>
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="h-12 flex-col gap-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <span className="text-xs">Excel Import</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="h-12 flex-col gap-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <span className="text-xs">Data Templates</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Bottom Action Button */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 py-3"
          disabled={!selectedProject}
        >
          <UploadIcon className="w-4 h-4 mr-2" />
          Upload Data
        </Button>
        
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500">
            {isOnline ? 'Data will be uploaded immediately' : 'Data saved locally for later sync'}
          </p>
        </div>
      </div>
    </div>
  );
}