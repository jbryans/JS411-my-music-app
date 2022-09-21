import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Switch from '@mui/material/Switch';

export default function CustomCard({state, setState, title, body, component: Component}) {
  

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <div className="card-title-container">
          <Typography variant="body2">{body}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Component state={state} setState={setState} />
      </CardActions>
    </Card>
  );
}