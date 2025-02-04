import { Player } from './player';

// Surely not the best choice
export type Point = number;

export type PointsData = {
  PLAYER_ONE: Point;
  PLAYER_TWO: Point;
};

export type Points = {
  kind: 'POINTS';
  pointsData: PointsData;
};

export const points = (
  playerOnePoints: Point,
  playerTwoPoints: Point
): Points => ({
  kind: 'POINTS',
  pointsData: {
    PLAYER_ONE: playerOnePoints,
    PLAYER_TWO: playerTwoPoints,
  },
});

// Exerice 0: Write all type constructors of Points, Deuce, Forty and Advantage types.

export type Game = {
  kind: 'GAME';
  player: Player; // Player has won
};

export const game = (winner: Player): Game => ({
  kind: 'GAME',
  player: winner,
});


export type Deuce = {
  kind: 'DEUCE';
};

export const deuce = (): Deuce => ({ kind: 'DEUCE' });

export type Forty = {
  kind: 'FORTY';
  player: Player;
  otherPoint: Point;
};

export const forty = (leadingPlayer: Player, otherPoint: Point): Forty => ({
  kind: 'FORTY',
  player: leadingPlayer,
  otherPoint: otherPoint,
});

export type Advantage = {
  kind: 'ADVANTAGE';
  player: Player;
};

export const advantage = (leadingPlayer: Player): Advantage => ({
  kind: 'ADVANTAGE',
  player: leadingPlayer,
});

export type Thirty = {
  value: number;
  kind: 'THIRTY';
};

export const thirty = (): Thirty => ({
  kind: 'THIRTY',
  value: 0
});


export type Score = Points | Deuce | Forty | Advantage | Game;
