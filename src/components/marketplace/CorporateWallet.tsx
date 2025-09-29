import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { 
  ArrowLeft, Wallet, Flame, Download, ExternalLink, 
  TrendingUp, Calendar, FileText, ShoppingCart, 
  AlertCircle, CheckCircle, Clock
} from 'lucide-react';

interface CorporateWalletProps {
  onNavigate: (screen: string) => void;
}

export function CorporateWallet({ onNavigate }: CorporateWalletProps) {
  const [retireAmount, setRetireAmount] = useState('');
  const [retireReason, setRetireReason] = useState('');
  const [showRetireDialog, setShowRetireDialog] = useState(false);

  const walletData = {
    totalBalance: 2450,
    availableBalance: 1850,
    retiredBalance: 600,
    pendingBalance: 0,
    totalValue: 110250, // USD value
    avgPurchasePrice: 45
  };

  const purchasedCredits = [
    {
      id: 'PUR-001',
      project: 'Sundarbans Mangrove Conservation',
      community: 'Sundarbans Warriors Collective',
      credits: 500,
      purchasePrice: 45,
      purchaseDate: '2024-03-15',
      status: 'active',
      vintage: 2024,
      location: 'West Bengal, India'
    },
    {
      id: 'PUR-002',
      project: 'Kerala Coastal Restoration',
      community: 'Backwater Guardians',
      credits: 350,
      purchasePrice: 42,
      purchaseDate: '2024-03-10',
      status: 'active',
      vintage: 2024,
      location: 'Kerala, India'
    },
    {
      id: 'PUR-003',
      project: 'Gujarat Salt Marsh Revival',
      community: 'Coastal Healers Initiative',
      credits: 600,
      purchasePrice: 38,
      purchaseDate: '2024-02-28',
      status: 'active',
      vintage: 2024,
      location: 'Gujarat, India'
    },
    {
      id: 'PUR-004',
      project: 'Odisha Deltaic Restoration',
      community: 'Delta Protectors Collective',
      credits: 400,
      purchasePrice: 48,
      purchaseDate: '2024-02-20',
      status: 'active',
      vintage: 2024,
      location: 'Odisha, India'
    },
    {
      id: 'PUR-005',
      project: 'Tamil Nadu Seagrass Conservation',
      community: 'Ocean Guardians Tamil Nadu',
      credits: 600,
      purchasePrice: 52,
      purchaseDate: '2024-02-15',
      status: 'active',
      vintage: 2024,
      location: 'Tamil Nadu, India'
    }
  ];

  const retiredCredits = [
    {
      id: 'RET-001',
      project: 'Sundarbans Mangrove Conservation',
      credits: 300,
      retireDate: '2024-03-20',
      reason: 'Annual ESG reporting offset',
      certificateId: 'CERT-2024-001',
      co2Offset: 750 // tons
    },
    {
      id: 'RET-002',
      project: 'Kerala Coastal Restoration',
      credits: 200,
      retireDate: '2024-03-18',
      reason: 'Corporate sustainability initiative',
      certificateId: 'CERT-2024-002',
      co2Offset: 500 // tons
    },
    {
      id: 'RET-003',
      project: 'Gujarat Salt Marsh Revival',
      credits: 100,
      retireDate: '2024-03-12',
      reason: 'Employee carbon footprint offset',
      certificateId: 'CERT-2024-003',
      co2Offset: 250 // tons
    }
  ];

  const transactionHistory = [
    {
      id: 'TXN-001',
      type: 'purchase',
      amount: 500,
      project: 'Sundarbans Mangrove Conservation',
      date: '2024-03-15',
      txHash: '0xabc123...',
      value: 22500
    },
    {
      id: 'TXN-002',
      type: 'retirement',
      amount: 300,
      project: 'Sundarbans Mangrove Conservation',
      date: '2024-03-20',
      txHash: '0xdef456...',
      value: 13500
    },
    {
      id: 'TXN-003',
      type: 'purchase',
      amount: 350,
      project: 'Kerala Coastal Restoration',
      date: '2024-03-10',
      txHash: '0xghi789...',
      value: 14700
    },
    {
      id: 'TXN-004',
      type: 'retirement',
      amount: 200,
      project: 'Kerala Coastal Restoration',
      date: '2024-03-18',
      txHash: '0xjkl012...',
      value: 8400
    }
  ];

  const handleRetireCredits = () => {
    if (!retireAmount || !retireReason) return;
    // Process retirement logic here
    setShowRetireDialog(false);
    setRetireAmount('');
    setRetireReason('');
  };

  const getTotalCO2Offset = () => {
    return retiredCredits.reduce((sum, credit) => sum + credit.co2Offset, 0);
  };

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
                <h1 className="text-xl text-gray-900">Corporate Wallet</h1>
                <p className="text-gray-600">Blue Carbon Token Portfolio</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => onNavigate('reports')}>
                <FileText className="w-4 h-4 mr-2" />
                ESG Reports
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Wallet className="w-8 h-8 text-blue-100" />
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Active
                </Badge>
              </div>
              <p className="text-3xl mb-1">{walletData.totalBalance.toLocaleString()}</p>
              <p className="text-sm text-blue-100">Total BCT Credits</p>
              <p className="text-xs text-blue-100 mt-2">
                Value: ${walletData.totalValue.toLocaleString()}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <CheckCircle className="w-8 h-8 text-green-100" />
                <TrendingUp className="w-5 h-5 text-green-100" />
              </div>
              <p className="text-3xl mb-1">{walletData.availableBalance.toLocaleString()}</p>
              <p className="text-sm text-green-100">Available Credits</p>
              <p className="text-xs text-green-100 mt-2">
                Ready for retirement
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Flame className="w-8 h-8 text-orange-100" />
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Retired
                </Badge>
              </div>
              <p className="text-3xl mb-1">{walletData.retiredBalance.toLocaleString()}</p>
              <p className="text-sm text-orange-100">Retired Credits</p>
              <p className="text-xs text-orange-100 mt-2">
                {getTotalCO2Offset().toLocaleString()} tons CO₂ offset
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Clock className="w-8 h-8 text-purple-100" />
                <AlertCircle className="w-5 h-5 text-purple-100" />
              </div>
              <p className="text-3xl mb-1">{walletData.pendingBalance}</p>
              <p className="text-sm text-purple-100">Pending Credits</p>
              <p className="text-xs text-purple-100 mt-2">
                In verification
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Purchased Credits */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-blue-600" />
                  Purchased Credits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {purchasedCredits.map((credit, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-1">{credit.project}</h4>
                        <p className="text-sm text-gray-600 mb-2">{credit.community}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{credit.location}</span>
                          <span>Vintage {credit.vintage}</span>
                          <span>Purchased {credit.purchaseDate}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg text-gray-900">{credit.credits} BCT</p>
                        <p className="text-sm text-gray-600">${credit.purchasePrice}/credit</p>
                        <Badge variant="outline" className="text-green-600 mt-1">
                          {credit.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Retired Credits */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-600" />
                  Retired Credits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {retiredCredits.map((credit, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-1">{credit.project}</h4>
                        <p className="text-sm text-orange-700 mb-2">{credit.reason}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>Retired {credit.retireDate}</span>
                          <span>{credit.co2Offset} tons CO₂ offset</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg text-orange-600">{credit.credits} BCT</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Download className="w-3 h-3 mr-1" />
                          Certificate
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transaction History */}
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactionHistory.map((tx, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          tx.type === 'purchase' ? 'bg-blue-500' : 'bg-orange-500'
                        }`}></div>
                        <div>
                          <p className="text-sm text-gray-900 capitalize">{tx.type}</p>
                          <p className="text-xs text-gray-600">{tx.project}</p>
                          <p className="text-xs text-gray-500">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-900">{tx.amount} BCT</p>
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-gray-600">${tx.value.toLocaleString()}</p>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-6">
            {/* Retire Credits */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-600" />
                  Retire Credits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Permanently retire credits to claim carbon offset benefits for ESG reporting.
                </p>
                
                <Dialog open={showRetireDialog} onOpenChange={setShowRetireDialog}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <Flame className="w-4 h-4 mr-2" />
                      Retire Credits
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Retire Carbon Credits</DialogTitle>
                      <DialogDescription>
                        This action permanently removes credits from circulation and generates an offset certificate.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="retire-amount">Number of Credits to Retire</Label>
                        <Input
                          id="retire-amount"
                          type="number"
                          value={retireAmount}
                          onChange={(e) => setRetireAmount(e.target.value)}
                          placeholder="Enter amount"
                          max={walletData.availableBalance}
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Available: {walletData.availableBalance} BCT
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="retire-reason">Reason for Retirement</Label>
                        <Textarea
                          id="retire-reason"
                          value={retireReason}
                          onChange={(e) => setRetireReason(e.target.value)}
                          placeholder="e.g., Annual ESG reporting, Corporate sustainability initiative"
                        />
                      </div>
                      
                      <div className="flex gap-3">
                        <Button 
                          onClick={handleRetireCredits}
                          disabled={!retireAmount || !retireReason}
                          className="flex-1"
                        >
                          Retire Credits
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => setShowRetireDialog(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-xs text-amber-800">
                    <AlertCircle className="w-3 h-3 inline mr-1" />
                    Retirement is permanent and irreversible
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Price</span>
                  <span>${walletData.avgPurchasePrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total CO₂ Offset</span>
                  <span className="text-green-600">{getTotalCO2Offset().toLocaleString()} tons</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Projects</span>
                  <span>{purchasedCredits.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Retirement Rate</span>
                  <span>{((walletData.retiredBalance / walletData.totalBalance) * 100).toFixed(1)}%</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full" onClick={() => onNavigate('landing')}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy More Credits
                </Button>
                <Button variant="outline" className="w-full" onClick={() => onNavigate('reports')}>
                  <FileText className="w-4 h-4 mr-2" />
                  Generate ESG Report
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Certificates
                </Button>
                <Button variant="outline" className="w-full">
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