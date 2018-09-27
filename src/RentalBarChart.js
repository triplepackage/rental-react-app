import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class RentalBarChart extends React.Component {
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
  return (
    <HorizontalBar data={this.state.chartData} />
  );}
}

export default RentalBarChart;
