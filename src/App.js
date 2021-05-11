import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const Appname = 'Mars°Ma°Zon';
  return (
    <div className="App">
       <Header name={Appname} />
       <Footer />
    </div>
  );
}

export default App;
