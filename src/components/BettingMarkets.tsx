import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, TrendingUp, Star, Eye } from "lucide-react";

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
      homeTeam: "India",
      awayTeam: "Australia",
      homeFlag: "🇮🇳",
      awayFlag: "🇦🇺",
      odds: { home: 2.1, away: 1.8 },
      isLive: true,
      timeLeft: "2nd Innings",
      category: "Test Match",
      viewers: 15420
    },
    {
      id: "c2",
      homeTeam: "England",
      awayTeam: "Pakistan",
      homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      awayFlag: "🇵🇰",
      odds: { home: 1.9, away: 2.2 },
      timeLeft: "Starts in 2h",
      category: "ODI",
      viewers: 8930
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
      className="odds-button min-w-[60px] text-center"
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

        <TabsContent value="featured" className="space-y-4 mt-6">
          {matches.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">No markets available for {activeSport} at the moment.</p>
                <p className="text-sm text-muted-foreground mt-2">Check back soon for exciting betting opportunities!</p>
              </CardContent>
            </Card>
          ) : (
            matches.map((match) => (
              <Card key={match.id} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant={match.isLive ? "destructive" : "secondary"}>
                        {match.isLive ? "LIVE" : "UPCOMING"}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{match.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {match.viewers && (
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {match.viewers.toLocaleString()}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {match.timeLeft}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Teams */}
                    <div className="col-span-8 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{match.homeFlag}</span>
                          <span className="font-semibold">{match.homeTeam}</span>
                        </div>
                        {renderOddsButton(match.odds.home, "Home", match.id, "home")}
                      </div>
                      
                      {match.odds.draw && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">🤝</span>
                            <span className="text-muted-foreground">Draw</span>
                          </div>
                          {renderOddsButton(match.odds.draw, "Draw", match.id, "draw")}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{match.awayFlag}</span>
                          <span className="font-semibold">{match.awayTeam}</span>
                        </div>
                        {renderOddsButton(match.odds.away, "Away", match.id, "away")}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="col-span-4 flex flex-col gap-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        More Markets
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full">
                        <Star className="h-4 w-4 mr-2" />
                        Add to Favorites
                      </Button>
                    </div>
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