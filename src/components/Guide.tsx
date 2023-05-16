import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { createTheme } from "@material-ui/core/styles";
import Image from "next/image";
import { ArrowRightAlt } from "@mui/icons-material";
import CustomButton from "./CustomButton";

const theme = createTheme();

const Guide = () => {
  const CustomBox = styled(Box)(({ theme: Theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme: Theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme: Theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f1f1",
        py: 5,
      }}
    >
      <Box
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></Box>
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        How it works?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Everything you need to know when you want to buy, rent or sell - All
          in one place
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <Image
            src="/buy_icon.png"
            alt="buyIcon"
            height={50}
            width={100}
            style={{ objectFit: "contain", maxWidth: "100%" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Typography
            variant="body2"
            sx={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Buying Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              How to buy
            </Typography>
            <ArrowRightAlt style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <Image
            src="/rent_icon.png"
            alt="rentIcon"
            height={50}
            width={100}
            style={{ objectFit: "contain", maxWidth: "100%" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Typography
            variant="body2"
            sx={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Renting Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              How to rent
            </Typography>
            <ArrowRightAlt style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <Image
            src="/sell_icon.png"
            alt="rentIcon"
            height={50}
            width={100}
            style={{ objectFit: "contain", maxWidth: "100%" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Typography
            variant="body2"
            sx={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Selling Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              How to sell
            </Typography>
            <ArrowRightAlt style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>
      </GuidesBox>

      <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="See Full Guides"
        guideBtn={true}
      ></CustomButton>
    </Box>
  );
};

export default Guide;
