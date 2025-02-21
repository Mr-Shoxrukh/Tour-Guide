import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Box, Container, Typography } from "@mui/material";

const supabaseUrl = "https://mjcedactmdisysxnyusx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2VkYWN0bWRpc3lzeG55dXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzE0MjksImV4cCI6MjA1NTQ0NzQyOX0.9slbpltg1VrHV4ZxI6gcXvP9zus0kXpQH6oqFmy_RO0";
const supabase = createClient(supabaseUrl, supabaseKey);
function Booking() {
  const { guideId } = useParams(); // URL-dan ID ni olish
  const [guide, setGuide] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuide = async () => {
      if (!guideId) return;

      const { data, error } = await supabase
        .from("guides")
        .select("*")
        .eq("id", guideId)
        .single();

      if (error) {
        console.error("Supabase Error:", error);
      } else {
        setGuide(data);
      }
      setLoading(false);
    };

    fetchGuide();
  }, [guideId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!guide) {
    return <p>No data found!</p>;
  }

  return (
    <Container maxWidth="xl">
      <Box>
        <Typography>Booking Page</Typography>
        <img src={guide.guideImg} alt={guide.title} width="300" />
        <p>{guide.description}</p>
      </Box>
    </Container>
  );
}

export default Booking;
