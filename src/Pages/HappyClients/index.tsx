import React, { useEffect, useState } from "react";
import Headers from "../Home/Components/header";
import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { ClienstImages, Clients__wrapper, SatisfiedClients } from "./style";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/firebase";
import Footer from "../Home/Components/footer";
type Props = {};
interface DataItem {
  id: string;
  img: string;
  video: string;
  imgTitle: string;
  imgText: string;
  clientsImg: string;
  clentLocation: string;
}
function HappyClientsPage({}: Props) {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "happyClients"));
        const items: DataItem[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as DataItem[];
        setData(items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (loading)
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
  return (
    <>
      <Headers />
      <Container maxWidth="xl">
        <Clients__wrapper>
          <ClienstImages>
            {data.map((item, index) => (
              <Box>
                <img
                  src={item.img}
                  alt={item.imgTitle}
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="h1">{item.imgTitle}</Typography>
                <p>{item.imgText}</p>

                {index !== data.length - 1 && ( // Oxirgi elementdan keyin div chiqmasligi uchun
                  <Box style={{ display: "none", height: 0, margin: 0 }}></Box>
                )}
              </Box>
            ))}
          </ClienstImages>
          <SatisfiedClients>
            {data.slice(1).map((item1) => (
              <Box>
                <img
                  src={item1.clientsImg}
                  style={{ width: "100%", height: "auto" }}
                />
                <h1>{item1.clentLocation}</h1>
              </Box>
            ))}
          </SatisfiedClients>
        </Clients__wrapper>
      </Container>
      <Footer />
    </>
  );
}
export default HappyClientsPage;
