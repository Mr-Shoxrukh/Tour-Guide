import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./Components/header";
import {
  BookingGuide,
  CardCity__wrapper,
  CityBox,
  CityName,
  ExperienceTitle,
  ExperienceWithTourests__wrapper,
  GetStart_btn,
  GoodSides,
  GoodSidesIcon,
  MApImg,
  Registan__wrapper,
  SpotTitle,
  SpotTourst,
  Tour_Actives,
  TourActTitle,
  TourGallery,
  WithTourestyImg,
} from "./styled";
import activeTourist from "./Components/img/activeTourist.jpg";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import CircularProgress from "@mui/material/CircularProgress";
import { createClient } from "@supabase/supabase-js";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useNavigate } from "react-router-dom";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import { ROUTES_PATH } from "../../routes/path";
import { UltimateCardWrapper } from "./Components/Ultimate Travel/style";
import UltimateTour from "./Components/Ultimate Travel";
import ReactPlayer from "react-player";
import Footer from "./Components/footer";

interface GuideData {
  id: any;
  guideImg: string;
  guideName: string;
}
interface YoutobeShorts {
  video: string;
}
function Home() {
  const [getData, steData] = useState<any>([]);
  const [youtobeShorts, setYoutobeShorts] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [guide, setGuide] = useState<any>([]);
  const [step, setStep] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const supabaseUrl = "https://mjcedactmdisysxnyusx.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2VkYWN0bWRpc3lzeG55dXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzE0MjksImV4cCI6MjA1NTQ0NzQyOX0.9slbpltg1VrHV4ZxI6gcXvP9zus0kXpQH6oqFmy_RO0";
  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {
    const fetchGuides = async () => {
      const { data, error } = await supabase.from("guides").select("*");
      if (error) {
        console.error("Supabase Error:", error);
      } else {
        setGuide(data as GuideData[]);
      }
    };
    const fetchYoutobeVideo = async () => {
      const { data, error } = await supabase.from("youtobeShorts").select("*");
      if (error) {
        console.error("Supabase Error:", error);
      } else {
        setYoutobeShorts(data as YoutobeShorts[]);
      }
    };
    const fetchDataByDB = async () => {
      try {
        const { data, error } = await supabase.from("gallery").select("*");
        if (error) {
          console.error("Supabase xatosi:", error.message);
        } else {
          console.log("Ma’lumotlar:", data);
        }
        steData(data);
      } catch (err) {
        console.error("Unique error:", err);
      }
    };

    fetchDataByDB();
    fetchGuides();
    fetchYoutobeVideo();
  }, []);
  if (guide.length === 0) {
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
  const nextCard = () => {
    if (step === 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % getData.length);
      setActiveIndex((prev) => (prev + 1) % getData.length);
      setStep(2);
    }
  };

  const prevCard = () => {
    if (step === 2) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + getData.length) % getData.length
      );
      setActiveIndex((prev) => (prev + 1) % getData.length);
      setStep(1);
    }
  };
  const handleBooking = (guide: string) => {
    navigate(`/booking/${guide}`);
  };
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <Registan__wrapper>
          <Box
            sx={{
              width: "560px",
              paddingLeft: "20px",
            }}
          >
            <Typography variant="h1" color="#fff" fontSize={44}>
              Uzbekistan Tours <br /> Explore Every Region with Expert Guides
            </Typography>
            <GetStart_btn>
              <Button variant="contained">Buy</Button>
            </GetStart_btn>
          </Box>
          <BookingGuide>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {guide.length > 0 && guide[activeIndex]?.guideImg ? (
                <motion.img
                  src={guide[activeIndex].guideImg}
                  alt="Guide"
                  className="guide-image"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  key={activeIndex}
                  style={{ width: "300px" }}
                />
              ) : (
                <p>Loading...</p>
              )}

              <Typography variant="h1" fontSize={22}>
                {guide[activeIndex].guideName}
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 2,
                }}
              >
                <Button variant="contained" onClick={prevCard}>
                  Prev
                </Button>
                <Button onClick={() => handleBooking(guide[activeIndex].id)}>
                  Book now
                </Button>
                <Button variant="contained" onClick={nextCard}>
                  Next
                </Button>
              </Box>
            </Box>
          </BookingGuide>
        </Registan__wrapper>
        <Tour_Actives>
          <TourActTitle>
            <Typography variant="h1" fontWeight={"bold"}>
              Exploring Tour Activities
            </Typography>
          </TourActTitle>
          <TourGallery>
            {youtobeShorts.map((item: any) => (
              <Box key={item.video}>
                <ReactPlayer
                  url={item.video}
                  controls
                  width="100%"
                  height="400px"
                />
              </Box>
            ))}
          </TourGallery>
        </Tour_Actives>
        <ExperienceWithTourests__wrapper>
          <WithTourestyImg>
            <ExperienceTitle>
              <Typography variant="h1">
                Experience Uzbekistan with Us
              </Typography>
              <Typography variant="body1">
                We specialize in providing professional guided tours across the
                stunning landscapes and historic cities of Uzbekistan. Whether
                you're looking for a relaxing city tour or an adventurous
                mountain escape, we offer customized tour packages tailored to
                your preferences. Our packages include comfortable stays at 4-5
                star hotels, experienced guides, and reliable transport services
                — all at reasonable prices. Let us help you explore the best of
                Uzbekistan with a personalized and unforgettable travel
                experience.
              </Typography>
              <Box
                sx={{
                  width: "600px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  alignItems: "center",
                  marginTop: "30px",
                }}
              >
                <Box boxShadow={3}>
                  <GoodSides>
                    <GoodSidesIcon>
                      <HealthAndSafetyIcon />
                    </GoodSidesIcon>
                    Safety First Always
                  </GoodSides>
                </Box>
                <Box boxShadow={3}>
                  <GoodSides>
                    <GoodSidesIcon>
                      <HourglassBottomIcon />
                    </GoodSidesIcon>
                    Safety First Always
                  </GoodSides>
                </Box>
                <Box boxShadow={3}>
                  <GoodSides>
                    <GoodSidesIcon>
                      <HealthAndSafetyIcon />
                    </GoodSidesIcon>
                    Safety First Always
                  </GoodSides>
                </Box>
                <Box boxShadow={3}>
                  <GoodSides>
                    <GoodSidesIcon>
                      <HealthAndSafetyIcon />
                    </GoodSidesIcon>
                    Safety First Always
                  </GoodSides>
                </Box>
              </Box>
            </ExperienceTitle>
            <img src={activeTourist} alt="" />
          </WithTourestyImg>
        </ExperienceWithTourests__wrapper>
        <SpotTourst>
          <MApImg>
            <CardCity__wrapper>
              <SpotTitle>
                <Typography variant="h1">Finest Tourist Spot</Typography>
              </SpotTitle>
              <CityBox>
                <img
                  src="https://mjcedactmdisysxnyusx.supabase.co/storage/v1/object/sign/gallery/registan.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L3JlZ2lzdGFuLnBuZyIsImlhdCI6MTczOTk3MTM3OSwiZXhwIjoxNzcxNTA3Mzc5fQ.FHYhfbfIUNzKCtNWN_XkTe2rSMdcgu-FQXonC8QC1ac"
                  alt=""
                />
                <CityName>
                  <Accordion
                    sx={{
                      border: "1px solid white",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">Samarkhand</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      Samarkand is a city in Uzbekistan, famous for its mosques
                      and mausoleums. The Great Silk Road, a trade route that
                      connected China with the Mediterranean countries, ran
                      through Samarkand. The most important attractions:
                      Registan Square with three madrasahs of the 15th and 17th
                      centuries, richly decorated with majolica, and the
                      Gur-Emir Mausoleum - the majestic tomb of Timur
                      (Tamerlane), the founder of the Timurid Empire
                    </AccordionDetails>
                  </Accordion>
                </CityName>
              </CityBox>
              <CityBox>
                <img
                  src="https://mjcedactmdisysxnyusx.supabase.co/storage/v1/object/sign/gallery/Bukhara.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L0J1a2hhcmEuanBnIiwiaWF0IjoxNzM5OTcxNTMxLCJleHAiOjE3NzE1MDc1MzF9.XmhcAL7KKvrmYTPWNoPS1Nf6eMgreDsDPDVTk0yYEaI"
                  alt=""
                />
                <CityName>
                  <Accordion
                    sx={{
                      border: "1px solid white",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">Bukhara</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      Bukhara is an ancient Uzbek city through which the Great
                      Silk Road (the trade route connecting East and West) ran.
                      In the Middle Ages the city was a major center of Islamic
                      theology and culture. To this day, there are hundreds of
                      well-preserved buildings (mosques, madrassas, bazaars and
                      caravanserais) built between the 9th and 17th centuries.
                    </AccordionDetails>
                  </Accordion>
                </CityName>
              </CityBox>
              <CityBox>
                <img
                  src="https://mjcedactmdisysxnyusx.supabase.co/storage/v1/object/sign/gallery/Khiva.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L0toaXZhLnBuZyIsImlhdCI6MTczOTk3MTYxNiwiZXhwIjoxNzcxNTA3NjE2fQ.Hu8cHDcxs6QhuO0fDIQy3MJyTJSxmSJ952IxQx1xdG0"
                  alt=""
                />
                <CityName>
                  <Accordion
                    sx={{
                      border: "1px solid white",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">Khiva</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      Khiva is a city in the Khorezm region of Uzbekistan, the
                      administrative center of the Khiva region. In 1997, Khiva
                      celebrated its 2500th anniversary. Surrounded by powerful
                      walls, the historical inner city of Khiva - the pearl of
                      the Khorezm oasis - has been declared a UNESCO World
                      Heritage Site.
                    </AccordionDetails>
                  </Accordion>
                </CityName>
              </CityBox>
              <CityBox>
                <img
                  src="https://mjcedactmdisysxnyusx.supabase.co/storage/v1/object/sign/gallery/TAshkent2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L1RBc2hrZW50Mi5qcGciLCJpYXQiOjE3Mzk5NzE4OTMsImV4cCI6MTc3MTUwNzg5M30.432yWRYcf6rpS0Q6S_DnAu4O-TTIcALvt8pm8073yoI"
                  alt=""
                />
                <CityName>
                  <Accordion
                    sx={{
                      border: "1px solid white",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">Tashkent</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      Tashkent is the capital of Uzbekistan, which is famous for
                      its numerous museums and combination of modern and Soviet
                      architecture. The Timurid History Museum houses
                      manuscripts, weapons and other relics of the famous
                      dynasty. The Tashkent TV Tower rises above the city, from
                      the observation deck of which a panoramic view of the city
                      opens.
                    </AccordionDetails>
                  </Accordion>
                </CityName>
              </CityBox>
            </CardCity__wrapper>
          </MApImg>
        </SpotTourst>
        <UltimateTour />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
