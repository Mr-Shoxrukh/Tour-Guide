import { useEffect, useState } from "react";

import { Box, CircularProgress, Container } from "@mui/material";

import { app } from "../../db/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import Headers from "../Home/Components/header";
import Footer from "../Home/Components/footer";

import { GalleryWrapper, ImageCard } from "./style";

const db = getFirestore(app);

const GalleryPage = () => {
  const [galleryData, setGalleryData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "gallery"));
        setGalleryData(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch {
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
