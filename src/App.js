import './App.css';
import CounterWithReducer from './components/CounterWithReducer';
import CounterWithUseState from './components/CounterWithUseState';
import FormWithReducerLvl1 from './components/FormWithReducerLvl1';
import FormWithReducerLvl2 from './components/FormWithReducerLvl2';
import FormWithReducerLvl3 from './components/FormWithReducerLvl3';
import FormWithUseStateLvl1 from './components/FormWithUseStateLvl1';
import FormWithUseStateLvl2 from './components/FormWithUseStateLvl2';
import FormWithUseStateLvl3 from './components/FormWithUseStateLvl3';

function App() {
  return (
    <div className="App">
      <div className="row">
        <CounterWithReducer />
        <CounterWithUseState />
      </div>
      <hr />
      <div className="row">
        <FormWithReducerLvl1 />
        <FormWithUseStateLvl1 />
      </div>
      <hr />
      <div className="row">
        <FormWithReducerLvl2 />
        <FormWithUseStateLvl2 />
      </div>
      <hr />
      <div className="row">
        <FormWithReducerLvl3 />
        <FormWithUseStateLvl3 />
      </div>
    </div>
  );
}

export default App;
