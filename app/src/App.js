import logo from './logo.svg';
import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      <div className="rating-wrapper">
        <Stars count={3}/>
        <Stars count={4}/>
        <Stars count={5}/>
        <Stars count={7}/>
      </div>
    </div>
  );
}

export default App;
