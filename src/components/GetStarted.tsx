import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const GetStarted = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#E6F0FF",
    padding: theme.spacing(10, 0, 10, 0),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));
  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "white", fontWeight: "700" }}
          >
            Featured Properties
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
          >
            Everything you need to know about houses!
          </Typography>

          <CustomButton
            backgroundColor="#fff"
            color="#17275F"
            buttonText="Get Started Now"
            getStartedBtn={true}
          />
        </Box>

        <Image
          src="/illustration.png"
          alt="house_illustrations"
          width={400}
          height={410}
          style={{ objectFit: "contain", maxWidth: "100%" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;
