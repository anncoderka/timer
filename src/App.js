import './App.scss';
import FormattedTime from './FormattedTime/FormattedTime';
import { useState, useEffect } from 'react';

function App() {

  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState(0);

  useEffect(() => {

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, []);

  const start = () => {
    stop();
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
  }

  const stop = () => {
    if (timer) {
      clearInterval(timer);
    }
  }

  const reset = () => {
    if (timer) {
      clearInterval(timer)
    }
    setTime(0);
  }

  return (
    <div className="App">
      <FormattedTime time={time}/>
      <button className='button' onClick={start}>Start</button>
      <button className='button' onClick={stop}>Stop</button>
      <button className='button' onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
