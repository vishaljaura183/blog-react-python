import React from "react";
import { Container, Typography } from "@mui/material";

function CommonHeader() {
  return (
    <Container sx={{ mt: 4 }}>
      
      <Typography variant="body1" sx={{ mt: 2 }}>
        This is the common header here
      </Typography>
    </Container>
  );
}

export default CommonHeader;