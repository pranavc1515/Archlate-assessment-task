import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router , Switch , Route , Link } from 'react-router-dom';
import Candidates from './Components/Candidates';
import Companies from './Components/Companies';
import Jobs from "./Components/Jobs";
import Notifications from "./Components/Notifications"
import UserName from "./Components/UserName";

const App = () => {
  return (
    <>
    <Router>
      
      <Navbar/>
      <Jobs/>
        <Switch>
          <Route path="/" element={Jobs}></Route>
        <Route path='/jobs' component = {Jobs} exact><Jobs/></Route>
        <Route path='/candidates' component = {Candidates} exact><Candidates/></Route>
        <Route path='/companies' component = {Companies} exact><Companies/></Route>
        <Route path='/notifications' component = {Notifications} exact><Notifications/></Route>
        <Route path='/userName' component = {UserName} exact><UserName/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
