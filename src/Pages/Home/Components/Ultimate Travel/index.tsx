import {
  CardPrice,
  UltimateCardWrapper,
  UltimateTitle,
  UltimateTour__Wrapper,
} from "./style";
import { Box, Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Footer from "../footer";
interface GuideData {
  id: string;
  cityName: string;
  cost: string;
  img: string;
}

function UltimateTour() {
  const [tourData, setTourData] = useState<any>([]);

  const supabaseUrl = "https://mjcedactmdisysxnyusx.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2VkYWN0bWRpc3lzeG55dXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzE0MjksImV4cCI6MjA1NTQ0NzQyOX0.9slbpltg1VrHV4ZxI6gcXvP9zus0kXpQH6oqFmy_RO0";
  const supabase = createClient(supabaseUrl, supabaseKey);
  useEffect(() => {
    const fetchGuides = async () => {
      const { data, error } = await supabase.from("toursCard").select("*");
      if (error) {
        console.error("Supabase Error:", error);
      } else {
        setTourData(data as GuideData[]);
      }
    };

    fetchGuides();
  }, []);
  const handleClick = function () {
    console.log("clicked");
  };

  return (
    <>
      <UltimateTour__Wrapper>
        <UltimateTitle>
          <Typography variant="h1">Ultimate Travel Experience</Typography>
        </UltimateTitle>
        <UltimateCardWrapper>
          {tourData.map((item: GuideData) => (
            <Card sx={{ maxWidth: 400, minWidth: 400, boxShadow: 3 }}>
              <CardActionArea onClick={handleClick}>
                <CardMedia
                  component="img"
                  height="240"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.cityName}
                  </Typography>
                  <Divider />
                  <CardPrice>
                    <Box>
                      <Typography fontSize={15}>Starts from:</Typography>
                      <Typography variant="body1" fontSize={23} color="#68ae49">
                        ${item.cost}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          opacity: "50%",
                        }}
                      >
                        TAXES/INCL/PERS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        opacity: "60%",
                      }}
                    >
                      <AccessAlarmIcon />
                      <Typography>6 Days / 5 Nights</Typography>
                    </Box>
                  </CardPrice>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </UltimateCardWrapper>
      </UltimateTour__Wrapper>
      {/* <Footer /> */}
    </>
  );
}

export default UltimateTour;
