import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Switch,
} from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { STATE, useThemeContext } from "../context/ThemeContext";

export const Navbar = ({ setIsOpenDrawer }) => {
  const { theme, setTheme } = useThemeContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color={theme === STATE.LIGHT ? "primary" : "secondary"}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color={theme === STATE.LIGHT ? "inherit" : "default"}
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color={theme === STATE.LIGHT ? "secondary" : "textPrimary"}
          >
            News
          </Typography>
          <LightModeIcon />
          <Switch
            defaultChecked
            color="secondary"
            onClick={() =>
              setTheme(theme === STATE.LIGHT ? STATE.DARK : STATE.LIGHT)
            }
          />
          <DarkModeIcon />
          <Button color={theme === STATE.LIGHT ? "inherit" : "default"}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
