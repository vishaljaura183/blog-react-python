import React, { useState } from "react";
import { Button, TextField, Paper, Typography } from "@mui/material";

function BlogForm() {
  const [content, setContent] = useState("");
   const [title, setTitleVal] = useState(''); // Initialize state

    const handleChange = (event) => {
    setTitleVal(event.target.value); // Update state with new value
  };

  const generateTitle = async () => {
    // console.log("Saving blog with:", { title, content });
    

    const res = await fetch("http://localhost:8000/save-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    const data = await res.json();
    console.log(data)
    // setTitle("Saved Successfully--"+data);
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Write Blog Content
      </Typography>
       <TextField
      label="Type here"
      value={title} // Controlled value
      onChange={handleChange} // Update handler
      variant="outlined"
      fullWidth
    />
      <TextField
        fullWidth
        multiline
        rows={6}
        label="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" onClick={generateTitle}>
        Generate Title with AI
      </Button>
      {/* {title && (
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Suggested Title:</strong> {title}
        </Typography>
      )} */}
    </Paper>
  );
}

export default BlogForm;