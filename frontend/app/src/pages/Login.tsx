import React from 'react'
import { memo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../components/Header";
import { LoginField } from "../components/LoginField";

export const Login = memo(() => {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <LoginField />
        </ThemeProvider>
    );
});