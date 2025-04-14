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
  const [scrollY, setScrollY] = useState(0);
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
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          <Box sx={{ width: "100vw", overflowX: "hidden" }}>
            {galleryData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  height: "100vh",
                  zIndex: index,
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    position: "sticky",
                    top: 0,
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
          </Box>
        </GalleryWrapper>
      </Container>
      <Footer />
    </>
  );
}

export default GalleryPage;
