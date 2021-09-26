
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Education from './Components/Education';
import Contact from './Components/Contact'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div  className="app">
          
      <Router>
       <Navbar/>

        <div className="pages">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/education" component={Education} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
  
     
    </div>
  );
}

export default App;
