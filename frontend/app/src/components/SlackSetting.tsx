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
        <Stack
            spacing={3}>
            <Container>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="slack-token">Slack Token</InputLabel>
                    <Input
                        id="slack-token"
                    />
                </FormControl>
            </Container>
            <Container>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="slack-channel">Slack Channel</InputLabel>
                    <Input
                        id="slack-channel"
                    />
                </FormControl>
            </Container>
            <Container><Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Button variant="contained">
                    登録
                </Button>
            </Box>
            </Container>
        </Stack>
    );
});