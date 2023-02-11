import React from 'react'
import { memo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Stack,
  Paper,
  styled,
  Box,
} from "@mui/material";
import Header from "../components/Header";
import { SlackSetting } from "../components/SlackSetting";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export const Settings = memo(() => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [wakeUpTime, setWakeUpTime] = React.useState<string>("");
  const [isWakeUp, setIsWakeUp] = React.useState<string>("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box padding={10}>
      <Stack spacing={2}>
        <Item>
          <SlackSetting />
        </Item>
      </Stack>
      </Box>

    </ThemeProvider>
  );
});