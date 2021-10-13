import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Page1 from './pages/DetailPage1';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/page1" component={Page1} />
      </Switch>
    </Router>
  );
}
