import { Paper } from "@mui/material";
import { LoginForm } from "./ui/LoginForm";

export const LoginPage = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: 420,
        p: 4,
        borderRadius: 3,
      }}
    >
      <LoginForm />
    </Paper>
  );
};
