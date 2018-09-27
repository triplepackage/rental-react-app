import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect, Prompt } from 'react-router-dom';
import { Navbar, Nav, NavItem, Glyphicon, Panel } from 'react-bootstrap';
import _ from "lodash";
import RentalBarChart from './RentalBarChart';
import RentalGrid from './RentalGrid';

function NavLinks() {
    return(
      <Navbar fixedTop>
         <Navbar.Header>
           <Navbar.Brand>
             <a href="/">
               Baltimore County Rental Portal
             </a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav pullRight>
             <NavItem>
               <NavLink exact to="/datagrid" className="link" activeClassName="active">Home</NavLink>
             </NavItem>
             <NavItem>
               <NavLink to="/datagrid" className="link">Data Grid</NavLink>
             </NavItem>
             <NavItem>
               <NavLink to="/barchart" className="link">Bar Chart</NavLink>
             </NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
    );
}

class App extends Component {
  constructor() {
      super();
  }

  render() {
      return (
        <Router>
            <div>
              <div className="page-header">
                <NavLinks />
              </div>

                  <div className="jumbotron col-sm-10 col-sm-offset-1">
                    <Panel bsStyle="primary">
                      <Panel.Heading>Rental Data</Panel.Heading>
                      <Panel.Body>
                        <Switch>
                            <Route exact={ true } path="/" component={ RentalGrid }/>
                            <Route path="/datagrid" component={ RentalGrid }/>
                            <Route path="/barchart" component={ RentalBarChart }/>
                            <Route render={ () => <h1>404 Error</h1> } />
                        </Switch>
                      </Panel.Body>
                    </Panel>
                  </div>
            </div>
        </Router>
      );
  }
}

export default App;
