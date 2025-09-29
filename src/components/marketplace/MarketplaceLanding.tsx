import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Search, Filter, MapPin, Calendar, Award, ShoppingCart, 
  Star, Leaf, Users, Wallet, FileText, Home, 
  TrendingUp, Shield, Verified
} from 'lucide-react';

interface MarketplaceLandingProps {
  onNavigate: (screen: string) => void;
  onProjectSelect: (projectId: string) => void;
}

export function MarketplaceLanding({ onNavigate, onProjectSelect }: MarketplaceLandingProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedEcosystem, setSelectedEcosystem] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const projects = [
    {
      id: 'SUN-001',
      title: 'Sundarbans Mangrove Conservation',
      community: 'Sundarbans Warriors Collective',
      location: 'West Bengal, India',
      ecosystem: 'Mangrove Forest',
      image: 'https://images.unsplash.com/photo-1742613718529-ab6985d46c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGZvcmVzdCUyMGNvYXN0YWwlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU5MDg2MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      availableCredits: 1250,
      price: 45,
      rating: 4.9,
      verified: true,
      year: 2024,
      impact: '312 tons CO₂',
      members: 89
    },
    {
      id: 'KER-002',
      title: 'Kerala Coastal Restoration',
      community: 'Backwater Guardians',
      location: 'Kerala, India',
      ecosystem: 'Coastal Wetlands',
      image: 'https://images.unsplash.com/photo-1662757171170-30a462b7d4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwY2FyYm9uJTIwb2NlYW4lMjBlY29zeXN0ZW18ZW58MXx8fHwxNzU5MDg2MDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      availableCredits: 890,
      price: 42,
      rating: 4.8,
      verified: true,
      year: 2024,
      impact: '234 tons CO₂',
      members: 67
    },
    {
      id: 'GUJ-003',
      title: 'Gujarat Salt Marsh Revival',
      community: 'Coastal Healers Initiative',
      location: 'Gujarat, India',
      ecosystem: 'Salt Marshes',
      image: 'https://images.unsplash.com/photo-1613153262531-aeff570789ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjB2aWV3JTIwbWFuZ3JvdmUlMjBmb3Jlc3QlMjBhZXJpYWx8ZW58MXx8fHwxNzU5MDg2MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      availableCredits: 1560,
      price: 38,
      rating: 4.7,
      verified: true,
      year: 2024,
      impact: '425 tons CO₂',
      members: 124
    },
    {
      id: 'ODI-004',
      title: 'Odisha Deltaic Restoration',
      community: 'Delta Protectors Collective',
      location: 'Odisha, India',
      ecosystem: 'River Delta',
      image: 'https://images.unsplash.com/photo-1742613718529-ab6985d46c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGZvcmVzdCUyMGNvYXN0YWwlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU5MDg2MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      availableCredits: 2100,
      price: 48,
      rating: 4.9,
      verified: true,
      year: 2024,
      impact: '578 tons CO₂',
      members: 156
    },
    {
      id: 'TN-005',
      title: 'Tamil Nadu Seagrass Conservation',
      community: 'Ocean Guardians Tamil Nadu',
      location: 'Tamil Nadu, India',
      ecosystem: 'Seagrass Beds',
      image: 'https://images.unsplash.com/photo-1662757171170-30a462b7d4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwY2FyYm9uJTIwb2NlYW4lMjBlY29zeXN0ZW18ZW58MXx8fHwxNzU5MDg2MDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      availableCredits: 750,
      price: 52,
      rating: 4.6,
      verified: true,
      year: 2024,
      impact: '189 tons CO₂',
      members: 45
    },
    {
      id: 'AND-006',
      title: 'Andaman Coral Reef Protection',
      community: 'Island Reef Protectors',
      location: 'Andaman & Nicobar, India',
      ecosystem: 'Coral Reefs',
      image: 'https://images.unsplash.com/photo-1613153262531-aeff570789ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjB2aWV3JTIwbWFuZ3JvdmUlMjBmb3Jlc3QlMjBhZXJpYWx8ZW58MXx8fHwxNzU5MDg2MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      availableCredits: 950,
      price: 55,
      rating: 4.8,
      verified: true,
      year: 2024,
      impact: '267 tons CO₂',
      members: 78
    }
  ];

  const regions = ['West Bengal', 'Kerala', 'Gujarat', 'Odisha', 'Tamil Nadu', 'Andaman & Nicobar'];
  const ecosystems = ['Mangrove Forest', 'Coastal Wetlands', 'Salt Marshes', 'River Delta', 'Seagrass Beds', 'Coral Reefs'];
  const priceRanges = ['$30-$40', '$40-$50', '$50-$60', '$60+'];

  const navItems = [
    { id: 'marketplace', label: 'Marketplace', icon: Home, active: true },
    { id: 'projects', label: 'My Projects', icon: Leaf },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'reports', label: 'Reports', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white">🌍</span>
                </div>
                <div>
                  <h1 className="text-xl text-gray-900">Blue Carbon Marketplace</h1>
                  <p className="text-sm text-gray-600">Corporate Carbon Credit Portal</p>
                </div>
              </div>
              
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={item.active ? "default" : "ghost"}
                    className={`gap-2 ${item.active ? 'bg-blue-600' : ''}`}
                    onClick={() => item.id !== 'marketplace' && onNavigate(item.id === 'projects' ? 'landing' : item.id)}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => onNavigate('wallet')}>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart (0)
              </Button>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">A</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl mb-4">Buy Verified Blue Carbon Credits</h1>
            <p className="text-xl text-blue-100 mb-8">
              Support coastal communities while achieving your carbon neutrality goals with blockchain-verified blue carbon credits
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-4 h-4" />
                <span>Blockchain Verified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Award className="w-4 h-4" />
                <span>NCCR Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Users className="w-4 h-4" />
                <span>Community Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-80">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search projects by name, location, or community..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>{region}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedEcosystem} onValueChange={setSelectedEcosystem}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Ecosystem Type" />
              </SelectTrigger>
              <SelectContent>
                {ecosystems.map((ecosystem) => (
                  <SelectItem key={ecosystem} value={ecosystem}>{ecosystem}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range} value={range}>{range}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl text-gray-900">Available Projects</h2>
            <p className="text-gray-600">{projects.length} verified blue carbon projects</p>
          </div>
          <div className="text-sm text-gray-600">
            Total Credits Available: {projects.reduce((sum, p) => sum + p.availableCredits, 0).toLocaleString()} BCT
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
              <div onClick={() => onProjectSelect(project.id)}>
                <div className="relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-green-600 text-white">
                      {project.ecosystem}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    {project.verified && (
                      <Badge className="bg-blue-600 text-white">
                        <Verified className="w-3 h-3 mr-1" />
                        NCCR
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{project.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-3">{project.community}</p>

                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                    <Calendar className="w-4 h-4 ml-2" />
                    <span>{project.year}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <p className="text-lg text-blue-600">{project.availableCredits}</p>
                      <p className="text-xs text-gray-600">Credits Available</p>
                    </div>
                    <div>
                      <p className="text-lg text-green-600">{project.impact}</p>
                      <p className="text-xs text-gray-600">CO₂ Impact</p>
                    </div>
                    <div>
                      <p className="text-lg text-purple-600">{project.members}</p>
                      <p className="text-xs text-gray-600">Community</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl text-gray-900">${project.price}</p>
                      <p className="text-sm text-gray-600">per BCT credit</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy Credits
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Projects
          </Button>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Marketplace Impact</h2>
            <p className="text-blue-100 text-lg">Real impact from verified blue carbon projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl mb-2">2.4M</p>
              <p className="text-blue-100">Tons CO₂ Offset</p>
            </div>
            <div className="text-center">
              <p className="text-4xl mb-2">156</p>
              <p className="text-blue-100">Active Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl mb-2">12.8K</p>
              <p className="text-blue-100">Community Members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl mb-2">89%</p>
              <p className="text-blue-100">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}