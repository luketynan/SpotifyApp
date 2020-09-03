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



    render(){

        function valuetext(value) {
            return `${value}objects`;
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
            />
            <FormControlLabel
              value="start"
              control={<Radio color="primary" />}
              label="Medium"
              labelPlacement="top"
            />
            <FormControlLabel
              value="bottom"
              control={<Radio color="primary" />}
              label="Short"
              labelPlacement="top"
            />
          </RadioGroup>
        </FormControl>
      </div>


        )
    }

}



