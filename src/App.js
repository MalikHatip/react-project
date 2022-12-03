import './App.css';
import Counter from './components/Counter';
import CounterActions from './components/CounterActions';

function App() {
  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-indigo-500  py-9 text-center h-screen" >
      <h1 className='py-9 text-3xl border-b-4  font-bold text-center  '>Counter App</h1>
    <Counter />
    <CounterActions />
    </div>
  );
}

export default App;
