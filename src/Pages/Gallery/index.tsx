import { useEffect, useState } from "react";
import { Box, CircularProgress, Container } from "@mui/material";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../db/firebase";
import { GalleryWrapper, ImageCard } from "./style";
import Headers from "../Home/Components/header";
import Footer from "../Home/Components/footer";

const db = getFirestore(app);

const GalleryPage = () => {
  const [galleryData, setGalleryData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gallery"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGalleryData(items);
      } catch (error) {
        console.error("❌ Firebase error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  return (
    <>
      <Headers />
      <Container maxWidth="xl">
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 80 }}>
            <CircularProgress />
          </Box>
        ) : (
          <GalleryWrapper>
            {galleryData.map((item, idx) => (
              <ImageCard key={idx}>
                <img
                  src={item.img}
                  alt={item.title || "image"}
                  loading="lazy"
                />
              </ImageCard>
            ))}
          </GalleryWrapper>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default GalleryPage;
