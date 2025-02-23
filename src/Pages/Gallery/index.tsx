import {
  Box,
  Card,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Headers from "../Home/Components/header";
import { GalleryWrapper } from "./style";
import { createClient } from "@supabase/supabase-js";
type Props = {};
const supabaseUrl = "https://mjcedactmdisysxnyusx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2VkYWN0bWRpc3lzeG55dXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzE0MjksImV4cCI6MjA1NTQ0NzQyOX0.9slbpltg1VrHV4ZxI6gcXvP9zus0kXpQH6oqFmy_RO0";
const supabase = createClient(supabaseUrl, supabaseKey);
function GalleryPage({}: Props) {
  const [guide, setGuide] = useState<any>([]);
  const [getData, steData] = useState<any>([]);
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
          {getData.map((item: any, index: number) => (
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
