import './App.css';
import MovieApp from "./Components/MovieApp";
import { Route, Switch } from "react-router-dom";
import MoviesDes from './Components/MoviesDes';
function App() {

  return (
    <div className="App">
   
       <Switch> 
       <Route exact path ="/" component={MovieApp}/> 
       <Route path ="/MovieCard/:id" component={MoviesDes}/>
      </Switch>

    </div>

  );
}


export default App;
