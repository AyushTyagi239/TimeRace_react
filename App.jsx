import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="Easy"  time={1}/>
        <TimerChallange title="Not Easy"  time={5}/>
        <TimerChallange title="Getting Tough"  time={10}/>
        <TimerChallange title="Pros Only"  time={15}/>
      </div>
    </>
  );
}

export default App;
