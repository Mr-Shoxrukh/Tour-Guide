import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../../db/firebase";
import { Box, Container, Typography } from "@mui/material";
import Headers from "../../../../../Home/Components/header";
import Footer from "../../../footer";
import {
  CityName_title,
  UltimateServise__wrapper,
  UltimateServiseImg,
} from "./style";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
const UltimateService = () => {
  const { tourId } = useParams();
  const [tour, setTour] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  useEffect(() => {
    const fetchTour = async () => {
      if (!tourId) return;
      try {
        const docRef = doc(db, "toursCard", tourId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTour({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching tour:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [tourId]);

  if (loading) return <p>Loading...</p>;
  if (!tour) return <p>Tour not found</p>;

  return (
    <>
      <Headers />
      <Container maxWidth="xl">
        <UltimateServise__wrapper>
          <CityName_title>
            <Typography variant="h1">{tour.cityName}</Typography>
          </CityName_title>
          <UltimateServiseImg>
            <img src={tour.img} alt="" />
          </UltimateServiseImg>
          <Box>
            <Typography variant="body1">Cost: ${tour.cost}</Typography>
            <Typography variant="body2">{tour.date}</Typography>
          </Box>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Overview" value="1" />
                  <Tab label="Itinerary" value="2" />
                  <Tab label="Included" value="3" />
                </TabList>
              </Box>
              <TabPanel value="2">
                <Box width={600}>{tour.day1}</Box>
              </TabPanel>
              <TabPanel value="2"></TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
          </Box>
        </UltimateServise__wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default UltimateService;
