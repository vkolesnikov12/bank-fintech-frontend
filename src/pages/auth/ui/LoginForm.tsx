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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import type { LoginFormValues } from "../model/types";
import { loginSchema } from "../model/loginShema";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log("LOGIN DATA", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      {/* Header */}
      <Box mb={1}>
        <Typography variant="h4" gutterBottom>
          Welcome back
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Please enter your details to sign in
        </Typography>
      </Box>

      {/* Identifier */}
      <TextField
        label="Email or phone"
        fullWidth
        placeholder="Enter your email or phone"
        error={!!errors.identifier}
        helperText={errors.identifier?.message}
        {...register("identifier")}
      />

      {/* Password */}
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        fullWidth
        placeholder="Enter your password"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register("password")}
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
      <FormControlLabel
        control={<Checkbox {...register("remember")} />}
        label="Remember me"
      />

      {/* Submit */}
      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        disabled={isSubmitting}
        sx={{ mt: 1 }}
      >
        {isSubmitting ? "Signing in..." : "Login"}
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
