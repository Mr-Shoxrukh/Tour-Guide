import styled from "styled-components";

export const UltimateServise__wrapper = styled.section`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
  gap: 20px;
`;
export const UltimateServiseImg = styled.div`
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 470px;
    border-radius: 14px;
  }
  @media (max-width: 400px) {
    margin-top: 40px;
    gap: 20px;
  }
`;
export const CityName_title = styled.div`
  h1 {
    font-size: 30px;
    margin-bottom: 40px;
    font-weight: 500;
  }
`;
export const Itinerary = styled.div`
  width: 100%;
  padding: 20px 15px;
  border: 1px solid #e0e0e0;
  margin-top: 80px;
  border-radius: 0.5rem;
`;
export const CostItem = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 0.5rem;
  border: 1px solid #e0e0e0;
  display: flex;
  margin: 85px 0 0 0;
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
