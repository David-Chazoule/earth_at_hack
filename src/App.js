import Filter from './components/FIlter';
import './App.css';
import DetailCard from './components/DetailCard';
import { Switch, Route } from 'react-router';
import LandingPage from './components/LandingPage';

function App() {
  
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/technos">
        <Filter />
      </Route>
      <Route path="/technos/:id">
        <DetailCard />
      </Route>
    </Switch>
  );
}

export default App;
