import React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography
} from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Laiwitter
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}