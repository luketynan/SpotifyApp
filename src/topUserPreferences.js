import React, { Component } from 'react';
import './App.css';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { ReactComponent } from '*.svg';


// class user_Preference {

//     render(){


//         return(

//             <div id="main">

//             </div>
//         )
//     }
// }



class user_Preference_Slider extends ReactComponent{



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

class user_Preference_Button extends ReactComponent {

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

class user_Preference_Timeform extends ReactComponent {

    render() {



        return(

            <div className="timeForm">
        <FormControl component="fieldset">
          {/* <FormLabel component="legend">labelPlacement</FormLabel> */}
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

