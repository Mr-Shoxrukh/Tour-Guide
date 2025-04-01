import { useEffect, useState } from "react";
import { Container, Box, CircularProgress } from "@mui/material";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../db/firebase";
import { GalleryWrapper } from "./style";
import Headers from "../Home/Components/header";
import Footer from "../Home/Components/footer";
const db = getFirestore(app);
function GalleryPage() {
  const [galleryData, setGalleryData] = useState<any[]>([]);
  useEffect(() => {
    const fetchDataByDB = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gallery"));
        const galleryItems = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setGalleryData(galleryItems);
      } catch (error) {
        console.error("🔥 Firebase xatosi:", error);
      }
    };

    fetchDataByDB();
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Headers />
        <GalleryWrapper>
          <Box
            sx={{
              display: "flex", // Ustunlarni yonma-yon joylashtirish
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* 1-ustun (1-5 rasmlar) */}
            <Box
              sx={{
                width: "350px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                rowGap: "10px",
              }}
            >
              {galleryData.slice(0, 6).map((item, index) => (
                <Box
                  key={index}
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              ))}
            </Box>

            {/* 2-ustun (6-10 rasmlar) */}
            <Box
              sx={{
                width: "350px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                rowGap: "10px",
              }}
            >
              {galleryData.slice(7, 14).map((item, index) => (
                <Box
                  key={index}
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              ))}
            </Box>
            <Box
              sx={{
                width: "350px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                rowGap: "10px",
              }}
            >
              {galleryData.slice(14, 19).map((item, index) => (
                <Box
                  key={index}
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              ))}
            </Box>
            <Box
              sx={{
                width: "350px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {galleryData.slice(19, 23).map((item, index) => (
                <Box
                  key={index}
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              ))}
            </Box>
          </Box>
        </GalleryWrapper>
      </Container>
      <Footer />
    </>
  );
}

export default GalleryPage;
