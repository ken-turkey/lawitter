import React from 'react'
import {
    Box, Button, FormControl, Input, InputLabel, Stack, Typography, Container,
} from "@mui/material";
import axios from "axios";
import { memo, useState } from "react";

export const SlackSetting = memo(() => {
    return (
        <Box padding={2}>
            <Typography variant="h6">
                Slackの設定
            </Typography>
            <SlackInput />
        </Box>
    );
});

const SlackInput = memo(() => {
    return (
        <Stack>
            <Box sx={{ m: 1 }}>
                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="slack-token">Slack Token</InputLabel>
                    <Input
                        id="slack-token"
                    />
                </FormControl>
            </Box>
            <Box sx={{ m: 1 }}>
                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="slack-channel">Slack Channel</InputLabel>
                    <Input
                        id="slack-channel"
                    />
                </FormControl>
            </Box>
            <Box sx={{ m: 1 }}>
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <Button variant="contained">
                        登録
                    </Button>
                </Box>
            </Box>
        </Stack>
    );
});