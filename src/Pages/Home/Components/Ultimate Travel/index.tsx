import {
  CardPrice,
  UltimateCardWrapper,
  UltimateTitle,
  UltimateTour__Wrapper,
} from "./style";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
type Props = {};

function UltimateTour({}: Props) {
  return (
    <UltimateTour__Wrapper>
      <UltimateTitle>
        <Typography variant="h1">Ultimate Travel Experience</Typography>
      </UltimateTitle>
      <UltimateCardWrapper>
        <Card sx={{ maxWidth: 400, minWidth: 400, boxShadow: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://mjcedactmdisysxnyusx.supabase.co/storage/v1/object/sign/gallery/registan.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L3JlZ2lzdGFuLnBuZyIsImlhdCI6MTczOTk3MTM3OSwiZXhwIjoxNzcxNTA3Mzc5fQ.FHYhfbfIUNzKCtNWN_XkTe2rSMdcgu-FQXonC8QC1ac"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Uzbekistan City Tour
              </Typography>
              <CardPrice>
                <Box>
                  <Typography fontSize={15}>Starts from:</Typography>
                  <Typography variant="body1" fontSize={23} color="#68ae49">
                    $335
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      opacity: "50%",
                    }}
                  >
                    TAXES/INCL/PERS
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    opacity: "60%",
                  }}
                >
                  <AccessAlarmIcon />
                  <Typography>6 Days / 5 Nights</Typography>
                </Box>
              </CardPrice>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400, boxShadow: 3, minWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://mjcedactmdisysxnyusx.supabase.co/storage/v1/object/sign/gallery/IMG_5187%20(3).JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L0lNR181MTg3ICgzKS5KUEciLCJpYXQiOjE3NDAzMDM3MTMsImV4cCI6MTc3MTgzOTcxM30.xlqrL7Qw1QITQ7dl0WK_JDY8Gu7L3ToyVsODsrpb-OQ"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Individual Cultural Tour
              </Typography>
              <CardPrice>
                <Box>
                  <Typography fontSize={15}>Starts from:</Typography>
                  <Typography variant="body1" fontSize={23} color="#68ae49">
                    $335
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      opacity: "50%",
                    }}
                  >
                    TAXES/INCL/PERS
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    opacity: "60%",
                  }}
                >
                  <AccessAlarmIcon />
                  <Typography>6 Days / 5 Nights</Typography>
                </Box>
              </CardPrice>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400, boxShadow: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://mjcedactmdisysxnyusx.supabase.co/storage/v1/object/sign/gallery/14-1-1536x905-1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5LzE0LTEtMTUzNng5MDUtMS53ZWJwIiwiaWF0IjoxNzQwMzAzMTYxLCJleHAiOjE3NzE4MzkxNjF9.rjudxQ2xdiHlYb7sw30cLuvvfD2DUNfHnU9yO6-5o4M"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tashkent Mountain Tour: Amirsoy
              </Typography>
              <CardPrice>
                <Box>
                  <Typography fontSize={15}>Starts from:</Typography>
                  <Typography variant="body1" fontSize={23} color="#68ae49">
                    $335
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      opacity: "50%",
                    }}
                  >
                    TAXES/INCL/PERS
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    opacity: "60%",
                  }}
                >
                  <AccessAlarmIcon />
                  <Typography>6 Days / 5 Nights</Typography>
                </Box>
              </CardPrice>
            </CardContent>
          </CardActionArea>
        </Card>
      </UltimateCardWrapper>
    </UltimateTour__Wrapper>
  );
}

export default UltimateTour;
