import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  columns = [{
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
      id: 'state',
      Header: 'State',
      accessor: d => d.state
    }];

  componentDidMount() {
    fetch('http://localhost:8080/api/rentals/street/hallview')
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }

  render() {
       return (
          <div>
             <div><ReactTable
                    data={this.state.data}
                    columns={this.columns}
                    className="-striped -highlight"

                  /></div>
          </div>
       )
    }
}

export default App;
