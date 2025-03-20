import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../../db/firebase";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Headers from "../../../../../Home/Components/header";
import Footer from "../../../footer";
import {
  CityName_title,
  Itinerary,
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

  if (loading)
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

          <Box
            sx={{
              maxWidth: "849px",
              width: "100%",
              typography: "body1",
              padding: 0,
            }}
          >
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
              <TabPanel
                value="2"
                sx={{
                  padding: "0",
                }}
              >
                <Itinerary>
                  <Typography
                    variant="h1"
                    fontSize={23}
                    marginTop={0}
                    fontWeight={"bold"}
                  >
                    Day 1: Arrival in Tashkent
                  </Typography>
                  • Khast Imam Complexb <br />
                  • Chorsu Bazaar • Kukeldash Madrasah <br />
                  • Amir Timur Square <br />
                  • Independence Square <br />
                  •Tashkent Metro (most beautiful stations) <br />
                  • Museum of Applied <br />
                  <br />
                  <Typography
                    variant="h1"
                    fontSize={23}
                    marginTop={0}
                    fontWeight={"bold"}
                  >
                    Arts Day 2 – Amirsay (Ski Resort)
                  </Typography>
                  • Amirsay Ski Resort (skiing, snowboarding, cable car ride){" "}
                  <br />
                  • Chimgan Mountains(optional) <br /> • Charvak Reservoir
                  (optional, depends on season)
                  <br />
                  <br />
                  <Typography
                    variant="h1"
                    fontSize={23}
                    marginTop={0}
                    fontWeight={"bold"}
                  >
                    Day 3: Arrival in Samarkhand
                  </Typography>
                  • Registan Square <br />
                  • Gur-e-Amir Mausoleum <br />
                  • Bibi-Khanym Mosque <br />
                  • Siyob Bazaar <br />
                  • Shah-i-Zinda Necropolis <br />• Ulugh Beg Observatory
                  <br />
                  <br />
                  <Typography
                    variant="h1"
                    fontSize={23}
                    marginTop={0}
                    fontWeight={"bold"}
                  >
                    Day 4 – Samarkand (continued)
                  </Typography>
                  • Afrosiyab Museum & Ancient Settlement <br />
                  • Hazrat Khizr Mosque <br />
                  • Mausoleum of Saint Daniel • Konigil Paper Mill (traditional
                  paper-making) <br />• Wine tasting at Khovrenko Winery
                  (optional)
                  <br />
                  <br />
                  <Typography
                    variant="h1"
                    fontSize={23}
                    marginTop={0}
                    fontWeight={"bold"}
                  >
                    Day 5 – Bukhara
                  </Typography>
                  • Lyab-i Hauz Ensemble <br />
                  • Nadir Divan-Begi Madrasah <br />
                  • Magoki-Attori Mosque <br />
                  • Trade Domes (Toki Sarrafon, Toki Zargaron, Toki Telpak
                  Furushon) <br />• Kalyan Minaret & Mosque • Mir-i-Arab
                  Madrasah
                  <br />
                  <br />
                  <Typography
                    variant="h1"
                    fontSize={23}
                    marginTop={0}
                    fontWeight={"bold"}
                  >
                    Day 6 – Bukhara (continued)
                  </Typography>
                  • Ark Fortress <br />
                  • Bolo Haouz Mosque <br />
                  • Samanid Mausoleum <br />
                  • Chashma Ayub Mausoleum <br />• Chor Minor • Sitora-i Mokhi
                  Khosa (Summer Palace of the Emir) <br />
                  • Chor Minor <br />
                  •Sitora-i Mokhi Khosa (Summer Palace of the Emir)
                  <br />
                  <br />
                  <Typography>{tour.date}</Typography>
                </Itinerary>
              </TabPanel>
              <TabPanel
                value="1"
                sx={{
                  padding: "0",
                }}
              >
                <Box
                  width={600}
                  p={0}
                  sx={{
                    width: "100%",
                    padding: "20px 15px",
                    border: "1px solid black",
                    borderColor: "divider",
                    marginTop: "20px",
                    borderRadius: "0.5rem",
                  }}
                >
                  {tour.overview}
                  <br />
                  <br />
                  <Typography>{tour.date}</Typography>
                </Box>
              </TabPanel>
              <TabPanel
                value="3"
                sx={{
                  padding: "0",
                }}
              >
                <Itinerary>
                  <Typography fontWeight={"bold"}>Included:</Typography>
                </Itinerary>
              </TabPanel>
            </TabContext>
          </Box>
        </UltimateServise__wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default UltimateService;
