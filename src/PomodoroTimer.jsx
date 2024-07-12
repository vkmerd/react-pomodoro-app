import { useEffect } from 'react';
import { usePomodoro } from './context/PomodoroContext';

const PomodoroTimer = () => {
  const { state, dispatch } = usePomodoro();
  const { isRunning, time } = state;

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, time, dispatch]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div style={{ color: 'white', fontSize: '48px' }}>
      {formatTime(time)}
    </div>
  );
};

export default PomodoroTimer;