import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowLeft, Send, Download, Clock, CheckCircle, XCircle, ArrowUpRight, ArrowDownLeft, Wallet } from 'lucide-react';

type UserRole = 'community-member' | 'community-leader' | 'community-agent';

interface WalletScreenProps {
  onNavigate: (screen: string) => void;
  userRole: UserRole;
}

export function WalletScreen({ onNavigate, userRole }: WalletScreenProps) {
  const balance = {
    total: '89.5',
    pending: '12.3',
    available: '77.2'
  };

  const transactions = [
    {
      id: '1',
      type: 'received',
      amount: '+5.2',
      description: 'Carbon credits issued',
      project: 'Mangrove Restoration Q3',
      date: '2 hours ago',
      status: 'completed'
    },
    {
      id: '2',
      type: 'sent',
      amount: '-2.1',
      description: 'Transferred to community pool',
      project: 'Community Collective',
      date: '1 day ago',
      status: 'completed'
    },
    {
      id: '3',
      type: 'pending',
      amount: '+8.7',
      description: 'Tree planting verification',
      project: 'Sundarbans Conservation',
      date: '3 days ago',
      status: 'pending'
    },
    {
      id: '4',
      type: 'approved',
      amount: '+15.0',
      description: 'Monitoring data approved',
      project: 'Coastal Protection Initiative',
      date: '1 week ago',
      status: 'approved'
    }
  ];

  const pendingApprovals = [
    {
      id: '1',
      requester: 'Community Agent Sarah',
      amount: '25.5',
      purpose: 'Equipment purchase',
      signatories: '2/3',
      timeLeft: '2 days'
    },
    {
      id: '2',
      requester: 'Project Coordinator',
      amount: '50.0',
      purpose: 'Seedling procurement',
      signatories: '1/3',
      timeLeft: '5 days'
    }
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'received':
      case 'approved':
        return <ArrowDownLeft className="w-4 h-4 text-green-600" />;
      case 'sent':
        return <ArrowUpRight className="w-4 h-4 text-red-600" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-orange-600" />;
      default:
        return <ArrowDownLeft className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
      case 'approved':
        return <Badge variant="outline" className="text-green-600 border-green-300"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
      case 'pending':
        return <Badge variant="outline" className="text-orange-600 border-orange-300"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'failed':
        return <Badge variant="outline" className="text-red-600 border-red-300"><XCircle className="w-3 h-3 mr-1" />Failed</Badge>;
      default:
        return null;
    }
  };

  // Check if user can access wallet - only community leaders
  const canAccessWallet = userRole === 'community-leader';

  if (!canAccessWallet) {
    return (
      <div className="h-full bg-background relative flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Wallet className="w-8 h-8 text-muted-foreground" />
          </div>
          <h2 className="text-lg text-foreground mb-2">Access Restricted</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Wallet access is limited to community leaders only.
          </p>
          <Button onClick={() => onNavigate('home')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-background relative">
      {/* Header */}
      <div className="bg-card px-4 py-4 shadow-sm border-b border-border">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => onNavigate('home')}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-lg text-foreground">Wallet</h1>
            <p className="text-sm text-muted-foreground">Blue Carbon Tokens</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 pb-24">
        {/* Balance Card */}
        <Card className="bg-blue-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">💰</span>
                <p className="text-blue-100">Total Balance</p>
              </div>
              <h2 className="text-4xl mb-4">{balance.total}</h2>
              <div className="flex justify-around text-sm">
                <div>
                  <p className="text-blue-100">Available</p>
                  <p className="text-xl">{balance.available}</p>
                </div>
                <div>
                  <p className="text-blue-100">Pending</p>
                  <p className="text-xl">{balance.pending}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-4">
          <Button variant="outline" className="h-16 flex-col gap-2 bg-blue-50 border-blue-200 hover:bg-blue-100 dark:bg-blue-900/20 dark:border-blue-800 dark:hover:bg-blue-900/30">
            <Send className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800 dark:text-blue-400">Send</span>
          </Button>
          <Button variant="outline" className="h-16 flex-col gap-2 bg-blue-50 border-blue-200 hover:bg-blue-100 dark:bg-blue-900/20 dark:border-blue-800 dark:hover:bg-blue-900/30">
            <Download className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-800 dark:text-blue-400">Receive</span>
          </Button>
          <Button variant="outline" className="h-16 flex-col gap-2 bg-muted border-border hover:bg-muted/80">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Approvals</span>
          </Button>
        </div>

        {/* Pending Multi-Signature Approvals */}
        {pendingApprovals.length > 0 && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-600" />
                Pending Approvals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingApprovals.map((approval) => (
                <div key={approval.id} className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-foreground">{approval.requester}</p>
                    <Badge variant="secondary" className="text-xs">
                      {approval.signatories} signed
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-orange-700 dark:text-orange-400">{approval.amount} BCT</p>
                      <p className="text-xs text-muted-foreground">{approval.purpose}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-orange-600 dark:text-orange-400">{approval.timeLeft} left</p>
                      <Button size="sm" variant="outline" className="mt-1 text-xs h-7">
                        Review
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Recent Transactions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  {getTransactionIcon(transaction.type)}
                  <div>
                    <p className="text-sm text-foreground">{transaction.description}</p>
                    <p className="text-xs text-muted-foreground">{transaction.project}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm ${
                    transaction.type === 'sent' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {transaction.amount} BCT
                  </p>
                  {getStatusBadge(transaction.status)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Blockchain Link */}
        <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700 dark:text-blue-400">View on Blockchain</p>
                <p className="text-xs text-blue-600 dark:text-blue-500">Transaction history & verification</p>
              </div>
              <Button size="sm" variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-600">
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}