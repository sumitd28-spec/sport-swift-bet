import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, TrendingUp, Star, Eye, Calendar, Users } from "lucide-react";

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
  odds: {
    home: number;
    draw?: number;
    away: number;
  };
  isLive?: boolean;
  timeLeft?: string;
  category: string;
  viewers?: number;
}

interface BettingMarketsProps {
  activeSport: string;
  onBetSelect: (bet: any) => void;
}

const sampleMatches: { [key: string]: Match[] } = {
  cricket: [
    {
      id: "c1",
      homeTeam: "India W",
      awayTeam: "Australia W",
      homeFlag: "🇮🇳",
      awayFlag: "🇦🇺",
      odds: { home: 2.52, away: 1.65 },
      isLive: true,
      timeLeft: "Coming Up",
      category: "Women's One Day International",
      viewers: 15420
    },
    {
      id: "c2",
      homeTeam: "Pakistan W",
      awayTeam: "United Arab Emirates",
      homeFlag: "🇵🇰",
      awayFlag: "🇦🇪",
      odds: { home: 1.08, away: 11.5 },
      timeLeft: "Coming Up",
      category: "Asia Cup",
      viewers: 8930
    },
    {
      id: "c3",
      homeTeam: "St. Lucia Kings",
      awayTeam: "Guyana Amazon Warriors",
      homeFlag: "🏏",
      awayFlag: "🏏",
      odds: { home: 2.18, away: 1.85 },
      timeLeft: "Coming Up",
      category: "Caribbean Premier League",
      viewers: 12450
    },
    {
      id: "c4",
      homeTeam: "Ireland",
      awayTeam: "England",
      homeFlag: "🇮🇪",
      awayFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      odds: { home: 13.5, away: 1.07 },
      timeLeft: "Today 15:00",
      category: "International Twenty20 Matches",
      viewers: 25340
    },
    {
      id: "c5",
      homeTeam: "Barbados Royals W",
      awayTeam: "Guyana Amazon Warriors W",
      homeFlag: "🏏",
      awayFlag: "🏏",
      odds: { home: 1.7, away: 2.38 },
      timeLeft: "Today 23:30",
      category: "Women's Caribbean Premier League",
      viewers: 8760
    }
  ],
  soccer: [
    {
      id: "s1",
      homeTeam: "Chelsea",
      awayTeam: "Arsenal",
      homeFlag: "🔵",
      awayFlag: "🔴",
      odds: { home: 2.5, draw: 3.2, away: 2.8 },
      isLive: true,
      timeLeft: "67'",
      category: "Premier League",
      viewers: 25670
    },
    {
      id: "s2",
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      homeFlag: "🔴",
      awayFlag: "⚪",
      odds: { home: 2.1, draw: 3.5, away: 3.1 },
      timeLeft: "Tomorrow 8:00 PM",
      category: "La Liga",
      viewers: 45230
    }
  ],
  tennis: [
    {
      id: "t1",
      homeTeam: "Novak Djokovic",
      awayTeam: "Rafael Nadal",
      homeFlag: "🇷🇸",
      awayFlag: "🇪🇸",
      odds: { home: 1.7, away: 2.3 },
      isLive: true,
      timeLeft: "Set 2",
      category: "ATP Masters",
      viewers: 12450
    }
  ]
};

export const BettingMarkets = ({ activeSport, onBetSelect }: BettingMarketsProps) => {
  const [activeTab, setActiveTab] = useState("featured");
  
  const matches = sampleMatches[activeSport] || [];

  const renderOddsButton = (odds: number, label: string, matchId: string, type: string) => (
    <button
      onClick={() => onBetSelect({ matchId, type, odds, label })}
      className="bg-blue-100 hover:bg-blue-200 text-blue-900 font-semibold px-4 py-2 rounded min-w-[60px] text-center transition-colors border border-blue-200"
    >
      {odds.toFixed(2)}
    </button>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold capitalize">{activeSport} Markets</h2>
          <p className="text-muted-foreground">Live and upcoming matches</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="gap-1">
            <Eye className="h-3 w-3" />
            {matches.filter(m => m.isLive).length} Live
          </Badge>
          <Badge variant="outline">
            {matches.length} Total Markets
          </Badge>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="live">Live Now</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="space-y-3 mt-6">
          {matches.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">No markets available for {activeSport} at the moment.</p>
                <p className="text-sm text-muted-foreground mt-2">Check back soon for exciting betting opportunities!</p>
              </CardContent>
            </Card>
          ) : (
            matches.map((match) => (
              <Card key={match.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-blue-900 text-white px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">{match.category}</span>
                    <Badge variant={match.isLive ? "destructive" : "secondary"} className="text-xs">
                      {match.isLive ? "LIVE" : "Coming Up"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-3 w-3" />
                    <span>{match.timeLeft}</span>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="grid grid-cols-12 gap-4">
                    {/* Teams and Odds */}
                    <div className="col-span-12 space-y-3">
                      {/* Header with odds labels */}
                      <div className="grid grid-cols-12 items-center text-sm font-medium text-gray-600">
                        <div className="col-span-6"></div>
                        <div className="col-span-2 text-center">1</div>
                        <div className="col-span-2 text-center">X</div>
                        <div className="col-span-2 text-center">2</div>
                      </div>
                      
                      {/* Match row */}
                      <div className="grid grid-cols-12 items-center py-2 border-b border-gray-100">
                        <div className="col-span-6">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm font-medium">
                              <span className="text-lg">{match.homeFlag}</span>
                              <span>{match.homeTeam}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium">
                              <span className="text-lg">{match.awayFlag}</span>
                              <span>{match.awayTeam}</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          {renderOddsButton(match.odds.home, "Home", match.id, "home")}
                        </div>
                        <div className="col-span-2 text-center">
                          {match.odds.draw ? renderOddsButton(match.odds.draw, "Draw", match.id, "draw") : (
                            <span className="text-gray-400 text-sm">-</span>
                          )}
                        </div>
                        <div className="col-span-2 text-center">
                          {renderOddsButton(match.odds.away, "Away", match.id, "away")}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional info */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      {match.viewers && (
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{match.viewers.toLocaleString()} viewers</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>Full Time Result</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      <Star className="h-3 w-3 mr-1" />
                      Add to Favorites
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="live" className="space-y-4 mt-6">
          {matches.filter(m => m.isLive).map((match) => (
            <Card key={match.id} className="shadow-card border-destructive/20">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="destructive" className="animate-pulse-glow">
                    ● LIVE
                  </Badge>
                  <span className="text-sm text-muted-foreground">{match.category}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{match.homeFlag}</span>
                      <span className="font-semibold">{match.homeTeam}</span>
                    </div>
                    {renderOddsButton(match.odds.home, "Home", match.id, "home")}
                  </div>
                  
                  {match.odds.draw && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🤝</span>
                        <span className="text-muted-foreground">Draw</span>
                      </div>
                      {renderOddsButton(match.odds.draw, "Draw", match.id, "draw")}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{match.awayFlag}</span>
                      <span className="font-semibold">{match.awayTeam}</span>
                    </div>
                    {renderOddsButton(match.odds.away, "Away", match.id, "away")}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4 mt-6">
          {matches.filter(m => !m.isLive).map((match) => (
            <Card key={match.id} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{match.homeFlag}</span>
                      <span className="font-semibold">{match.homeTeam}</span>
                      <span className="text-muted-foreground">vs</span>
                      <span className="text-xl">{match.awayFlag}</span>
                      <span className="font-semibold">{match.awayTeam}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {match.timeLeft}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {renderOddsButton(match.odds.home, "Home", match.id, "home")}
                    {match.odds.draw && renderOddsButton(match.odds.draw, "Draw", match.id, "draw")}
                    {renderOddsButton(match.odds.away, "Away", match.id, "away")}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="popular" className="space-y-4 mt-6">
          <div className="text-center py-8">
            <p className="text-muted-foreground">Popular markets will be displayed here based on betting volume and user interest.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};