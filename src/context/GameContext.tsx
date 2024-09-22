import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface Game {
  id: string;
  game_category: string;
  gameId: string;
  game_name: string;
  game_url: string;
  game_image_url: string;
}

interface GameState {
  games: Game[];
  loading: boolean;
  error: string | null;
}

type GameAction =
  | { type: 'FETCH_GAMES_START' }
  | { type: 'FETCH_GAMES_SUCCESS'; payload: Game[] }
  | { type: 'FETCH_GAMES_ERROR'; payload: string };

const GameStateContext = createContext<GameState | undefined>(undefined);
const GameDispatchContext = createContext<React.Dispatch<GameAction> | undefined>(undefined);

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'FETCH_GAMES_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_GAMES_SUCCESS':
      return { ...state, loading: false, games: action.payload };
    case 'FETCH_GAMES_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, {
    games: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchGames = async () => {
      dispatch({ type: 'FETCH_GAMES_START' });
      try {
        const response = await fetch('https://oldnlpyv7i.execute-api.us-east-1.amazonaws.com/prod/games');
        if (!response.ok) {
          throw new Error('Oyunlar yüklenirken bir hata oluştu');
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_GAMES_SUCCESS', payload: data });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Bilinmeyen bir hata oluştu';
        dispatch({ type: 'FETCH_GAMES_ERROR', payload: errorMessage });
      }
    };

    fetchGames();
  }, []);

  return (
    <GameStateContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameProvider');
  }
  return context;
};

export const useGameDispatch = () => {
  const context = useContext(GameDispatchContext);
  if (context === undefined) {
    throw new Error('useGameDispatch must be used within a GameProvider');
  }
  return context;
};