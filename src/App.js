//import logo from './logo.svg';
import './App.css';

import Signin from './Components/Auth/SignIn/Signin';
import Signup from './Components/Auth/SIgnUp/Signup';
import HomeHeader from './Components/Router/Header/HomeHeader'
import { TimeRoutes } from './Components/Pages/Time/TimeRoutes_/TimeRoutes.jsx';







import Router from './Components/Router/Router';

import { Home } from './Components/Pages/Home/Home';


function App() {
  return (
    <div>

      <Router />
      {/* <Expenses /> */}
    
    </div>
  );
}

export default App;
