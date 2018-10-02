import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class RentalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rentalData: this.props.location.state.detail
    };
  }

  render() {
    console.log(this.props.location.state);
    return (
      <form>
        <FormGroup
          controlId="formBasicText">
          <ControlLabel>Street Number</ControlLabel>
          <FormControl
            bsSize="sm"
            type="text"
            value={this.state.rentalData.streetNumber}
            placeholder="Enter text"
          />
          <ControlLabel>Street Name</ControlLabel>
          <FormControl
            bsSize="sm"
            type="text"
            value={this.state.rentalData.streetName}
            placeholder="Enter text"
          />
          <ControlLabel>City</ControlLabel>
          <FormControl
            bsSize="sm"
            type="text"
            value={this.state.rentalData.city}
            placeholder="Enter text"
          />
          <ControlLabel>State</ControlLabel>
          <FormControl
            bsSize="sm"
            type="text"
            value={this.state.rentalData.state}
            placeholder="Enter text"
          />
          <ControlLabel>Zip Code</ControlLabel>
          <FormControl
            bsSize="sm"
            type="text"
            value={this.state.rentalData.zipCode}
            placeholder="Enter text"
          />
          <ControlLabel>Issue Date</ControlLabel>
          <FormControl
            bsSize="sm"
            type="text"
            value={this.state.rentalData.issueDate}
            placeholder="Enter text"
          />
          <ControlLabel>Expiration Date</ControlLabel>
          <FormControl
            bsSize="sm"
            type="text"
            value={this.state.rentalData.expirationDate}
            placeholder="Enter text"
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

export default RentalForm;
