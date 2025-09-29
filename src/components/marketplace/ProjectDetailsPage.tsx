import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ArrowLeft, MapPin, Calendar, Users, Award, ShoppingCart, 
  Heart, Share2, Download, CheckCircle, Star, Leaf, 
  TrendingUp, Shield, ExternalLink, Camera, FileText
} from 'lucide-react';

interface ProjectDetailsPageProps {
  onNavigate: (screen: string) => void;
  projectId: string;
}

export function ProjectDetailsPage({ onNavigate, projectId }: ProjectDetailsPageProps) {
  const [selectedCredits, setSelectedCredits] = useState(100);
  const [showPurchaseConfirm, setShowPurchaseConfirm] = useState(false);

  // Mock project data - in real app would fetch based on projectId
  const project = {
    id: 'SUN-001',
    title: 'Sundarbans Mangrove Conservation',
    community: 'Sundarbans Warriors Collective',
    location: 'West Bengal, India',
    coordinates: '22°30\'N, 89°15\'E',
    ecosystem: 'Mangrove Forest',
    coverImage: 'https://images.unsplash.com/photo-1742613718529-ab6985d46c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGZvcmVzdCUyMGNvYXN0YWwlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU5MDg2MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    availableCredits: 1250,
    price: 45,
    rating: 4.9,
    reviews: 127,
    verified: true,
    year: 2024,
    area: '25 hectares',
    treesPlanted: 12500,
    co2Impact: '3,125 tons over 10 years',
    communityMembers: 89,
    startDate: 'January 2024',
    projectDuration: '36 months',
    description: 'The Sundarbans Mangrove Conservation project is a community-led initiative focused on restoring and protecting the largest mangrove forest in the world. Our local community of 89 members works tirelessly to plant native mangrove species, monitor their growth, and protect existing ecosystems from degradation.',
    impactStory: 'This project directly supports local fishing communities whose livelihoods depend on healthy mangrove ecosystems. By purchasing credits from this project, you are helping to provide sustainable income to community members while protecting one of the world\'s most important carbon sinks.',
    certifications: ['Verra VCS', 'Gold Standard', 'NCCR Verified', 'Climate Action Reserve'],
    species: ['Avicennia marina', 'Rhizophora apiculata', 'Sonneratia alba', 'Bruguiera gymnorrhiza'],
    timeline: [
      { date: 'Jan 2024', milestone: 'Project Launch', status: 'completed' },
      { date: 'Mar 2024', milestone: 'First Planting Phase', status: 'completed' },
      { date: 'Jun 2024', milestone: 'Monitoring & Maintenance', status: 'completed' },
      { date: 'Sep 2024', milestone: 'Growth Assessment', status: 'in-progress' },
      { date: 'Dec 2024', milestone: 'Credit Verification', status: 'upcoming' },
      { date: 'Mar 2025', milestone: 'Second Planting Phase', status: 'upcoming' }
    ],
    images: [
      'https://images.unsplash.com/photo-1742613718529-ab6985d46c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGZvcmVzdCUyMGNvYXN0YWwlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU5MDg2MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1662757171170-30a462b7d4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwY2FyYm9uJTIwb2NlYW4lMjBlY29zeXN0ZW18ZW58MXx8fHwxNzU5MDg2MDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1613153262531-aeff570789ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjB2aWV3JTIwbWFuZ3JvdmUlMjBmb3Jlc3QlMjBhZXJpYWx8ZW58MXx8fHwxNzU5MDg2MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ]
  };

  const totalCost = selectedCredits * project.price;
  const estimatedOffset = (selectedCredits * 2.5).toFixed(1); // Assuming 2.5 tons CO2 per credit

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => onNavigate('landing')}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-xl text-gray-900">Project Details</h1>
                <p className="text-gray-600">{project.id}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Section */}
            <Card>
              <div className="relative">
                <ImageWithFallback
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-green-600 text-white">
                    {project.ecosystem}
                  </Badge>
                  {project.verified && (
                    <Badge className="bg-blue-600 text-white">
                      <Shield className="w-3 h-3 mr-1" />
                      NCCR Verified
                    </Badge>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl text-gray-900 mb-2">{project.title}</h1>
                    <p className="text-xl text-gray-600 mb-2">{project.community}</p>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-lg">{project.rating}</span>
                      <span className="text-gray-600">({project.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Project Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-2xl text-gray-900">{project.treesPlanted.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Trees Planted</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-2xl text-gray-900">{project.co2Impact.split(' ')[0]}</p>
                    <p className="text-sm text-gray-600">CO₂ Sequestered</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <p className="text-2xl text-gray-900">{project.communityMembers}</p>
                    <p className="text-sm text-gray-600">Community Members</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <p className="text-2xl text-gray-900">{project.availableCredits}</p>
                    <p className="text-sm text-gray-600">Credits Available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Project</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
                <p className="text-gray-700 leading-relaxed">{project.impactStory}</p>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.timeline.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full ${
                        item.status === 'completed' ? 'bg-green-500' :
                        item.status === 'in-progress' ? 'bg-blue-500' :
                        'bg-gray-300'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-gray-900">{item.milestone}</p>
                        <p className="text-sm text-gray-600">{item.date}</p>
                      </div>
                      <Badge variant={
                        item.status === 'completed' ? 'default' :
                        item.status === 'in-progress' ? 'secondary' :
                        'outline'
                      }>
                        {item.status === 'in-progress' ? 'In Progress' :
                         item.status === 'completed' ? 'Completed' : 'Upcoming'}
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.certifications.map((cert, index) => (
                    <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm text-green-800">{cert}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Gallery */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Project Gallery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Purchase Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Purchase Credits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-3xl text-blue-600">${project.price}</p>
                  <p className="text-gray-600">per BCT credit</p>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Number of Credits</label>
                  <Input
                    type="number"
                    value={selectedCredits}
                    onChange={(e) => setSelectedCredits(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    max={project.availableCredits}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Maximum: {project.availableCredits} credits available
                  </p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Credits ({selectedCredits})</span>
                    <span>${(selectedCredits * project.price).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Fee (2%)</span>
                    <span>${(totalCost * 0.02).toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg">
                    <span>Total</span>
                    <span>${(totalCost * 1.02).toFixed(2)}</span>
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Environmental Impact:</strong> Approximately {estimatedOffset} tons of CO₂ offset
                  </p>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy {selectedCredits} Credits
                </Button>

                <Button variant="outline" className="w-full">
                  Add to Cart
                </Button>

                <div className="text-center text-xs text-gray-500">
                  <p>🔒 Secure payment • 30-day money-back guarantee</p>
                </div>
              </CardContent>
            </Card>

            {/* Project Details */}
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Area</span>
                  <span>{project.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span>{project.projectDuration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Date</span>
                  <span>{project.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GPS Coordinates</span>
                  <span>{project.coordinates}</span>
                </div>
              </CardContent>
            </Card>

            {/* Species Information */}
            <Card>
              <CardHeader>
                <CardTitle>Species Planted</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {project.species.map((species, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 italic">{species}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Blockchain Verification */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  On-Chain Verified
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  This project's carbon credits are verified and tracked on blockchain for full transparency.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on Blockchain
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}