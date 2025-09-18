import { Button } from "@/components/ui/button";

interface OddsData {
  back: { price: number; size: string }[];
  lay: { price: number; size: string }[];
}

interface BackLayOddsProps {
  odds: OddsData;
  onBetSelect: (bet: any) => void;
  teamName: string;
  matchId: string;
}

export const BackLayOdds = ({ odds, onBetSelect, teamName, matchId }: BackLayOddsProps) => {
  const handleBackBet = (price: number, size: string) => {
    onBetSelect({
      matchId,
      type: 'back',
      odds: price,
      label: `Back ${teamName}`,
      size
    });
  };

  const handleLayBet = (price: number, size: string) => {
    onBetSelect({
      matchId,
      type: 'lay',
      odds: price,
      label: `Lay ${teamName}`,
      size
    });
  };

  return (
    <div className="grid grid-cols-6 gap-1">
      {/* Back odds */}
      <div className="col-span-3 grid grid-cols-3 gap-1">
        {odds.back.map((back, index) => (
          <Button
            key={`back-${index}`}
            variant="ghost"
            size="sm"
            onClick={() => handleBackBet(back.price, back.size)}
            className="bg-blue-100 hover:bg-blue-200 text-blue-900 border border-blue-200 p-1 h-auto flex flex-col text-xs"
          >
            <div className="font-semibold">{back.price.toFixed(2)}</div>
            <div className="text-xs opacity-75">{back.size}</div>
          </Button>
        ))}
      </div>
      
      {/* Lay odds */}
      <div className="col-span-3 grid grid-cols-3 gap-1">
        {odds.lay.map((lay, index) => (
          <Button
            key={`lay-${index}`}
            variant="ghost"
            size="sm"
            onClick={() => handleLayBet(lay.price, lay.size)}
            className="bg-pink-100 hover:bg-pink-200 text-pink-900 border border-pink-200 p-1 h-auto flex flex-col text-xs"
          >
            <div className="font-semibold">{lay.price.toFixed(2)}</div>
            <div className="text-xs opacity-75">{lay.size}</div>
          </Button>
        ))}
      </div>
    </div>
  );
};