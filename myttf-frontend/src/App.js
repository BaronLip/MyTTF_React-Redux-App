// Libraries:
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// CSS: 
import './App.css';
// Components:
import Signup from './containers/SignupContainer';
import Dashboard from './containers/Dashboard';
import { Container, Grid } from 'semantic-ui-react';
// Functions:
import header from './components/Header'
import EditMatchContainer from './containers/EditMatchContainer';

function App() {
   console.log("App.js")
   return (
      <Router>
         <Switch>
            <>
               <Container>
                  <Grid 
                     textAlign='center' 
                     style={{ height: '90vh' }} 
                     verticalAlign='top'
                  >
                     <Grid.Column style={{ maxWidth: 1000 }}>
                        {header()}
                        <Route path="/signup" exact component={Signup} />
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Route path="/api/v1/match/:id" exact component={EditMatchContainer} />
                        
                     </Grid.Column>
                  </Grid>
               </Container>
            </ >
         </Switch>
      </Router>
   );
}
         
export default App;