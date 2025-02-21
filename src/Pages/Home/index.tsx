import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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
  SelectGuide,
  SpotTitle,
  SpotTourst,
  Tour_Actives,
  TourActTitle,
  TourGallery,
  WithTourestyImg,
} from "./styled";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import activeTourist from "./Components/img/activeTourist.jpg";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { createClient } from "@supabase/supabase-js";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useNavigate } from "react-router-dom";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import { ROUTES_PATH } from "../../routes/path";

type Props = {};

const cards = [
  {
    id: 1,
    img: " https://mjcedactmdisysxnyusx.supabase.co/storage/v1/object/sign/gallery/23b5ab5c-71eb-48b3-939c-3233c043bd56_removalai_preview.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5LzIzYjVhYjVjLTcxZWItNDhiMy05MzljLTMyMzNjMDQzYmQ1Nl9yZW1vdmFsYWlfcHJldmlldy5wbmciLCJpYXQiOjE3Mzk5NTgzNTEsImV4cCI6MTc3MTQ5NDM1MX0.gC9R_b513OITxVlnzzPa1vP1cmT9OhKeoscyDdLxmeA",
    title: "Sanat Berdiyev",
    description: "This is the first card.",
  },
  {
    id: 2,
    img: "https://mjcedactmdisysxnyusx.supabase.co/storage/v1/object/sign/gallery/b074ecea-5057-495f-bb9c-fc9acdcfe550_removalai_preview.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L2IwNzRlY2VhLTUwNTctNDk1Zi1iYjljLWZjOWFjZGNmZTU1MF9yZW1vdmFsYWlfcHJldmlldy5wbmciLCJpYXQiOjE3Mzk5NTgyMzIsImV4cCI6MTc3MTQ5NDIzMn0.xe7BHxi4IXhCKaZb5imVaA3uILN2cM0DHIBHtKJbgM4",
    title: "Olimjon Tolipov",
    description: "This is the second card.",
  },
];

function Home({}: Props) {
  const [getData, steData] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedGuide, setSelectedGuide] = useState(cards[0]);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const supabaseUrl = "https://mjcedactmdisysxnyusx.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2VkYWN0bWRpc3lzeG55dXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzE0MjksImV4cCI6MjA1NTQ0NzQyOX0.9slbpltg1VrHV4ZxI6gcXvP9zus0kXpQH6oqFmy_RO0";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const nextCard = () => {
    if (step === 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      setStep(2); // 1-stepdan 2-stepga o'tish
    }
  };

  const prevCard = () => {
    if (step === 2) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
      );
      setStep(1); // 2-stepdan 1-stepga qaytish
    }
  };
  useEffect(() => {
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
  }, []);
  const handleBooking = () => {
    navigate(ROUTES_PATH.BOOKING, {
      state: { guide: selectedGuide, step: currentIndex },
    });
  };
  return (
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
              justifyContent: "center",
            }}
          >
            <motion.img
              src={cards[currentIndex].img}
              alt="Guide"
              className="guide-image"
              initial={{ y: 100, opacity: 0 }} // Boshlanish holati (pastda)
              animate={{ y: 0, opacity: 1 }} // Animatsiya bo'lgandan keyin
              transition={{ duration: 0.5, ease: "easeOut" }} // Sekin-asta chiqadi
              key={currentIndex}
              style={{
                width: "300px",
              }} // step o‘zgarsa animatsiya yangilanadi
            />
          </Box>
          <Typography variant="h1" fontSize={22}>
            {cards[currentIndex].title}
          </Typography>
          <SelectGuide>
            <Button variant="contained" onClick={prevCard}>
              <WestIcon />
            </Button>

            <Button variant="outlined" onClick={handleBooking}>
              Book Now
            </Button>

            {currentIndex < 2 && (
              <Button variant="contained" onClick={nextCard}>
                <EastIcon />
              </Button>
            )}
          </SelectGuide>
        </BookingGuide>
      </Registan__wrapper>
      <Tour_Actives>
        <TourActTitle>
          <Typography variant="h1" fontWeight={"bold"}>
            Exploring Tour Activities
          </Typography>
        </TourActTitle>
        <TourGallery>
          {getData.map((item: any) => (
            <Box>
              <img src={item.img} alt="" />
              <Typography>{item.title}</Typography>
            </Box>
          ))}
        </TourGallery>
      </Tour_Actives>
      <ExperienceWithTourests__wrapper>
        <WithTourestyImg>
          <ExperienceTitle>
            <Typography variant="h1">Experience Uzbekistan with Us</Typography>
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
                    through Samarkand. The most important attractions: Registan
                    Square with three madrasahs of the 15th and 17th centuries,
                    richly decorated with majolica, and the Gur-Emir Mausoleum -
                    the majestic tomb of Timur (Tamerlane), the founder of the
                    Timurid Empire
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
                    Silk Road (the trade route connecting East and West) ran. In
                    the Middle Ages the city was a major center of Islamic
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
                    walls, the historical inner city of Khiva - the pearl of the
                    Khorezm oasis - has been declared a UNESCO World Heritage
                    Site.
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
                    architecture. The Timurid History Museum houses manuscripts,
                    weapons and other relics of the famous dynasty. The Tashkent
                    TV Tower rises above the city, from the observation deck of
                    which a panoramic view of the city opens.
                  </AccordionDetails>
                </Accordion>
              </CityName>
            </CityBox>
          </CardCity__wrapper>
        </MApImg>
      </SpotTourst>
    </Container>
  );
}

export default Home;
