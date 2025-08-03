import React from "react";
import { Container, Typography } from "@mui/material";

function HomePage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Welcome to AI Blog Generator</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Use the navigation bar to create new blogs and generate AI-powered titles.
      </Typography>
    </Container>
  );
}

export default HomePage;