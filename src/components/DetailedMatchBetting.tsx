import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackLayOdds } from "./BackLayOdds";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

interface DetailedMatch {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
  tournament: string;
  startTime: string;
  timeRemaining: string;
  matched: string;
  odds: {
    [team: string]: {
      back: { price: number; size: string }[];
      lay: { price: number; size: string }[];
    };
  };
  lines?: {
    name: string;
    odds: {
      [option: string]: {
        back: { price: number; size: string }[];
        lay: { price: number; size: string }[];
      };
    };
  }[];
}

interface DetailedMatchBettingProps {
  match: DetailedMatch;
  onBetSelect: (bet: any) => void;
}

export const DetailedMatchBetting = ({ match, onBetSelect }: DetailedMatchBettingProps) => {
  const [expandedLines, setExpandedLines] = useState<string[]>([]);

  const toggleLine = (lineName: string) => {
    setExpandedLines(prev => 
      prev.includes(lineName) 
        ? prev.filter(name => name !== lineName)
        : [...prev, lineName]
    );
  };

  return (
    <div className="space-y-4">
      {/* Match Header */}
      <Card className="bg-gray-50 border-gray-200">
        <CardContent className="p-4">
          <div className="grid grid-cols-12 gap-4 text-sm">
            <div className="col-span-4">
              <div className="mb-2">
                <span className="font-medium">StartTime:</span> {match.startTime}
              </div>
              <div>
                <span className="font-medium">Time Remaining:</span> {match.timeRemaining}
              </div>
            </div>
            <div className="col-span-4 text-center">
              <div className="font-medium">Number of Winner</div>
              <div className="text-lg font-bold">1</div>
            </div>
            <div className="col-span-4 text-right">
              <div className="font-medium">Market Liability</div>
              <div className="text-lg font-bold">0.00</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Match Odds */}
      <Card className="border-gray-200">
        <CardHeader className="bg-orange-400 text-white p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-orange-500 px-2 py-1 rounded text-xs font-semibold">Ladder</span>
              <span className="font-medium">Match Odds</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span>MATCHED: {match.matched}</span>
              <Button variant="ghost" size="sm" className="text-white hover:bg-orange-500 p-1">
                <Info className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="grid grid-cols-12 bg-gray-100 text-sm font-medium text-gray-700 py-2 px-4">
            <div className="col-span-6"></div>
            <div className="col-span-3 text-center">Back</div>
            <div className="col-span-3 text-center">Lay</div>
          </div>
          
          {/* Home Team */}
          <div className="grid grid-cols-12 items-center py-3 px-4 border-b border-gray-100">
            <div className="col-span-6 flex items-center gap-3">
              <span className="text-2xl">{match.homeFlag}</span>
              <span className="font-medium">{match.homeTeam}</span>
            </div>
            <div className="col-span-6">
              <BackLayOdds 
                odds={match.odds[match.homeTeam]} 
                onBetSelect={onBetSelect}
                teamName={match.homeTeam}
                matchId={match.id}
              />
            </div>
          </div>
          
          {/* Away Team */}
          <div className="grid grid-cols-12 items-center py-3 px-4">
            <div className="col-span-6 flex items-center gap-3">
              <span className="text-2xl">{match.awayFlag}</span>
              <span className="font-medium">{match.awayTeam}</span>
            </div>
            <div className="col-span-6">
              <BackLayOdds 
                odds={match.odds[match.awayTeam]} 
                onBetSelect={onBetSelect}
                teamName={match.awayTeam}
                matchId={match.id}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Betting Lines */}
      {match.lines?.map((line) => (
        <Card key={line.name} className="border-gray-200">
          <CardHeader 
            className="bg-blue-600 text-white p-3 cursor-pointer"
            onClick={() => toggleLine(line.name)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span className="font-medium">{line.name}</span>
                <Badge variant="secondary" className="bg-orange-500 text-white text-xs">
                  Ladder
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700 text-xs">
                  Book
                </Button>
                {expandedLines.includes(line.name) ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
            </div>
          </CardHeader>
          
          {expandedLines.includes(line.name) && (
            <CardContent className="p-0">
              <div className="grid grid-cols-12 bg-gray-100 text-sm font-medium text-gray-700 py-2 px-4">
                <div className="col-span-6"></div>
                <div className="col-span-3 text-center">Back</div>
                <div className="col-span-3 text-center">Lay</div>
              </div>
              
              {Object.entries(line.odds).map(([option, odds]) => (
                <div key={option} className="grid grid-cols-12 items-center py-3 px-4 border-b border-gray-100 last:border-b-0">
                  <div className="col-span-6">
                    <span className="font-medium">{option}</span>
                  </div>
                  <div className="col-span-6">
                    <BackLayOdds 
                      odds={odds} 
                      onBetSelect={onBetSelect}
                      teamName={option}
                      matchId={match.id}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};