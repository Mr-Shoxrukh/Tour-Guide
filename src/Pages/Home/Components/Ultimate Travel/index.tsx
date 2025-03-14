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
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../db/firebase";
interface GuideData {
  id: string;
  cityName: string;
  cost: string;
  img: string;
}

function UltimateTour() {
  const [tourData, setTourData] = useState<any[]>([]);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "toursCard"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTourData(data);
      } catch (error) {
        console.error("Firebase Firestore Error:", error);
      }
    };

    fetchGuides();
  }, []);

  const handleClick = () => {
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
