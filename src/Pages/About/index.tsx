import { Box, Container, Divider, Typography } from "@mui/material";
import Headers from "../../Pages/Home/Components/header";
import React from "react";
import {
  About__content,
  About__wrapper,
  AboutImage,
  AboutTitle,
  BenifietBox,
  Benifiets,
  Cards__content,
  Cards__Wrapper,
  CardTitle,
  ResBox,
  Results,
  TourTitle,
  WhyGuideTour,
} from "./style";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GroupsIcon from "@mui/icons-material/Groups";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import SensorOccupiedRoundedIcon from "@mui/icons-material/SensorOccupiedRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import OfflineBoltRoundedIcon from "@mui/icons-material/OfflineBoltRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import AlarmOnRoundedIcon from "@mui/icons-material/AlarmOnRounded";
import MultipleStopRoundedIcon from "@mui/icons-material/MultipleStopRounded";
import UltimateTour from "../Home/Components/Ultimate Travel";
type Props = {};

function AboutPage({}: Props) {
  return (
    <Container maxWidth="xl">
      <Headers />
      <About__wrapper>
        <About__content>
          <AboutTitle>
            <Typography variant="h1">
              Making Every Tour an Unforgettable Experience
            </Typography>
            <Typography variant="body1">
              We specialize in providing professional guided tours across the
              stunning landscapes and historic cities of Uzbekistan. Whether
              you're looking for a relaxing city tour or an adventurous mountain
              escape, we offer customized tour packages tailored to your
              preferences. Our packages include comfortable stays at 4-5 star
              hotels, experienced guides, and reliable transport services — all
              at reasonable prices. Let us help you explore the best of
              Uzbekistan with a personalized and unforgettable travel
              experience.
            </Typography>
            <Benifiets>
              <BenifietBox>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <EventAvailableIcon />
                </Box>
                <Typography variant="body1">Time and Stress Savings</Typography>
              </BenifietBox>

              <BenifietBox>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <EventAvailableIcon />
                </Box>
                <Typography variant="body1">Time and Stress Savings</Typography>
              </BenifietBox>
              <BenifietBox>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <EventAvailableIcon />
                </Box>
                <Typography variant="body1">Time and Stress Savings</Typography>
              </BenifietBox>
              <BenifietBox>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <EventAvailableIcon />
                </Box>
                <Typography variant="body1">Time and Stress Savings</Typography>
              </BenifietBox>
            </Benifiets>
          </AboutTitle>
          <AboutImage>
            <img
              src="https://mjcedactmdisysxnyusx.supabase.co/storage/v1/object/sign/gallery/IMG_5324%20(3).JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L0lNR181MzI0ICgzKS5KUEciLCJpYXQiOjE3NDAyMTk5MTEsImV4cCI6MTc3MTc1NTkxMX0.NgLYDZ-H5fRXObULb1lXo-H_ugUAv-dAPiXn7jKscJ4"
              alt=""
            />
          </AboutImage>
        </About__content>
        <Results>
          <Divider />
          <ResBox>
            <Box>
              <GroupsIcon
                sx={{
                  fontSize: 50,
                  color: "#68ae49",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h1">1 k+</Typography>
              <Typography variant="body1">Happy Customers</Typography>
            </Box>
          </ResBox>
          <Divider orientation="vertical" flexItem />
          <ResBox>
            <Box>
              <HowToRegRoundedIcon
                sx={{
                  fontSize: 50,
                  color: "#68ae49",
                }}
              />
            </Box>
            <Box>
              <Typography variant="h1">500 +</Typography>
              <Typography variant="body1">Tours Success</Typography>
            </Box>
          </ResBox>
          <Divider orientation="vertical" />
          <ResBox>
            <Box>
              <SensorOccupiedRoundedIcon
                sx={{
                  fontSize: 50,
                  color: "#68ae49",
                }}
              />
            </Box>
            <Box>
              <Typography variant="h1">10 +</Typography>
              <Typography variant="body1">Travel Guide</Typography>
            </Box>
          </ResBox>
          <Divider />
        </Results>
        <WhyGuideTour>
          <TourTitle>
            <Typography variant="h1">
              Why GuideTour Uzbekistan Is The Best?
            </Typography>
          </TourTitle>
          <Cards__Wrapper>
            <Cards__content>
              <Box
                sx={{
                  padding: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#ddeed6",
                  fontSize: "20px",
                }}
              >
                <PublicRoundedIcon
                  sx={{
                    color: "#68ae49",
                  }}
                />
              </Box>
              <CardTitle>
                <Typography variant="h1">Local Expert Guides</Typography>
                <Typography variant="body1">
                  Our guides are experienced and knowledgeable about the history
                  and culture of Uzbekistan.
                </Typography>
              </CardTitle>
            </Cards__content>
            <Cards__content>
              <Box
                sx={{
                  padding: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#feeed5",
                  fontSize: "20px",
                }}
              >
                <OfflineBoltRoundedIcon
                  sx={{
                    color: "#fcb53e",
                  }}
                />
              </Box>
              <CardTitle>
                <Typography variant="h1">Local Expert Guides</Typography>
                <Typography variant="body1">
                  Our guides are experienced and knowledgeable about the history
                  and culture of Uzbekistan.
                </Typography>
              </CardTitle>
            </Cards__content>
            <Cards__content>
              <Box
                sx={{
                  padding: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#f5f5d3",
                  fontSize: "20px",
                }}
              >
                <InventoryRoundedIcon
                  sx={{
                    color: "#d5d53d",
                  }}
                />
              </Box>
              <CardTitle>
                <Typography variant="h1">Local Expert Guides</Typography>
                <Typography variant="body1">
                  Our guides are experienced and knowledgeable about the history
                  and culture of Uzbekistan.
                </Typography>
              </CardTitle>
            </Cards__content>
            <Cards__content>
              <Box
                sx={{
                  padding: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#ddeed6",
                  fontSize: "20px",
                }}
              >
                <Diversity3RoundedIcon
                  sx={{
                    color: "#68ae49",
                  }}
                />
              </Box>
              <CardTitle>
                <Typography variant="h1">Local Expert Guides</Typography>
                <Typography variant="body1">
                  Our guides are experienced and knowledgeable about the history
                  and culture of Uzbekistan.
                </Typography>
              </CardTitle>
            </Cards__content>
            <Cards__content>
              <Box
                sx={{
                  padding: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#feeed5",
                  fontSize: "20px",
                }}
              >
                <AlarmOnRoundedIcon
                  sx={{
                    color: "#fcb53e",
                  }}
                />
              </Box>
              <CardTitle>
                <Typography variant="h1">Local Expert Guides</Typography>
                <Typography variant="body1">
                  Our guides are experienced and knowledgeable about the history
                  and culture of Uzbekistan.
                </Typography>
              </CardTitle>
            </Cards__content>
            <Cards__content>
              <Box
                sx={{
                  padding: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#feeed5",
                  fontSize: "20px",
                }}
              >
                <MultipleStopRoundedIcon
                  sx={{
                    color: "#fcb53e",
                  }}
                />
              </Box>
              <CardTitle>
                <Typography variant="h1">Local Expert Guides</Typography>
                <Typography variant="body1">
                  Our guides are experienced and knowledgeable about the history
                  and culture of Uzbekistan.
                </Typography>
              </CardTitle>
            </Cards__content>
          </Cards__Wrapper>
          <UltimateTour />
        </WhyGuideTour>
      </About__wrapper>
    </Container>
  );
}

export default AboutPage;
