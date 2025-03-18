import styled from "styled-components";
import registan from "./Components/img/registan.png";
export const Registan__wrapper = styled.section`
  max-width: 1650px;
  width: 100%;
  height: 770px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url("https://mjcedactmdisysxnyusx.supabase.co/storage/v1/object/sign/gallery/IMG_5179%20(3).JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L0lNR181MTc5ICgzKS5KUEciLCJpYXQiOjE3Mzk5NTc5MzAsImV4cCI6MTc3MTQ5MzkzMH0.0Gs-6Eg240grUVDWdC4hmJQfTbY9NEEYZCBdoZnjszg");
  background-size: cover;
  background-attachment: static;
  background-repeat: no-repeat;
  border-radius: 20px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
`;

export const BookingGuide = styled.div`
  max-width: 434px;
  height: 500px;
  width: 100%;
  padding: 20px;
  margin-right: 20px;
  background-color: rgba(0, 0, 0, 0.86);
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  h1 {
    color: white;
  }
  img {
    width: 100%;
  }
`;
export const Tour_Actives = styled.section`
  width: 100%;
  margin-top: 50px;
  padding: 30px 0;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
`;
export const GetStart_btn = styled.div`
  margin-top: 70px;
  button {
    width: 200px;
  }
`;
export const TourActTitle = styled.div`
  width: 100%;
  h1 {
    font-size: 30px;
    text-align: center;
  }
`;
export const SelectGuide = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    padding: 10px 30px;
  }
`;
export const TourGallery = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 50px;
  img {
    width: 400px;
    transition: 0.3s;
  }
  img:hover {
    scale: 0.9;
  }
`;
export const ExperienceTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  p {
    width: 700px;
    font-size: 20px;
  }
`;
export const ExperienceWithTourests__wrapper = styled.section`
  width: 100%;
  background-color: #f2f2f2;
  margin-top: 50px;
  padding: 30px 0;
  border-radius: 20px;
`;
export const WithTourestyImg = styled.div`
  width: 100%;
  padding: 0 45px;
  display: flex;
  gap: 40px;
  flex-direction: row-reverse;
  justify-content: center;
  img {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
  }
`;

export const GoodSidesIcon = styled.div`
  padding: 0 20px;
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GoodSides = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  padding-right: 40px;
  justify-content: space-between;
  align-items: center;
`;
export const SpotTourst = styled.section`
  width: 100%;
  background-color: rgb(255, 255, 255);
  margin-top: 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const MApImg = styled.div`
  max-width: 1650px;
  height: 700px;
  padding: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.88)),
    url("https://www.pngplay.com/wp-content/uploads/2/World-Map-Free-PNG.png");
  position: static;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 19px;
`;
export const SpotTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  h1 {
    font-size: 42px;
    color: #dd2c00;
  }
`;
export const CardCity__wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const CityBox = styled.div`
  width: 340px;
  background-color: white;
  border-radius: 7px;
  img {
    width: 100%;
    height: 250px;
    border-radius: 7px 7px 0 0;
  }
`;
export const CityName = styled.div`
  text-align: center;
  h1 {
    font-size: 18px;
  }
  p {
    padding: 10px 0;
  }
`;
