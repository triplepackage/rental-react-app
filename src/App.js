import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import {Doughnut} from 'react-chartjs-2';
import _ from "lodash";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      groupedData: [],
      characterData: [],
    };
  }



  componentDidMount() {
    fetch('http://127.0.0.1:8080/api/rentals/city/nottingham')
    .then(response => response.json())
    .then(data => this.setState({ data }));

    fetch('http://127.0.0.1:8080/api/rentals/groupedby/city')
    .then(response => response.json())
    .then(groupedData => {
      const characters = groupedData;
      let characterData = [];
      characters.forEach(function(character) {
        characterData.push([character.stat, parseInt(character.count)]);
      });

      this.setState({characterData})
    });
  }

  render() {
    const chartData = {
    	labels: [
    		'Red',
    		'Green',
    		'Yellow'
    	],
    	datasets: [{
    		data: [300, 50, 100],
    		backgroundColor: [
    		'#FF6384',
    		'#36A2EB',
    		'#FFCE56'
    		],
    		hoverBackgroundColor: [
    		'#FF6384',
    		'#36A2EB',
    		'#FFCE56'
    		]
    	}]
    };

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
            <div><ReactTable
                  data={this.state.data}
                  columns={columns}
                  className="-striped -highlight"
                />
            </div>
            <div>
               <h2>Doughnut Example</h2>
               <Doughnut data={chartData} />
             </div>
          </div>
       )
    }
}

export default App;
