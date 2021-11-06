import './App.scss';
import HomePage from './pages/Home/HomePage';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import { ThemeProvider } from 'next-themes';
import RentalRegistration from "../src/pages/Registration/RentalRegistration";

function App() {
  return (
    <div className='App'>
    <ThemeProvider attribute="class" enableSystem={false}>

      <MainLayout textColor="next-themes">
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/reg">
              <RentalRegistration />
            </Route>
          </Switch>
        </Router>
      </MainLayout>

      </ThemeProvider>
    </div>
  );
}

export default App;
