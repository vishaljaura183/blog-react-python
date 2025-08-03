import React from "react";
import { Container } from "@mui/material";
import BlogForm from "../components/Blogform"

function CreateBlog() {
  return (
    <Container sx={{ mt: 4 }}>
      <BlogForm />
    </Container>
  );
}

export default CreateBlog;