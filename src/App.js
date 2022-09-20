import React from "react";
import "./style.css";
import GlassBox from "./components/GlassBox";
import { Container, Typography } from "@mui/material";

export default function App() {
  return (
    <>
      <Container sx={{ mt: "10px" }}>
        <GlassBox>
          <Typography sx={{ textAlign: "center" }}>
            {" "}
            Material Ui Projects
          </Typography>
        </GlassBox>
      </Container>
    </>
  );
}
