import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme();

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme: Theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme: Theme }) => ({
    fontSize: "16px",
    paddingBottom: theme.spacing(1),
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  const IconBox = styled(Box)(({ theme: Theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  return (
    <Box sx={{ py: 5, backgroundColor: "#E6F0FF" }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Products
          </Typography>

          <FooterLink>Listing</FooterLink>
          <br />
          <FooterLink>Properties</FooterLink>
          <br />
          <FooterLink>Agents</FooterLink>
          <br />
          <FooterLink>Blog</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Resources
          </Typography>

          <FooterLink>Our Homes</FooterLink>
          <br />
          <FooterLink>Stories</FooterLink>
          <br />
          <FooterLink>Video</FooterLink>
          <br />
          <FooterLink>Free Trial</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Company
          </Typography>

          <FooterLink>Partnerships</FooterLink>
          <br />
          <FooterLink>Terms of use</FooterLink>
          <br />
          <FooterLink>Privacy</FooterLink>
          <br />
          <FooterLink>Sitemap</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Get in touch
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#7A7A7E",
              fontWeight: "500",
              mb: 2,
            }}
          >
            You’ll find your next home, in any style you prefer.
          </Typography>

          <IconBox>
            <Image
              src="/fbicon.png"
              alt="fbicon"
              width={30}
              height={30}
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                cursor: "pointer",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              src="/twittericon.png"
              alt="twittericon"
              width={30}
              height={30}
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                cursor: "pointer",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              src="/linkedinicon.png"
              alt="linkedinicon"
              width={30}
              height={30}
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                cursor: "pointer",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
