import React from 'react'
import {
    Box, Button, FormControl, Input, InputLabel, Stack, Typography, Container, MenuItem, Select, SelectChangeEvent,
} from "@mui/material";
import axios from "axios";
import { memo, useState } from "react";

export const WakeUpTimeSetting = memo(() => {
    return (
        <Box padding={2}>
            <Typography variant="h6">
                明日の起床時刻設定
            </Typography>
            <SlackInput />
        </Box>
    );
});

const SlackInput = memo(() => {
    const [time, setTime] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setTime(event.target.value as string);
    };
    return (
        <Stack>
            <Box sx={{ m: 1 }}>
                <FormControl fullWidth  variant="standard">
                    <InputLabel htmlFor="slack-token">起きる時間</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={time}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={"08:00"}>8:00</MenuItem>
                        <MenuItem value={"08:30"}>8:30</MenuItem>
                        <MenuItem value={"09:00"}>9:00</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ m: 1 }}>
                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="late-Message">遅刻した場合のメッセージ</InputLabel>
                    <Input
                        id="late-Message"
                        multiline
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