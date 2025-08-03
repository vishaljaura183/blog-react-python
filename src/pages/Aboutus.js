import React from "react";
import { Container, Typography } from "@mui/material";

function AboutUs() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">About Us</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        This page is about US and this is the description about my About us page
      </Typography>
    </Container>
  );
}

export default AboutUs;