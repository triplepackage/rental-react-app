import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

class RentalGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rentalData: [],
      data: [],
      loading: true
    };
  }

  onRowClick = (state, rowInfo) => {
    return {
        onClick: e => {
            this.setState({
                data: rowInfo.original
            });
            this.props.history.push({
              pathname: '/rentalform',
              search: '?recordId=' + rowInfo.original['recordId'],
              state: { detail: rowInfo.original }
            })
        }
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('http://127.0.0.1:8080/api/rentals/city/nottingham')
    .then(response => response.json())
    .then(data => this.setState({ rentalData: data, loading: false }));
  }

    render() {
      const { loading, rentalData } = this.state;

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
          id: 'zipCode',
          Header: 'Zip Code',
          accessor: d => d.zipCode
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
              getTrProps={this.onRowClick}
              data={rentalData}
              columns={columns}
              loading={loading}
              className="-striped -highlight"
            />
        );
    }
}

export default RentalGrid;
