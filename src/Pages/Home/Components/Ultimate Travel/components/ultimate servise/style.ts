import styled from "styled-components";

export const UltimateServise__wrapper = styled.section`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
  gap: 20px;
`;
export const UltimateServiseImg = styled.div`
  max-width: 849px;
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 400px;
    border-radius: 14px;
  }
`;
export const CityName_title = styled.div`
  h1 {
    font-size: 30px;
    margin-bottom: 10px;
    font-weight: 500;
  }
`;
export const Itinerary = styled.div`
  width: 100%;
  padding: 20px 15px;
  border: 1px solid #e0e0e0;
  margin-top: 20px;
  border-radius: 0.5rem;
`;
export const CostItem = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 0.5rem;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 26px;
    color: #22c55e;
    font-weight: bold;
  }
  button {
    padding: 15px;
  }
`;
