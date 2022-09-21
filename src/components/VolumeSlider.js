import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";


export default function ContinuousSlider({ state, setState }) {

  

  return (
    <Box sx={{ width: 250 }}>

      <Slider
        aria-label="Small steps"
        defaultValue={10}
        step={10}
        marks={true}
        min={0}
        max={100}
        value={state}
        onChange={(e) => setState(e.target.value)}
       
      />
     
    </Box>
  );
}