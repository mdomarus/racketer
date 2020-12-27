export interface Player {
  id: string;
  name: string;
}

export interface Team {
  player_a: Player;
  player_b: Player;
  id: string;
}

export interface Game {
  id: string;
  date: string;
  location: string;
  type: '4vs4' | '6vs6';
  side_a: Player | Team;
  side_b: Player | Team;
  score_a: number;
  score_b: number;
}

export interface Match {
  id: string;
  games: Game[];
}
