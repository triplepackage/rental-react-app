import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class RentalGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rentalData: []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8080/api/rentals/city/nottingham')
    .then(response => response.json())
    .then(data => this.setState({ rentalData: data }));
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
          <ReactTable
                      data={this.state.rentalData}
                      columns={columns}
                      className="-striped -highlight"
                    />
        );
    }
}

export default RentalGrid;
