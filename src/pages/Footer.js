import React from "react";
import { Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Container sx={{ mt: 4 }}>
      {/* <Typography variant="h4">Welcome to AI Blog Generator</Typography> */}
      <Typography variant="body1" sx={{ mt: 2 }}>
        This is the footer here and Copyright @ 2025.
      </Typography>
    </Container>
  );
}

export default Footer;