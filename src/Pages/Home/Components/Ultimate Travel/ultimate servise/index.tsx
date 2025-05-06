import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { db } from "../../../../../db/firebase";
import Headers from "../../header";
import Footer from "../../footer";

import {
  CityName_title,
  CostItem,
  UltimateServise__wrapper,
  UltimateServiseImg,
} from "./style";

type ItineraryItem = {
  title: string;
  place1: string;
  place2: string;
  place3: string;
  place4: string;
  place5: string;
  place6: string;
  place7: string;
  place8: string;
  place9: string;
  place10: string;
  place11: string;
  placeInfo1: string;
  placeInfo2: string;
  placeInfo3: string;
  placeInfo4: string;
  placeInfo5: string;
  placeInfo6: string;
  placeInfo7: string;
  placeInfo8: string;
  placeInfo9: string;
  placeInfo10: string;
  placeInfo11: string;
};

const UltimateService = () => {
  const { tourId } = useParams();
  const [tour, setTour] = useState<any>(null);
  const [itinerary, setItinerary] = useState<ItineraryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("1");
  const navigate = useNavigate();

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
          const tourData = docSnap.data();
          setTour({ id: docSnap.id, ...tourData });

          // ✅ Sub-collectiondan itinerary olish
          const itineraryRef = collection(db, "toursCard", tourId, "itinerary");
          const itinerarySnap = await getDocs(itineraryRef);

          const itineraryList: ItineraryItem[] = itinerarySnap.docs.map(
            (doc) => ({
              ...doc.data(),
            })
          ) as ItineraryItem[];

          setItinerary(itineraryList);
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

  const handleBook = () => {
    if (tour?.id) {
      navigate("/contact");
    } else {
      toast.error("Tour ID topilmadi!");
    }
  };

  if (loading) {
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
  }

  return (
    <>
      <Headers />
      <Container maxWidth="xl">
        <UltimateServise__wrapper>
          <Box
            sx={{
              maxWidth: "1300px",
              width: "100%",
              padding: "40px 0 0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CityName_title>
              <Typography variant="h1">{tour.cityName}</Typography>
            </CityName_title>

            <UltimateServiseImg>
              <img loading="lazy" src={tour.img} alt="" />
            </UltimateServiseImg>

            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <TabList onChange={handleChange}>
                  <Tab label="Overview" value="1" />
                  <Tab label="Itinerary" value="2" />
                  <Tab label="Included" value="3" />
                </TabList>
              </Box>

              <TabPanel value="1" sx={{ padding: 0 }}>
                <Box
                  border={1}
                  borderColor={"divider"}
                  padding={2}
                  borderRadius={2}
                  marginTop={2}
                >
                  <Typography>{tour.overview}</Typography>
                  <Typography marginTop={3}>{tour.date}</Typography>
                </Box>
              </TabPanel>
              <TabPanel value="2" sx={{ padding: 0 }}>
                <Box
                  border={1}
                  borderColor={"divider"}
                  padding={2}
                  borderRadius={2}
                  marginTop={2}
                >
                  {tour.id === "q4NzOm4uREw3QuA83ONP" ||
                  tour.id === "ANOTHER_FIREBASE_ID" ? (
                    itinerary.length > 0 ? (
                      itinerary.map((item: any, index: number) => (
                        <Box sx={{ marginBottom: "20px" }}>
                          <Typography variant="h6">1.{item.place1}</Typography>
                          <Typography variant="body1">
                            {item.placeInfo1}
                          </Typography>
                          <Typography variant="h6">2.{item.place2}</Typography>
                          <Typography variant="body1">
                            {item.placeInfo2}
                          </Typography>
                          <Typography variant="h6">3.{item.place3}</Typography>
                          <Typography variant="body1">
                            {item.placeInfo3}
                          </Typography>
                          <Typography variant="h6">4.{item.place4}</Typography>
                          <Typography variant="body1">
                            {item.placeInfo4}
                          </Typography>
                          <Typography variant="h6">5.{item.place5}</Typography>
                          <Typography variant="body1">
                            {item.placeInfo5}
                          </Typography>
                          <Typography variant="h6">6.{item.place6}</Typography>
                          <Typography variant="body1">
                            {item.placeInfo6}
                          </Typography>
                          <Typography variant="h6">7.{item.place7}</Typography>
                          <Typography variant="body1">
                            {item.placeInfo7}
                          </Typography>
                          <Typography variant="h6">8.{item.place8}</Typography>
                          <Typography variant="body1">
                            {item.placeInfo8}
                          </Typography>
                          <Typography variant="h6">9.{item.place9}</Typography>
                          <Typography variant="body1">
                            {item.placeInfo9}
                          </Typography>
                          <Typography variant="h6">
                            10.{item.place10}
                          </Typography>
                          <Typography variant="body1">
                            {item.placeInfo10}
                          </Typography>
                          <Typography variant="h6">
                            11.{item.place11}
                          </Typography>
                          <Typography variant="body1">
                            {item.placeInfo11}
                          </Typography>
                        </Box>
                      ))
                    ) : (
                      <Typography color="text.secondary">
                        Itinerary ma’lumotlari topilmadi.
                      </Typography>
                    )
                  ) : (
                    <Box padding={0}>
                      <Typography variant="h5" fontWeight="bold">
                        Day 1: Arrival in Tashkent
                      </Typography>
                      • Khast Imam Complexb <br />
                      • Chorsu Bazaar • Kukeldash Madrasah <br />
                      • Amir Timur Square <br />
                      • Independence Square <br />
                      •Tashkent Metro (most beautiful stations) <br />
                      • Museum of Applied <br />
                      <br />
                      <Typography variant="h5" fontWeight="bold">
                        Arts Day 2 – Amirsay (Ski Resort)
                      </Typography>
                      • Amirsay Ski Resort (skiing, snowboarding, cable car
                      ride) <br />
                      • Chimgan Mountains(optional) <br /> • Charvak Reservoir
                      (optional, depends on season)
                      <br />
                      <br />
                      <Typography variant="h5" fontWeight="bold">
                        Day 3: Arrival in Samarkhand
                      </Typography>
                      • Registan Square <br />
                      • Gur-e-Amir Mausoleum <br />
                      • Bibi-Khanym Mosque <br />
                      • Siyob Bazaar <br />
                      • Shah-i-Zinda Necropolis <br />• Ulugh Beg Observatory
                      <br />
                      <br />
                      <Typography variant="h5" fontWeight="bold">
                        Day 4 – Samarkand (continued)
                      </Typography>
                      • Afrosiyab Museum & Ancient Settlement <br />
                      • Hazrat Khizr Mosque <br />
                      • Mausoleum of Saint Daniel • Konigil Paper Mill
                      (traditional paper-making) <br />• Wine tasting at
                      Khovrenko Winery (optional)
                      <br />
                      <br />
                      <Typography variant="h5" fontWeight="bold">
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
                      <Typography variant="h5" fontWeight="bold">
                        Day 6 – Bukhara (continued)
                      </Typography>
                      • Ark Fortress <br />
                      • Bolo Haouz Mosque <br />
                      • Samanid Mausoleum <br />
                      • Chashma Ayub Mausoleum <br />• Chor Minor • Sitora-i
                      Mokhi Khosa (Summer Palace of the Emir) <br />
                      • Chor Minor <br />
                      •Sitora-i Mokhi Khosa (Summer Palace of the Emir)
                      <br />
                      <br />
                      <Typography>{tour.date}</Typography>
                      {/* Shu tarzda qolgan kunlarni ham yozasiz */}
                    </Box>
                  )}
                </Box>
              </TabPanel>

              <TabPanel value="3" sx={{ padding: 0 }}>
                <Box
                  border={1}
                  borderColor={"divider"}
                  padding={2}
                  borderRadius={2}
                  marginTop={2}
                >
                  <Typography fontWeight="bold" fontSize={23}>
                    Include:
                  </Typography>
                  <Typography>
                    ✅ Local guides in Tashkent, Samarkand, and Bukhara
                  </Typography>
                  <Typography>
                    ✅ Private transportation within each city
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography fontWeight="bold" fontSize={23}>
                    Not Include:
                  </Typography>
                  <Typography>❌ International flights</Typography>
                  <Typography>❌ Lunch & dinner</Typography>
                  <Typography>❌ Entrance tickets</Typography>
                </Box>
              </TabPanel>
            </TabContext>
          </Box>

          <Box sx={{ maxWidth: "400px", width: "100%", padding: "20px 0" }}>
            <CostItem>
              <Typography variant="h1" margin={"0 0 10px 0"}>
                {tour.cost}$
              </Typography>
              <Typography variant="body1">Duration: {tour.date}</Typography>
              <Divider sx={{ margin: "20px 0" }} />
              <Button
                variant="contained"
                sx={{ marginTop: "20px" }}
                onClick={handleBook}
              >
                Book Now
              </Button>
            </CostItem>
          </Box>
        </UltimateServise__wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default UltimateService;
