import styled from "styled-components";
import registan from "./Components/img/registan.png";
export const Registan__wrapper = styled.section`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url("${registan}") center/cover no-repeat;
  border-radius: 10px;
  margin-top: -10px;
  z-index: -1;
  position: relative;
`;
export const GUides__wrapper = styled.div`
  width: 500px;
  display: flex;
  position: absolute;
  gap: 20px;
  right: 460px;
  bottom: 0;
  img {
    width: 400px;
  }
`;
export const Tour_Actives = styled.section`
  width: 100%;
  margin-top: 100px;
`;
export const TourActTitle = styled.div`
  width: 100%;
  h1 {
    font-size: 30px;
    text-align: center;
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
  /* &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar {
    border-radius: 10px;
    /* display: none; */

  /* &::-webkit-scrollbar-thumb {
      background-color: rgba(184, 181, 181, 0.57);
      border-radius: 10px;
      border: 1px solid #f0f0f0;
      }
      
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
        } */
`;
