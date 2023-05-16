import React from "react";
import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme();

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme: Theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme: Theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <Box sx={{ pt: 10, backgroundColor: "white" }}>
      <CustomContainer>
        <CustomBox>
          <Image
            src="/logo1.png"
            height={22}
            width={100}
            alt="logo"
            style={{ objectFit: "contain", maxWidth: "100%" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Typography variant="body2" sx={{ color: "#7D8589", fontSize: "16px", fontWeight: "bold", mt: 2}}>
            More that 45,000 trust Watamu
          </Typography>
        </CustomBox>

        <Box>
          <Image
            src="/Star.png"
            height={17}
            width={100}
            alt="stars"
            style={{ maxWidth: "100%" }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            5-Star Rating (2k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>

      <Container sx={{ display: "flex", flexDirection: "column"}}>
        <Image src="/logos.png" alt="companylogos" height={300} width={1400} style={{ objectFit: "contain", maxWidth: "100%" }} />
      </Container>
    </Box>
  );
};

export default Companies;
