import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Header from "../../Pages/Home/Components/header";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { BookingCard, BookingFrom, BookingWrapper } from "./style";
interface Guide {
  id: string;
  guideName: string;
  title: string;
  guideExperience: string;
  guideImg: string;
}

const supabaseUrl = "https://mjcedactmdisysxnyusx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2VkYWN0bWRpc3lzeG55dXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzE0MjksImV4cCI6MjA1NTQ0NzQyOX0.9slbpltg1VrHV4ZxI6gcXvP9zus0kXpQH6oqFmy_RO0";
const supabase = createClient(supabaseUrl, supabaseKey);

function Booking() {
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [days, setDays] = useState("");
  const { guideId } = useParams();
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
        setGuide(data as Guide);
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

  const handleBooking = () => {
    if (!contact || !name || !days) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }

    // Guide'ga WhatsApp orqali xabar yuborish
    const message = encodeURIComponent(
      `Salom, men guide xizmatingizga buyurtma bermoqchiman!%0A🧑‍💼 Ism: ${name}%0A📞 Kontakt: ${contact}%0A📆 Necha kun: ${days} kun`
    );
    const whatsappLink = `https://wa.me/${guide.phoneNumber}?text=${message}`;

    window.open(whatsappLink, "_blank");
  };
  console.log(guide.phoneNumber);

  return (
    <Container maxWidth="xl">
      <Header />
      <BookingWrapper>
        <BookingCard>
          <img src={guide.guideImg} alt={guide.title} width="300" />
          <Typography variant="body1">{guide.guideExperience}</Typography>
        </BookingCard>
        <BookingFrom>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "300px",
              margin: "auto",
            }}
          >
            <TextField
              label="UserName yoki Telefon raqam"
              variant="outlined"
              fullWidth
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Misol: @username yoki +998901234567"
            />
            <TextField
              label="Ism"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ismingizni kiriting"
            />
            <TextField
              label="Necha kunga?"
              type="number"
              variant="outlined"
              fullWidth
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="Masalan: 3"
            />
            <Button variant="contained" color="success" onClick={handleBooking}>
              WhatsApp orqali Buyurtma
            </Button>
          </div>
        </BookingFrom>
      </BookingWrapper>
    </Container>
  );
}

export default Booking;
