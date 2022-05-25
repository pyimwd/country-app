import logo from './logo.svg';
import './App.css';
import Countries from './Countries';

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-5" style={{color: "#383089"}}>React Countries App</h1>
      <Countries />
    </div>
  );
}

export default App;
