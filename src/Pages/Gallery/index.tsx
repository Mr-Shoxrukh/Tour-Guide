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
  const [loading, setLoading] = useState<boolean>(true);
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
      } finally {
        setLoading(false); // ❌ loading tugadi
      }
    };

    fetchDataByDB();
  }, []);
  if (!loading) {
    <Box
      sx={{
        display: "flex",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>;
  }
  return (
    <>
      <Headers />
      <Container maxWidth="xl">
        <GalleryWrapper>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "390px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {galleryData.slice(0, 5).map((item, index) => (
                <Box
                  key={index}
                  component="img"
                  src={item.img}
                  alt={item.title}
                  loading="lazy" // 👈 Lazy load
                  decoding="async" // 👈 Better performance
                  width="100%" // 👈 explicit width
                  height="auto"
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
                gap: "20px",
              }}
            >
              {galleryData.slice(7, 13).map((item, index) => (
                <Box
                  key={index}
                  component="img"
                  src={item.img}
                  alt={item.title}
                  loading="lazy" // 👈 Lazy load
                  decoding="async" // 👈 Better performance
                  width="100%" // 👈 explicit width
                  height="auto"
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
                width: "390px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {galleryData.slice(14, 18).map((item, index) => (
                <Box
                  key={index}
                  component="img"
                  src={item.img}
                  alt={item.title}
                  loading="lazy" // 👈 Lazy load
                  decoding="async" // 👈 Better performance
                  width="100%" // 👈 explicit width
                  height="auto"
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
                gap: "20px",
              }}
            >
              {galleryData.slice(19, 26).map((item, index) => (
                <Box
                  key={index}
                  component="img"
                  src={item.img}
                  alt={item.title}
                  loading="lazy" // 👈 Lazy load
                  decoding="async" // 👈 Better performance
                  width="100%" // 👈 explicit width
                  height="auto"
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
