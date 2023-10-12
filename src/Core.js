import Data from "./components/data/Index";
import Home from "./components/home";
import Information from "./components/information/Index";
import Statistics from "./components/statistics/index"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function Core() {
  return (
    <div>
        <Router>
          <Switch>
              <Route exact path ="/" render = {(v) => <Home {...v}/>} />
              <Route exact path ="/statistics" render = {(v) => <Statistics {...v}/>} />
              <Route exact path ="/data" render = {(v) => <Data {...v}/>} />
              <Route exact path ="/information" render = {(v) => <Information {...v}/>} />
          </Switch>
        </Router>
        {/* <Home/> */}
        {/* <Statistics/> */}
    </div>

    // <div className="container">
    //   <div className="box">
    //     {/* <Home/> */}
    //     {/* <Statistics/> */}
    //   </div>
    // </div>

  
  );
}

export default Core;