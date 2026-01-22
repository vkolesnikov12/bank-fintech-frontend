import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export const MainLayout = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex" }}>
      {/* Sidebar — позже */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
