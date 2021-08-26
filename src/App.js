import './App.css';
import HomePage from './pages/HomePage';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/">
            <HomePage />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
