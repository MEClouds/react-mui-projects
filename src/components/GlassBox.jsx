import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const GlassBox = (props) => {
  const useStyle = makeStyles({
    glass: {
      // essential style
      backgroundColor: "rgba(255,255,255,0.5)",
      backdropFilter: "blur(7px)",
      // to enhance style
      backgroundImage:
        "linear-gradient(to bottom right , rgba(255,255,255,0.2),rgba(255,255,255,0))",
      boxShadow: "10px 10px 10px rgba(30,30,30,0.1)",
      borderRadius: 5,
      borderLeft: "solid 1px rgba(255,255,255,.03)",
      borderTop: "solid 1px rgba(255,255,255,.08)",
    },
  });
  const classes = useStyle();
  return (
    <Box className={classes.glass} {...props}>
      {props.children}
    </Box>
  );
};

export default GlassBox;
