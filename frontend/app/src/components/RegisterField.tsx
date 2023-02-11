import React from 'react'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    TextField,
    Typography,
} from "@mui/material";
import axios from "axios";
import { memo, useState } from "react";
import { User } from "../types/User";
import { useNavigate } from "react-router-dom";

export const RegisterField = (() => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const cardStyle = {
        display: "block",
        transitionDuration: "0.3s",
        width: "400px",
        variant: "outlined",
    };

    const onClickSignUp = async () => {
        if (password !== passwordCheck) {
            setMessage("パスワードが一致しません")
            return;
        }
        const authStatus = await axios
            .post<User>("http://0.0.0.0:8081/v1/startwindow/create", {
                user_id: userId,
                password: password,
            })
            .then(() => navigate("/login"))
            .catch((error) => {
                setMessage("ユーザーIDが既に存在しています")
                return;
            });
        console.log("authStatus: ", authStatus);
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding={20}
        >
            <Card style={cardStyle}>
                <CardHeader title="サインアップ" />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {message}
                    </Typography>
                    <div>
                        <TextField
                            fullWidth
                            id="username"
                            type="email"
                            label="Username"
                            placeholder="Username"
                            margin="normal"
                            onChange={(e) => setUserId(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Password"
                            margin="normal"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            id="password_check"
                            type="password"
                            label="Password(確認用)"
                            placeholder="Password"
                            margin="normal"
                            onChange={(e) => setPasswordCheck(e.target.value)}
                        />
                    </div>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        onClick={onClickSignUp}
                    >
                        Sign Up
                    </Button>
                </CardActions>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        すでにアカウントをお持ちの方は
                        <Button color="primary" onClick={
                            () => navigate("/login")
                        }>
                            こちら
                        </Button>
                        からログインしてください
                    </Typography>
                </CardContent>

            </Card>
        </Box>
    );
});