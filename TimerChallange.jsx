import { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallange({ title, time }) {
  // const [timerExpired , setTimerExpired] = useState(false);
  // const [timerStarted , setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(time * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < time * 1000; // replacement for setTimerExpired(true);

  const dialog = useRef();
  const timer = useRef();
  

  useEffect(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer.current);
      
      dialog.current.open(); // open dialog when time runs out
    }
  }, [timeRemaining, time]);
  
function handleReset(){
  setTimeRemaining(time * 1000); // reset timer
}

  function handleStart() {
    timer.current = setInterval(() => {
      // setTimerExpired(true);
      // dialog.current.showModal(); // This is assuming you have <dialog> or the modal will show as expected

      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10); 
      // Decrease the previous time remaining by 10
    }, 10);
    
    // setTimerStarted(true);
  }

  function handleStop() {
    clearInterval(timer.current); // fixed: should be clearInterval, not clearTimeout
    dialog.current.open();
  }

  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={time} 
      remainingTime ={timeRemaining}
      onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {time} second{time > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'}
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running....' : 'Timer is not active'}
        </p>
      </section>
    </>
  );
}
