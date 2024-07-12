import { createContext, useReducer, useContext } from 'react';

const PomodoroContext = createContext();

const initialState = {
  isRunning: false,
  time: 1500, 
};

const pomodoroReducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return { ...state, isRunning: true };
    case 'PAUSE':
      return { ...state, isRunning: false };
    case 'RESET':
      return { ...state, isRunning: false, time: 1500 };
    case 'TICK':
      return { ...state, time: state.time - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const PomodoroProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pomodoroReducer, initialState);

  return (
    <PomodoroContext.Provider value={{ state, dispatch }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export const usePomodoro = () => useContext(PomodoroContext);