import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';

export default class RentalBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData : []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8080/api/rentals/groupedby/city')
    .then(response => response.json())
    .then(groupedData => {
      const characters = groupedData;
      let chartData = [];
      let chartLabel = [];

      characters.forEach(function(character) {
        if(character.count > 100){
        chartData.push(parseInt(character.count));
        chartLabel.push(character.stat);
      }
      });

      this.setState({chartData: {
                      labels: chartLabel,
                      datasets: [
                        {
                          label: 'Rentals Per County',
                          backgroundColor: '#36A2EB',
                          borderColor: '#36A2FB',
                          borderWidth: 1,
                          hoverBackgroundColor: '#3FA2EB',
                          hoverBorderColor: '#3FF2EB',
                          data: chartData
                        }]
                      }});
    });
  }
  render() {
  return (
    <HorizontalBar data={this.state.chartData} />
  );}
}
