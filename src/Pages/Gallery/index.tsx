import { useEffect, useState } from "react";
import { Container, Box, CircularProgress } from "@mui/material";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../db/firebase";
import { GalleryWrapper, Column, StyledImage } from "./style"; // Bu yerda importlar mavjud deb hisoblash
import Headers from "../Home/Components/header";
import Footer from "../Home/Components/footer";

const db = getFirestore(app);

const Gallery = ({ galleryData }: { galleryData: any[] }) => {
  const columnStarts = [0, 7, 14, 21]; // Ustunlarni boshlash nuqtalari

  return (
    <GalleryWrapper>
      {columnStarts.map((start, idx) => (
        <Column key={idx}>
          {galleryData.slice(start, start + 7).map((item, index) => (
            <StyledImage
              key={index}
              src={item.img}
              alt={item.title}
              loading="lazy"
              decoding="async"
            />
          ))}
        </Column>
      ))}
    </GalleryWrapper>
  );
};

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
        setLoading(false); // Loading tugadi
      }
    };

    fetchDataByDB();
  }, []);

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
        <Gallery galleryData={galleryData} />
      </Container>
      <Footer />
    </>
  );
}

export default GalleryPage;
