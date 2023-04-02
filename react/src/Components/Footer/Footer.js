import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
import MicButton from "./Components/MicButton";
import CameraButton from "./Components/CameraButton";
import OptionButton from "./Components/OptionButton";
import ShareScreenButton from "./Components/ShareScreenButton";
import MessageButton from "./Components/MessageButton";
import ParticipantListButton from "./Components/ParticipantListButton";
import EndCallButton from "./Components/EndCallButton";
import TimeZone from "./Components/TimeZone";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import {AntmediaContext} from "../../App";

const CustomizedGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: "#0D0D0D",
  position: "fixed",
  bottom: 0,
  left: 0,
  padding: 16,
  width: "70vw",
  zIndex: 2,
  height: 80,
}));
function Footer(props) {
  const { id } = useParams();
  const antmedia = React.useContext(AntmediaContext);

    return (
        <CustomizedGrid
            container
            alignItems={"center"}
            justifyContent={{xs: "center", sm: "space-between"}}
        >
          <Grid item sx={{display: {xs: "none", sm: "block"}}}>
            <Grid container alignItems={"center"}>
              <Button sx={{ maxWidth: 3, marginRight: '.5rem', marginTop: '.5rem', marginBottom: '.5rem'}} color="error" variant="contained" component="label"> LIVE </Button>
              <Typography color="#ffffff" variant="body1">
                {antmedia.eventName ? antmedia.eventName : "Ant Media Webinar"}
              </Typography>
            </Grid>
          </Grid>
              <Grid item>
                <Grid
                    container
                    justifyContent="right"
                    columnSpacing={{xs: 1, sm: 2}}
                >

                </Grid>
              </Grid>

          <Grid item sx={{display: {xs: "none", sm: "block"}}}>
            <TimeZone/>
          </Grid>
        </CustomizedGrid>
    );
}

export default Footer;
