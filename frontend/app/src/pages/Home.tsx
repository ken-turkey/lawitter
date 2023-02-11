import React from 'react'
import { memo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography
} from "@mui/material";
import Header from "../components/Header";

export const Home = memo(() => {
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
      <Grid container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        padding={10}
      >
        <Grid item xs>
          <Card>
            <CardActionArea
              href='/wake-up-time'
            >
              <CardContent>
                <Typography variant='h4' component="div">
                  起床予定時間
                </Typography>
                <Typography variant='body1' component="div">
                  {wakeUpTime}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs>
          <Card>
            <CardActionArea
              href='/wake-up'
            >
              <CardContent>
                <Typography variant='h4' component="div">
                  起床記録
                </Typography>
                <Typography variant='body1' component="div">
                  {isWakeUp}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
});