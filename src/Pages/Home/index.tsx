import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./Components/header";
import {
  CardCity__wrapper,
  CityBox,
  CityName,
  ExperienceTitle,
  ExperienceWithTourests__wrapper,
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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useNavigate } from "react-router-dom";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UltimateTour from "./Components/Ultimate Travel";
import ReactPlayer from "react-player";
import Footer from "./Components/footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/firebase";
interface GuideData {
  id: string;
  guideImg: string;
  guideName: string;
}
interface YoutobeShorts {
  video: string;
}
const images = [
  "https://mjcedactmdisysxnyusx.supabase.co/storage/v1/object/sign/gallery/Khiva.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L0toaXZhLnBuZyIsImlhdCI6MTc0MzQ0MjM4NSwiZXhwIjoxNzc0OTc4Mzg1fQ.4CZZe7h_q86ErYFGnSF1NrVXih2bk12yzDy020uAFVE",
  "https://media.meer.com/attachments/4261d95281125fa712800fadfc52ba8367222f85/store/fill/1090/613/4c88f9a416c6dc30eb898bebcaec6f0a164f764b5a4654262a08b2c9208e/Located-in-Zarafshan-Valley-the-Uzbek-region-of-Jizzakh-is-a-wonder-of-nature.jpg",
  "https://www.aljazeera.com/wp-content/uploads/2023/07/Souvenir-vendors-in-Bukhara-Uzbekistan-with-one-of-the-citys-trading-domes-in-the-background.-David-Andreas_Al-Jazeera-1688616446.jpg?resize=1920%2C1080",
  "https://adventuresoflilnicki.com/wp-content/uploads/2020/08/Bolshoi-Allo-Fann-Mountains-Tajikistan-8.jpg",
  "https://www.hlbtj.com/wp-content/uploads/2022/07/dushanbe_cropped.jpg",
];
function Home() {
  const [youtobeShorts, setYoutobeShorts] = useState<YoutobeShorts[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [guide, setGuide] = useState<GuideData[]>([]);
  const [galleryData, setGalleryData] = useState<any[]>([]);
  const navigate = useNavigate();
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const fetchGuides = async () => {
      const querySnapshot = await getDocs(collection(db, "guides"));
      const guidesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGuide(guidesData as GuideData[]);
    };

    const fetchYoutubeVideos = async () => {
      const querySnapshot = await getDocs(collection(db, "youtobeShorts"));
      const youtubeData = querySnapshot.docs.map((doc) => doc.data());
      setYoutobeShorts(youtubeData as YoutobeShorts[]);
    };

    const fetchGalleryData = async () => {
      const querySnapshot = await getDocs(collection(db, "gallery"));
      const galleryItems = querySnapshot.docs.map((doc) => doc.data());
      setGalleryData(galleryItems);
    };

    fetchGuides();
    fetchYoutubeVideos();
    fetchGalleryData();
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
  return (
    <>
      <Header />
      <Registan__wrapper>
        <Box
          className="slider-container"
          sx={{
            background: `url(${images[currentIndex]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "75vh",
            boxShadow: "none !important",
            width: "100%",
          }}
        >
          <Button className="prev" onClick={prevSlide}>
            ❮
          </Button>
          <Button className="next" onClick={nextSlide}>
            ❯
          </Button>
        </Box>
      </Registan__wrapper>
      <Container maxWidth="xl">
        <Tour_Actives>
          <TourActTitle>
            <Typography variant="h1">Exploring Tour Activities</Typography>
          </TourActTitle>
          <TourGallery>
            {youtobeShorts.map((item: any) => (
              <Box
                key={item.video}
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <ReactPlayer
                  url={item.video}
                  controls
                  width="250px"
                  height="450px"
                  style={{
                    borderRadius: "10px",
                  }}
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
                borderRadius={1}
                sx={{
                  width: "600px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  alignItems: "center",
                  marginTop: "78px",
                  // transform: "rotate(-4deg)",
                }}
              >
                <Box borderRadius={1}>
                  <GoodSides>
                    <GoodSidesIcon>
                      <HealthAndSafetyIcon />
                    </GoodSidesIcon>
                    Safety First Always
                  </GoodSides>
                </Box>
                <Box borderRadius={1}>
                  <GoodSides>
                    <GoodSidesIcon>
                      <HourglassBottomIcon />
                    </GoodSidesIcon>
                    Safety First Always
                  </GoodSides>
                </Box>
                <Box borderRadius={1}>
                  <GoodSides>
                    <GoodSidesIcon>
                      <HealthAndSafetyIcon />
                    </GoodSidesIcon>
                    Safety First Always
                  </GoodSides>
                </Box>
                <Box borderRadius={1}>
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
            <SpotTitle>
              <Typography variant="h1">Finest Tourist Spot</Typography>
            </SpotTitle>
            <CardCity__wrapper>
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
                    <AccordionDetails
                      sx={{
                        textAlign: "left",
                      }}
                    >
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
                    <AccordionDetails
                      sx={{
                        textAlign: "left",
                      }}
                    >
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
                    <AccordionDetails
                      sx={{
                        textAlign: "left",
                      }}
                    >
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
                    <AccordionDetails sx={{ textAlign: "left" }}>
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
