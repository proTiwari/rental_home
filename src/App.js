import './App.scss';
import HomePage from './pages/Home/HomePage';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import { ThemeProvider } from 'next-themes'

function App() {
  return (
    <div className='App'>
    <ThemeProvider attribute="class" enableSystem={false}>
      <MainLayout>
        <Router>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </MainLayout>

      </ThemeProvider>
    </div>
  );
}

export default App;
