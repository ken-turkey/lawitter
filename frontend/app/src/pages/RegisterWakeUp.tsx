import React from 'react'
import { memo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Stack,
    Paper,
    styled,
    Box,
    Button,
} from "@mui/material";
import Header from "../components/Header";
import { WakeUpTimeSetting } from "../components/WakeUpTimeSetting";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

export const RegisterWakeUp = memo(() => {
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
            <Box
                padding={10}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Button
                    variant="contained"
                    sx={{
                        width: 300,
                        height: 300,
                        fontSize: 50,
                    }}
                >
                    起きた！
                </Button>
            </Box>
        </ThemeProvider>
    );
});