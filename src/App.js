import './App.scss';
import HomePage from './pages/Home/HomePage';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Router>
          <Switch>

            <Route path="/">
              <HomePage />
            </Route>


          </Switch>
        </Router>
      </MainLayout>

    </div>
  );
}

export default App;
