import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {/* Header */}
      <Box mb={1}>
        <Typography variant="h4" gutterBottom>
          Welcome back
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Please enter your details to sign in
        </Typography>
      </Box>

      {/* Email / Phone */}
      <TextField
        label="Email or phone"
        fullWidth
        placeholder="Enter your email or phone"
      />

      {/* Password */}
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        fullWidth
        placeholder="Enter your password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Remember me */}
      <FormControlLabel control={<Checkbox />} label="Remember me" />

      {/* Submit */}
      <Button variant="contained" size="large" fullWidth sx={{ mt: 1 }}>
        Login
      </Button>

      {/* Footer */}
      <Typography variant="body2" textAlign="center" mt={1}>
        Don&apos;t have an account?{" "}
        <Typography
          component={RouterLink}
          to="/register"
          color="primary"
          sx={{ textDecoration: "none", fontWeight: 500 }}
        >
          Sign up
        </Typography>
      </Typography>
    </Box>
  );
};
