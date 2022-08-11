import './App.css';
import Sound from './Sound';
import SoundEffect from './assets/AudioConstant'

function App() {
  return (
    <div className="App">
      <p className='Title'>Stream Sound Effect</p>
      <div className='sound-container'>
      {
        SoundEffect.map((soundEffect, index) =>
        <Sound
        audioPath={soundEffect[0]}
        audioText={soundEffect[1]}
        key={index}
        />
        )
      }
      </div>
    </div>
  );
}

export default App;
