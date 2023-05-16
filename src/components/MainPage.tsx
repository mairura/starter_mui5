import React from "react";
import { Box, Container, Typography, styled } from "@mui/material";
import Navbar from "./Navbar";
import { createTheme } from "@material-ui/core/styles";
import CustomButton from "./CustomButton";
import Image from "next/image";

const theme = createTheme();

const MainPage = () => {
  const CustomBox = styled(Box)(({ theme: Theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    margin: theme.spacing(3, 0, 3, 0),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme: Theme }) => ({
    fontSize: "60px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
  }));

  const ImagePicture = styled(Image)(({ theme: Theme }) => ({
    width: "100%",
    mb: "4rem",
  }));
  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Watamu Agency
            </Typography>{" "}
            <Title>Discover a place where you'll love to live.</Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Be the first to get the best real estate deals before they hit the
              mass market! Hot foreclosure deals with one simple search!
            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <ImagePicture
              src="/hero_illustration.png"
              height={600}
              width={700}
              alt="logo"
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw"
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default MainPage;
