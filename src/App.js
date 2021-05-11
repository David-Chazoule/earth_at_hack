import './App.css';
import Header from './components/Header';

function App() {
  const Appname = 'Mars°Ma°Zon';
  return (
    <div className="App">
       <Header name={Appname} />
    </div>
  );
}

export default App;
