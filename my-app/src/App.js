import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from 'semantic-ui-react'
import NavBar from './component/NavBar'
import HabitatPage from "./component/HabitatPage";
import HabitatShow from "./component/HabitatShow";
import Animals from "./component/Animals";
import {useState,useEffect} from 'react';
import Home from './component/Home';
//import Animals from './component/Animals'

function App() {
  const [ habitats, setHabitats ] = useState([]);

  useEffect(() => {
      fetch('http://localhost:9292/habitats', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }}
      )
      .then(response => response.json())
      .then(habitat_data => setHabitats(habitat_data))
      .catch((error) => {
      console.error('Error:', error);
      });
    }, [])
  
  return (
    <>
      <Header className="App-header" >
        <NavBar/>
      </Header>
      <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/habitats">
          <HabitatPage habitats={habitats} />
      </Route>
      <Route exact path="/animals">
          <Animals  />
      </Route>
      <Route path={`/habitats/:id`}>
          <HabitatShow />
      </Route>
      </Switch>
    </>
      );
}

export default App;
