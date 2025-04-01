import {
  CardPrice,
  UltimateCardWrapper,
  UltimateTitle,
  UltimateTourWrapper,
} from "./style";
import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../../db/firebase";
import { useNavigate, useParams } from "react-router-dom";
import BoyIcon from "@mui/icons-material/Boy";
interface GuideData {
  id: string;
  img: string;
  cityName: string;
  cost: string;
  date: string;
}

function UltimateTour() {
  const { guidesData } = useParams();
  const [tour, setTour] = useState<any>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "toursCard"));
        const guidesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTour(guidesData);
      } catch (error) {
        console.error("Firebase Firestore Error:", error);
      }
    };
    fetchGuides();
  }, [guidesData]);

  if (!tour)
    return (
      <Box
        sx={{
          display: "flex",
          height: "70vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  const handleClick = (guidesData: string) => {
    navigate(`/ultimate-service/${guidesData}`);
  };
  return (
    <>
      <Container maxWidth="xl" sx={{ padding: "0" }}>
        <UltimateTitle>
          <Typography variant="h1">Ultimate Travel Experience</Typography>
        </UltimateTitle>
        <UltimateTourWrapper>
          <UltimateCardWrapper>
            {tour.map((item: GuideData) => (
              <Card
                sx={{
                  maxWidth: 460,
                  width: "100%",
                  minWidth: { xs: 350, sm: 400 },
                  boxShadow: 3,
                  padding: "0",
                }}
              >
                <CardActionArea onClick={() => handleClick(item.id)}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={item.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={"bold"}
                    >
                      {item.cityName}
                    </Typography>
                    <Divider
                      sx={{
                        margin: "20px 0 20px 0",
                      }}
                    />
                    <CardPrice>
                      <Box>
                        <Typography fontSize={15}>Starts from:</Typography>
                        <Typography
                          variant="body1"
                          fontSize={28}
                          color="#68ae49"
                          fontWeight={700}
                        >
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
                          gap: "10px",
                        }}
                      >
                        <AccessAlarmIcon />
                        <Typography>{item.date}</Typography>
                      </Box>
                    </CardPrice>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </UltimateCardWrapper>
        </UltimateTourWrapper>
      </Container>
    </>
  );
}

export default UltimateTour;
