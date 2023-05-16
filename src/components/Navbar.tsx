import styled from "@emotion/styled";
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { createTheme } from "@material-ui/core/styles";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Contacts,
  FeaturedPlayList,
  Home,
  ListAlt,
  MiscellaneousServices,
} from "@mui/icons-material";
import CustomButton from "./CustomButton";
import Image from "next/image";

const theme = createTheme();
type Anchor = "top" | "left" | "bottom" | "right";

const Navbar = () => {
  const [mobileView, setMobileView] = useState({ left: false });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setMobileView({ ...mobileView, [anchor]: open });
    };

  const NavContainer = styled(Container)(({ theme: Theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const CustomMenu = styled(MenuIcon)(({ theme: Theme }) => ({
    cursor: "pointer",
    display: "none",
    color: "#000",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavLinksBox = styled(Box)(({ theme: Theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const NavLink: any = styled(Typography)(({ theme: Theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavbarLogo = styled(Image)(({ theme: Theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const list: any = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Features", "Services", "Listed", "Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <Home />}
                  {index === 1 && <FeaturedPlayList />}
                  {index === 2 && <MiscellaneousServices />}
                  {index === 3 && <ListAlt />}
                  {index === 4 && <Contacts />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <NavContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenu onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileView["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo height={22} width={100} src="/logo1.png" alt="logo" />
        </Box>

        <NavLinksBox>
          <NavLink variant="body2">Home</NavLink>
          <NavLink variant="body2">Features</NavLink>
          <NavLink variant="body2">Services</NavLink>
          <NavLink variant="body2">Listed</NavLink>
          <NavLink variant="body2">Contact</NavLink>
        </NavLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavLink variant="body2">Sign Up</NavLink>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Register"
        />
      </Box>
    </NavContainer>
  );
};

export default Navbar;
