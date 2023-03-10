import React from 'react' 
import { Route, Routes } from "react-router-dom";
import App from '../App';
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { FailedLogin } from "../pages/FailedLogin";
import { Home } from "../pages/Home";
import { Settings } from "../pages/Settings";
import { WakeUpTime } from "../pages/WakeUpTime";
import { RegisterWakeUp } from "../pages/RegisterWakeUp";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <App />
        }
      />
      <Route
        path="/login"
        element={
            <Login />
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/fail_login" element={<FailedLogin />} />
      <Route path="/logout" element={<FailedLogin />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/wake-up-time" element={<WakeUpTime />} />
      <Route path="/wake-up" element={<RegisterWakeUp />} />
      <Route path="*" element={<div>404　ページが見つかりません。</div>} />
    </Routes>
  );
};