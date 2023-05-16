import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { createTheme } from "@material-ui/core/styles";
import Image from "next/image";
import bedroomsIcon from "../../public/bedroomsIcon.png";
import bathroomsIcon from "../../public/bathroomsIcon.png";
import spaceIcon from "../../public/spaceIcon.png";

const theme = createTheme();

interface HouseProps {
  img: any;
  price: any;
  address: string;
  bedrooms: number;
  bathrooms: number;
  space: number;
}

const House = ({
  img,
  price,
  address,
  bedrooms,
  bathrooms,
  space,
}: HouseProps) => {
  const HouseBox = styled(Box)(({ theme: Theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return (
    <HouseBox>
      <ImgContainer>
        <Image src={img} alt="" width={350} height={200} />
      </ImgContainer>

      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700", color: "#000" }}>
          Ksh.&nbsp;{price}
        </Typography>
        <Typography variant="body2" sx={{ my: 2, color: "#000" }}>
          {address}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InfoBox>
            <Image
              src={bedroomsIcon}
              height={20}
              width={20}
              alt="bedroom"
              style={{ objectFit: "contain", maxWidth: "100%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Typography variant="body2" sx={{ mt: 1, color: "#000" }}>
              {bedrooms}
            </Typography>
          </InfoBox>

          <InfoBox>
            <Image
              src={bathroomsIcon}
              height={20}
              width={20}
              alt="bedroom"
              style={{ objectFit: "contain", maxWidth: "100%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Typography variant="body2" sx={{ mt: 1, color: "#000" }}>
              {bathrooms}
            </Typography>
          </InfoBox>

          <InfoBox>
            <Image
              src={spaceIcon}
              height={20}
              width={20}
              alt="bedroom"
              style={{ objectFit: "contain", maxWidth: "100%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Typography variant="body2" sx={{ mt: 1, color: "#000" }}>
              {space}
            </Typography>
          </InfoBox>
        </Box>
      </Box>
    </HouseBox>
  );
};

export default House;
