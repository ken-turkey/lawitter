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

export const LoginField = memo(() => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    width: "400px",
    variant: "outlined",
  };

  const onClickLogin = async () => {
    const authStatus = await axios
      .post<User>("http://localhost:8000/v1/startwindow/login", {
        user_id: userId,
        password: password,
      })
      .then(() => navigate("/home"))
      .catch((error) => {
        setMessage("ユーザーIDまたはパスワードが間違っています")
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
        <CardHeader title="ログイン" />
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
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={onClickLogin}
          >
            Login
          </Button>
        </CardActions>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            アカウントをお持ちではない方は
            <Button color="primary" onClick={
              () => navigate("/register")
            }>
              こちら
            </Button>
            から作成してください
          </Typography>
        </CardContent>

      </Card>
    </Box>
  );
});