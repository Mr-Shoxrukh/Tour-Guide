import styled from "styled-components";

export const UltimateServise__wrapper = styled.section`
  margin-top: 80px;
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  @media (max-width: 431px) {
    margin-top: 90px;
  }
`;
export const UltimateServiseImg = styled.div`
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
    border-radius: 14px;
  }
  @media (max-width: 400px) {
    margin-top: 40px;
    gap: 20px;
  }
`;
export const CityName_title = styled.div`
  display: flex;
  height: 40px;
  margin-bottom: 20px;
  h1 {
    font-size: 30px;
    margin-bottom: 40px;
    font-weight: 500;
  }
  @media screen and (max-width: 402px) {
    margin-top: 20px;
  }
`;
export const Itinerary = styled.div`
  width: 100%;
  padding: 20px 0 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #e0e0e0;
  margin-top: 20px;
  border-radius: 0.5rem;
  h1 {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: "10px";
  }
`;
export const IncludedItem = styled.div`
  display: flex;
  border: 1px solid #e0e0e0;
`;
export const CostItem = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #e0e0e0;
  display: flex;
  margin: 80px 0 0 0;
  flex-direction: column;
  h1 {
    font-size: 26px;
    color: #22c55e;
    font-weight: bold;
  }
  button {
    padding: 15px;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-top: 20px;
    padding: 0;
  }
  h1,
  p {
    padding: 20px 0 0 20px;
  }
  button {
    margin: 0 20px 20px 20px;
  }
`;
