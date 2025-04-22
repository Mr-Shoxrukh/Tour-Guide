import styled from "styled-components";
import registan from "./Components/img/registan.png";
export const Registan__wrapper = styled.section`
  width: 100%;
  .slider-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 120px;
  }
  .slide {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s ease-in-out;
  }
  .slideText {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    @media screen and (max-width: 508px) {
      padding-left: 0;
    }
    .home-description {
      max-width: 600px;
      width: 100%;
      text-align: center;
      font-size: 25px;
    }
  }
  h1 {
    font-size: 50px;
    color: white;
    margin-top: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: bold;
  }
  .fade {
    animation: fadeEffect 1s;
  }
  @keyframes fadeEffect {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }

  button {
    position: absolute;
    top: 45%;
    padding: 20px 30px;
    color: #fff;
    background: transparent;
    font-size: 40px;
    margin-top: 30px;
  }
  .next {
    right: 0;
  }
  .prev {
    left: 0;
  }
  img {
    width: 100%;
    height: 800px;
    object-fit: cover;
    border-radius: 0 0 10px 10px;
  }
  @media (max-width: 520px) {
    background-size: 100% 100%;
    margin-top: 110px;
  }
`;

export const BookingGuide = styled.div`
  max-width: 434px;
  height: 500px;
  min-width: 300px;
  width: 100%;
  padding: 20px;
  margin-right: 10px;

  background: rgba(0, 0, 0, 0.61);
  backdrop-filter: blur(12px);
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 1);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h1 {
    color: white;
  }
  img {
    width: 100%;

    margin-bottom: 20px;
  }
  p {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #ffcc00;
    color: #000;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export const Tour_Actives = styled.section`
  width: 100%;
  margin-top: 50px;
  @media screen and (max-width: 521px) {
    margin-top: 120px;
  }
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
    font-size: 44px;
    font-weight: bold;
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
    font-size: 20px;
  }
`;
export const ExperienceWithTourests__wrapper = styled.section`
  width: 100%;
  margin-top: 50px;
  padding: 30px 0;
  @media (max-width: 1300px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  p {
    width: 100%;
    @media (max-width: 1300px) {
      width: 100%;
      color: red;
    }
  }
`;
export const WithTourestyImg = styled.div`
  width: 100%;
  padding: 0 45px;
  display: flex;
  gap: 40px;
  flex-direction: row-reverse;
  justify-content: center;

  @media (max-width: 1300px) {
    display: none;
  }
  img {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
  }
`;

export const GoodSidesIcon = styled.div`
  padding: 0 20px;
  height: 100%;
  background-color: rgba(96, 198, 100, 0.84);
  display: flex;
  justify-content: center;
  border-radius: 10px 0 0 10px;
  align-items: center;
  color: rgb(1, 65, 5);
  font-size: 25px;
`;
export const GoodSides = styled.div`
  height: 60px;
  display: flex;
  padding-right: 40px;
  justify-content: space-between;
  font-weight: bold;
  border-radius: 10px;
  gap: 20px;
  background-color: rgba(76, 175, 79, 0.22);
  font-size: 17px;
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
  padding: 120px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://www.pngplay.com/wp-content/uploads/2/World-Map-Free-PNG.png");
  position: static;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 19px;
  display: flex;
  flex-direction: column;
`;
export const SpotTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
  h1 {
    font-size: 42px;
    color: #fff;
    font-weight: bold;
  }
`;
export const CardCity__wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
