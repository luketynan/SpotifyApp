import React, { Component } from 'react';
import '../App.js';
import './topUserPrefs.styles.css';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";


class User_Preference_Nav extends Component{

  render(){

    return(

      <div id="user-pref-main">
        <div class="inner-main">
          <User_Preference_Slider />
          <User_Preference_Timeform />

        </div>
        <User_Preference_Button />

      </div>

    )
  }
}

export default User_Preference_Nav


class User_Preference_Slider extends Component{
  constructor() {
    super()
    this.state = {
      currentValue:30
    }
  }

  getCurrentValue(new_Value) {
    this.setState({
      currentValue: new_Value
    })
  }

    render(){

        function valuetext(value) {
          // getValue(value);
            return `${value}objects`;
            
          }

        function getValue(value) {
            return value;
        }




    
    return(
      <div className="slider">
          <Typography id="discrete-slider" gutterBottom>
            Limit
          </Typography>
          <Slider
            defaultValue={30}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={50}
            onChange={() => this.getCurrentValue(getValue)}
        />
      </div>

    )
    }
}


class User_Preference_Button extends Component {

    render() {

    return(
      <div className="send_Container">
        <Button className="go_Button" variant="outlined">
          Go!
        </Button>
      </div>

    )
    }
}


class User_Preference_Timeform extends Component {

    constructor() {
      super()
      this.state = {
        long:false,
        medium:true,
        short:false

      }
    }

    longClicked() {
      this.setState({
        long:true,
        medium:false,
        short:false
      })
    }

    mediumClicked() {
      this.setState({
        long:false,
        medium:true,
        short:false
      })
    }

    shortClicked() {
      this.setState({
        long:false,
        medium:false,
        short:true
      })
    }

    render() {



        return(

      <div className="timeForm">
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value="top"
              control={<Radio color="primary" />}
              label="Long"
              labelPlacement="top"
              onClick={() => this.longClicked()}
            />
            <FormControlLabel
              value="start"
              control={<Radio color="primary" />}
              label="Medium"
              labelPlacement="top"
              onClick={() => this.mediumClicked()}
            />
            <FormControlLabel
              value="bottom"
              control={<Radio color="primary" />}
              label="Short"
              labelPlacement="top"
              onClick={() => this.shortClicked()}
            />
          </RadioGroup>
        </FormControl>
      </div>


        )
    }

}



