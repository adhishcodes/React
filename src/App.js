import './App.css';
import Parent from './Props/Parents';
import PropClassComp from './Props/PropsClassComp';
import PropsFunctional from './Props/PropsFunctional';
import Greeting from './Props/defaultProps';

function App() {
  return (
    <div className="App">
      <Greeting />
      <PropClassComp/>
      <Parent/>
    </div>

  )
}

export default App;