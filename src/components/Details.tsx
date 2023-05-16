import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import { createTheme } from "@material-ui/core/styles";
import Image from "next/image";
import houseCard from "../../public/houseCard.png";

const theme = createTheme();

const Details = () => {
  const CustomBox = styled(Box)(({ theme: Theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme: Theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000339",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#7B8087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));
  return (
    <Box sx={{ backgroundColor: "#E6F0FF", py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <Image
              src={houseCard}
              width={500}
              height={450}
              alt="house"
              style={{ objectFit: "contain", maxWidth: "100%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
            >
              You’ve found a neighborhood you love.
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#5A6473",
                lineHeight: "27px",
              }}
            >
              When you own a home, you commit to living in one location for a
              period of time. We are here to ensure that this will be a
              memorable experience for you.
            </Typography>
          </Box>
        </CustomBox>


        <TextFlexbox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>2500+</LargeText>
            <SmallText>Homes For Sale</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>3000+</LargeText>
            <SmallText>Properties Rented</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>3500+</LargeText>
            <SmallText>Homes Sold</SmallText>
          </Box>
        </TextFlexbox>
      </Container>
    </Box>
  );
};

export default Details;
