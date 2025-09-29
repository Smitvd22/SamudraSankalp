import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { 
  ArrowLeft, FileCheck, Signature, Coins, ExternalLink, 
  CheckCircle, Copy, Download, AlertCircle, Shield, Hash
} from 'lucide-react';

interface CreditIssuanceWorkflowProps {
  onNavigate: (screen: string) => void;
}

export function CreditIssuanceWorkflow({ onNavigate }: CreditIssuanceWorkflowProps) {
  const [digitalSignature, setDigitalSignature] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [transactionHash, setTransactionHash] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const verificationReport = {
    projectId: 'SUN-2024-127',
    projectTitle: 'Sundarbans Mangrove Restoration Phase 2',
    community: 'Sundarbans Warriors Collective',
    verifiedBy: 'Dr. Sarah Martinez, Certified Carbon Auditor',
    verificationDate: '2024-03-20',
    area: '2.5 hectares',
    speciesPlanted: 'Avicennia marina (60%), Rhizophora apiculata (40%)',
    treesPlanted: 1250,
    estimatedSequestration: '125 tons CO₂ over 10 years',
    creditAmount: 125,
    qualityScore: 'A+ Grade',
    complianceStandards: ['Verra VCS', 'Gold Standard', 'NCCR Guidelines']
  };

  const blockchainDetails = {
    network: 'Polygon Mainnet',
    contractAddress: '0x742d35Cc6634C0532925a3b8D86c6C4cD558E7E1',
    gasEstimate: '0.0045 MATIC',
    estimatedTime: '2-3 minutes'
  };

  const handleMintCredits = () => {
    if (!digitalSignature.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate blockchain transaction
    setTimeout(() => {
      setTransactionHash('0xa1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456');
      setIsProcessing(false);
      setShowConfirmation(true);
    }, 3000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => onNavigate('dashboard')}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-xl text-gray-900">Credit Issuance Workflow</h1>
              <p className="text-gray-600">Mint verified carbon credits to blockchain</p>
            </div>
          </div>
          <Badge variant="outline" className="text-green-600">
            Verified & Ready
          </Badge>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Verification Report Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-green-600" />
                Verification Report Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Project ID</p>
                    <p className="text-gray-900">{verificationReport.projectId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Project Title</p>
                    <p className="text-gray-900">{verificationReport.projectTitle}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Community</p>
                    <p className="text-gray-900">{verificationReport.community}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Verified By</p>
                    <p className="text-gray-900">{verificationReport.verifiedBy}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Verification Date</p>
                    <p className="text-gray-900">{verificationReport.verificationDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Area Verified</p>
                    <p className="text-gray-900">{verificationReport.area}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Trees Planted</p>
                    <p className="text-gray-900">{verificationReport.treesPlanted.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Quality Score</p>
                    <Badge variant="outline" className="text-green-600">
                      {verificationReport.qualityScore}
                    </Badge>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4 text-center">
                    <Coins className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl text-blue-900 mb-1">{verificationReport.creditAmount}</p>
                    <p className="text-sm text-blue-700">BCT Credits to Mint</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4 text-center">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl text-green-900 mb-1">{verificationReport.estimatedSequestration.split(' ')[0]}</p>
                    <p className="text-sm text-green-700">Tons CO₂ Sequestered</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-4 text-center">
                    <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-2xl text-purple-900 mb-1">{verificationReport.complianceStandards.length}</p>
                    <p className="text-sm text-purple-700">Standards Compliant</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Compliance Standards:</p>
                <div className="flex flex-wrap gap-2">
                  {verificationReport.complianceStandards.map((standard, index) => (
                    <Badge key={index} variant="secondary">
                      {standard}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Digital Signature */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Signature className="w-5 h-5 text-purple-600" />
                Auditor Digital Signature
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="signature">Digital Signature</Label>
                  <Input
                    id="signature"
                    type="password"
                    placeholder="Enter your digital signature key"
                    value={digitalSignature}
                    onChange={(e) => setDigitalSignature(e.target.value)}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    This signature will be permanently recorded on the blockchain
                  </p>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-amber-800">
                      <p className="mb-1">Important: This action is irreversible</p>
                      <p>By signing, you certify that the verification has been completed according to all applicable standards and regulations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Blockchain Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="w-5 h-5 text-blue-600" />
                Blockchain Transaction Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Network</p>
                  <p className="text-gray-900">{blockchainDetails.network}</p>
                </div>
                <div>
                  <p className="text-gray-600">Smart Contract</p>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-900 font-mono text-xs">{blockchainDetails.contractAddress}</p>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard(blockchainDetails.contractAddress)}>
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600">Estimated Gas Fee</p>
                  <p className="text-gray-900">{blockchainDetails.gasEstimate}</p>
                </div>
                <div>
                  <p className="text-gray-600">Processing Time</p>
                  <p className="text-gray-900">{blockchainDetails.estimatedTime}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mint Credits Button */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <Button
                  onClick={handleMintCredits}
                  disabled={!digitalSignature.trim() || isProcessing}
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg"
                  size="lg"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing Transaction...
                    </>
                  ) : (
                    <>
                      <Coins className="w-5 h-5 mr-2" />
                      Mint {verificationReport.creditAmount} BCT Credits
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-gray-600">
                  This will trigger the smart contract to mint carbon credits on the blockchain
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              Credits Successfully Minted!
            </DialogTitle>
            <DialogDescription>
              Your carbon credits have been successfully minted and recorded on the blockchain.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-center">
                <p className="text-2xl text-green-600 mb-2">🎉</p>
                <p className="text-lg text-green-800 mb-1">{verificationReport.creditAmount} BCT Credits Minted</p>
                <p className="text-sm text-green-600">Transaction completed successfully</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Transaction Hash:</span>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(transactionHash)}>
                  <Copy className="w-3 h-3" />
                </Button>
              </div>
              <p className="text-xs font-mono bg-gray-100 p-2 rounded break-all">
                {transactionHash}
              </p>
            </div>

            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => window.open(`https://polygonscan.com/tx/${transactionHash}`, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Explorer
              </Button>
              <Button variant="outline" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download Receipt
              </Button>
            </div>

            <Button 
              onClick={() => {
                setShowConfirmation(false);
                onNavigate('dashboard');
              }}
              className="w-full"
            >
              Return to Dashboard
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}