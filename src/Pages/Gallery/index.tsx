import { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../db/firebase"; // Firebase konfiguratsiyasini import qiling
import { GalleryWrapper } from "./style";
import Headers from "../Home/Components/header";

const db = getFirestore(app); // Firestore'ni o‘rnatamiz

function GalleryPage() {
  const [galleryData, setGalleryData] = useState<any[]>([]);

  useEffect(() => {
    const fetchDataByDB = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gallery")); // Firestore'dan ma'lumotlarni olish
        const galleryItems = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("📸 Ma’lumotlar:", galleryItems);
        setGalleryData(galleryItems);
      } catch (error) {
        console.error("🔥 Firebase xatosi:", error);
      }
    };

    fetchDataByDB();
  }, []);

  return (
    <Container maxWidth="xl">
      <Headers />
      <GalleryWrapper>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gridAutoFlow: "dense",
            gap: "16px",
            padding: "16px",
          }}
        >
          {galleryData.map((item, index) => (
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
      </GalleryWrapper>
    </Container>
  );
}

export default GalleryPage;
