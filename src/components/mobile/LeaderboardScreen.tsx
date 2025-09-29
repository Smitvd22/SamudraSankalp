import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { ArrowLeft, Trophy, Star, Crown, Medal, TrendingUp } from 'lucide-react';

interface LeaderboardScreenProps {
  onNavigate: (screen: string) => void;
}

export function LeaderboardScreen({ onNavigate }: LeaderboardScreenProps) {
  const leaderboard = [
    {
      rank: 1,
      name: 'Sundarbans Warriors',
      points: 2847,
      avatar: 'SW',
      trend: '+127',
      isCurrentUser: false
    },
    {
      rank: 2,
      name: 'Mangrove Guardians',
      points: 2156,
      avatar: 'MG',
      trend: '+98',
      isCurrentUser: false
    },
    {
      rank: 3,
      name: 'Green Coast Collective',
      points: 1892,
      avatar: 'GC',
      trend: '+156',
      isCurrentUser: true
    },
    {
      rank: 4,
      name: 'Ocean Protectors',
      points: 1654,
      avatar: 'OP',
      trend: '+89',
      isCurrentUser: false
    },
    {
      rank: 5,
      name: 'Coastal Healers',
      points: 1432,
      avatar: 'CH',
      trend: '+67',
      isCurrentUser: false
    },
    {
      rank: 6,
      name: 'Blue Carbon Builders',
      points: 1298,
      avatar: 'BC',
      trend: '+45',
      isCurrentUser: false
    },
    {
      rank: 7,
      name: 'Marine Protectors',
      points: 1156,
      avatar: 'MP',
      trend: '+78',
      isCurrentUser: false
    },
    {
      rank: 8,
      name: 'Coastal Guardians',
      points: 1023,
      avatar: 'CG',
      trend: '+34',
      isCurrentUser: false
    }
  ];

  const achievements = [
    { icon: '🌱', title: 'Tree Master', achieved: true },
    { icon: '📊', title: 'Data Expert', achieved: true },
    { icon: '🤝', title: 'Team Player', achieved: true },
    { icon: '🌟', title: 'Rising Star', achieved: false }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-orange-500" />;
      default:
        return (
          <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs text-muted-foreground">#{rank}</span>
          </div>
        );
    }
  };

  const currentUser = leaderboard.find(user => user.isCurrentUser);

  return (
    <div className="h-full bg-background relative">
      {/* Header */}
      <div className="bg-card px-4 py-4 shadow-sm border-b border-border">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => onNavigate('home')}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-lg text-foreground">Leaderboard</h1>
            <p className="text-sm text-muted-foreground">Community rankings</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6 pb-24">
        {/* User's Current Rank */}
        <Card className="bg-blue-600 text-white border-0 shadow-lg">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-lg mr-2">Your Rank: #{currentUser?.rank}</span>
              {getRankIcon(currentUser?.rank || 3)}
            </div>
            <h2 className="text-lg mb-1">{currentUser?.name}</h2>
            <p className="text-blue-100 mb-1">{currentUser?.points} points</p>
            <div className="flex items-center justify-center gap-1 text-sm text-blue-200">
              <TrendingUp className="w-3 h-3" />
              <span>{currentUser?.trend} this month</span>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard Table */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Community Rankings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12 text-center">Rank</TableHead>
                  <TableHead>Community</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                  <TableHead className="text-right">Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboard.map((community) => (
                  <TableRow 
                    key={community.rank}
                    className={community.isCurrentUser ? 'bg-blue-50 dark:bg-blue-900/20' : ''}
                  >
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center">
                        {getRankIcon(community.rank)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-blue-600 text-white text-xs">
                            {community.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <span className={`text-sm ${community.isCurrentUser ? 'font-medium' : ''}`}>
                          {community.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {community.points.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1 text-green-600">
                        <TrendingUp className="w-3 h-3" />
                        <span className="text-sm">{community.trend}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Star className="w-5 h-5 text-blue-600" />
              Your Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg text-center border ${
                    achievement.achieved 
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' 
                      : 'bg-muted border-border'
                  }`}
                >
                  <div className="text-xl mb-1">{achievement.icon}</div>
                  <h4 className={`text-sm font-medium ${
                    achievement.achieved ? 'text-blue-800 dark:text-blue-400' : 'text-muted-foreground'
                  }`}>
                    {achievement.title}
                  </h4>
                  {achievement.achieved && (
                    <Badge variant="secondary" className="mt-2 text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200">
                      Achieved
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Motivational Section */}
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl mb-2">🌟</div>
            <h3 className="text-lg text-blue-900 dark:text-blue-400 mb-2">Keep Going!</h3>
            <p className="text-sm text-blue-800 dark:text-blue-500 mb-4">
              You're making a real impact on our coastal ecosystem. Every action counts!
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <TrendingUp className="w-4 h-4 mr-2" />
              View Progress
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}