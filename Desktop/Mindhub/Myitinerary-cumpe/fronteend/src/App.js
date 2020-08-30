import React from 'react'
import Home from './pages/Home'
import Cities from'./pages/Cities'
import './App.css'
import './Cities.css'
import './Home.css'
import './Itinerarios.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

// import Actividades from './pages/Itinerary'
import Itinerary from './pages/Itinerary'

class App extends React.Component{


  render(){
  return(
<>

<BrowserRouter>
  <Switch>

    <Route exact path="/" component={Home}/>  
    <Route path="/ciudades" component={Cities}/>
    <Route path="/actividades/:id" component={Itinerary}/>
    <Redirect to ="/" />
  
  </Switch>
</BrowserRouter>


</>
      )
    }
  }


export default App