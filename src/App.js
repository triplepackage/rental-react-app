import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import {HorizontalBar} from 'react-chartjs-2';
import { Navbar, Nav, NavItem, Glyphicon, Panel } from 'react-bootstrap';
import _ from "lodash";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rentalData: [],
      chartData : []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8080/api/rentals/city/nottingham')
    .then(response => response.json())
    .then(data => this.setState({ rentalData: data }));

    fetch('http://127.0.0.1:8080/api/rentals/groupedby/city')
    .then(response => response.json())
    .then(groupedData => {
      const characters = groupedData;
      let chartData = [];
      let chartLabel = [];

      characters.forEach(function(character) {
        if(character.count > 100){
        chartData.push([parseInt(character.count)]);
        chartLabel.push([character.stat]);
      }
      });

      this.setState({chartData: {
                      labels: chartLabel,
                      datasets: [
                        {
                          label: 'Rentals Per County',
                          backgroundColor: 'rgba(255,99,132,0.2)',
                          borderColor: 'rgba(255,99,132,1)',
                          borderWidth: 1,
                          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                          hoverBorderColor: 'rgba(255,99,132,1)',
                          data: chartData
                        }]
                      }});
    });
  }

  render() {
    const columns = [{
        id: 'streetNumber',
        Header: 'Street Number',
        accessor: d => d.streetNumber
      },
      {
        id: 'streetName',
        Header: 'Street Name',
        accessor: d => d.streetName
      },
      {
        id: 'city',
        Header: 'City',
        accessor: d => d.city
      },
      {
        id: 'issueDate',
        Header: 'Issue Date',
        accessor: d => d.issueDate
      },
      {
        id: 'expirationDate',
        Header: 'ExpirationDate ',
        accessor: d => d.expirationDate
      },
      {
        id: 'recordStatus',
        Header: 'Status',
        accessor: d => d.recordStatus
      }];

       return (
        <div>
          <div className="page-header">
          <Navbar fixedTop>
                 <Navbar.Header>
                   <Navbar.Brand>
                     <a href="/">
                       Baltimore County Rental
                     </a>
                   </Navbar.Brand>
                   <Navbar.Toggle />
                 </Navbar.Header>
                 <Navbar.Collapse>
                   <Nav pullRight>
                     <NavItem
                       eventKey={1}
                       href="#">
                       <Glyphicon glyph="glyphicon glyphicon-home" />
                       { 'Home'}
                     </NavItem>
                     <NavItem
                       eventKey={2}
                       href="#">
                       <Glyphicon glyph="glyphicon glyphicon-cog" />
                       {' Settings'}
                     </NavItem>
                   </Nav>
                 </Navbar.Collapse>
               </Navbar>
          </div>
          <div className="jumbotron col-sm-10 col-sm-offset-1">
              <div>
                <Panel bsStyle="primary">
                  <Panel.Heading>Rental Data</Panel.Heading>
                  <Panel.Body>
                    <ReactTable
                        data={this.state.rentalData}
                        columns={columns}
                        className="-striped -highlight"
                      />
                  </Panel.Body>
                </Panel>
                <Panel bsStyle="primary">
                  <Panel.Heading>Rental Chart</Panel.Heading>
                  <Panel.Body>
                    <HorizontalBar data={this.state.chartData} />
                  </Panel.Body>
                 </Panel>
              </div>
          </div>

        </div>
       )
    }
}

export default App;
