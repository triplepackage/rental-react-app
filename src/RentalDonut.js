import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class RentalDonut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData : []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8080/api/rentals/groupedby/recordStatus')
    .then(response => response.json())
    .then(groupedData => {
      const characters = groupedData;
      let chartData = [];
      let chartLabel = [];

      characters.forEach(function(character) {
        chartData.push(parseInt(character.count));
        chartLabel.push(character.stat);
      });

      this.setState({chartData: {
                      	labels: chartLabel,
                      	datasets: [{
                      		data: chartData,
                      		backgroundColor: [
                      		'#FF6384',
                      		'#36A2EB',
                      		'#FBCC56',
                          '#FF7984',
                      		'#F6B8EB',
                      		'#BCEE56'
                      		],
                      		hoverBackgroundColor: [
                            '#FF6384',
                        		'#36A2EB',
                        		'#FBCC56',
                            '#FF7984',
                        		'#F6B8EB',
                        		'#BCEE56'
                      		]
                      	}]
                      }});


    });
  }

  render() {
  return (
    <Doughnut data={this.state.chartData} />
  );}
}

export default RentalDonut;
