import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCw, X } from "lucide-react";

interface Bet {
  id: string;
  runnerName: string;
  betPrice: number;
  betSize: number;
  type: 'unmatched' | 'matched';
}

interface MyBetsProps {
  bets: Bet[];
  onRemoveBet?: (betId: string) => void;
  onRefresh?: () => void;
}

export const MyBets = ({ bets = [], onRemoveBet, onRefresh }: MyBetsProps) => {
  const [activeTab, setActiveTab] = useState("unmatched");
  
  const unmatchedBets = bets.filter(bet => bet.type === 'unmatched');
  const matchedBets = bets.filter(bet => bet.type === 'matched');

  const handleCancelAll = () => {
    unmatchedBets.forEach(bet => onRemoveBet?.(bet.id));
  };

  return (
    <Card className="w-full bg-white border border-gray-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">My Bets</CardTitle>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onRefresh}
            className="p-1"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 rounded-none border-b">
            <TabsTrigger value="unmatched" className="rounded-none">
              Unmatched Bets
            </TabsTrigger>
            <TabsTrigger value="matched" className="rounded-none">
              Matched Bets
            </TabsTrigger>
          </TabsList>

          <TabsContent value="unmatched" className="mt-0">
            <div className="p-4">
              {unmatchedBets.length > 0 && (
                <div className="flex justify-end mb-3">
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={handleCancelAll}
                  >
                    Cancel All
                  </Button>
                </div>
              )}
              
              {unmatchedBets.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-sm">No unmatched bets</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="grid grid-cols-12 gap-2 text-xs font-medium text-gray-600 border-b pb-2">
                    <div className="col-span-4">Runner Name</div>
                    <div className="col-span-3">Bet Price</div>
                    <div className="col-span-3">Bet Size</div>
                    <div className="col-span-2"></div>
                  </div>
                  
                  {unmatchedBets.map((bet) => (
                    <div key={bet.id} className="grid grid-cols-12 gap-2 text-xs py-2 border-b border-gray-100">
                      <div className="col-span-4 font-medium">{bet.runnerName}</div>
                      <div className="col-span-3 text-blue-600 font-medium">{bet.betPrice.toFixed(2)}</div>
                      <div className="col-span-3 font-medium">{bet.betSize}</div>
                      <div className="col-span-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => onRemoveBet?.(bet.id)}
                          className="p-1 h-6 w-6"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {unmatchedBets.length > 0 && (
                <div className="mt-4 text-right text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>Average Bet?</span>
                    <label className="flex items-center gap-1">
                      <input type="checkbox" className="w-3 h-3" />
                      <span>OFF</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="matched" className="mt-0">
            <div className="p-4">
              {matchedBets.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-sm">No matched bets</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="grid grid-cols-12 gap-2 text-xs font-medium text-gray-600 border-b pb-2">
                    <div className="col-span-4">Runner Name</div>
                    <div className="col-span-3">Bet Price</div>
                    <div className="col-span-5">Bet Size</div>
                  </div>
                  
                  {matchedBets.map((bet) => (
                    <div key={bet.id} className="grid grid-cols-12 gap-2 text-xs py-2 border-b border-gray-100">
                      <div className="col-span-4 font-medium">{bet.runnerName}</div>
                      <div className="col-span-3 text-green-600 font-medium">{bet.betPrice.toFixed(2)}</div>
                      <div className="col-span-5 font-medium">{bet.betSize}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};