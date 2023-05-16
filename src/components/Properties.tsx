import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { properties } from "./Houses/properties";
import House from "./House";

const theme = createTheme();

const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme: Theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#e9f5fd", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontWeight: "bold", fontSize: "35px" }}
          >
            Featured Properties
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Everything you need to know when looking for a new home!
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
            {properties.map((property) => (
                <House key={property.id}
                img={property.img}
                price={property.price}
                address={property.address}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                space={property.space} />
            ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Properties
