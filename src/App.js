import logo from './logo.svg';
import './App.css';
import ClassCounter from './Component/ClassCounter';
import HookCounter from './Component/HookCounter';
import HookCounterTwo from './Component/HookCounterTwo';
import HookCounterThree from './Component/HookCounterThree';
import HookCounterFour from './Component/HookCounterFour';

function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree /> */}
      <HookCounterFour />
    </div>
  );
}

export default App;
