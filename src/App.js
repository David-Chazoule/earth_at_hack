import Filter from './components/FIlter';
import './App.css';
import DetailCard from './components/DetailCard';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Filter />
      </Route>
      <Route path="/technos/:id">
        <DetailCard />
      </Route>
    </Switch>
  );
}

export default App;
