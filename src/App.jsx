import { Container, Box, Button } from '@mui/material';
import { PomodoroProvider, usePomodoro } from './context/PomodoroContext';
import PomodoroTimer from './PomodoroTimer';

export default function App() {
  return (
    <PomodoroProvider>
      <Container maxWidth="xl" style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box component="div" style={{ width: "35%", height: "50%", backgroundColor: "#161932", borderRadius: "50%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",                                                                                                                                                                                  display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <PomodoroTimer />
          <Controls />
        </Box>
      </Container>
    </PomodoroProvider>
  );
}

const Controls = () => {
  const { state, dispatch } = usePomodoro();
  const { isRunning } = state;

  const startPauseHandler = () => {
    if (isRunning) {
      dispatch({ type: 'PAUSE' });
    } else {
      dispatch({ type: 'START' });
    }
  };

  const resetHandler = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <Button variant="contained" onClick={startPauseHandler}>
        {isRunning ? 'Pause' : 'Start'}
      </Button>
      <Button variant="contained" onClick={resetHandler} style={{ marginLeft: '10px' }}>
        Reset
      </Button>
    </div>
  );
};