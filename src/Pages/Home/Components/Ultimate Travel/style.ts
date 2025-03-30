import styled from "styled-components";

export const UltimateTourWrapper = styled.section`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  padding: 0;
  @media (max-width: 877px) {
    justify-content: center;
    margin-top: 40px;
  }
`;
export const UltimateTitle = styled.div`
  width: 100%;
  display: flex;
  margin-top: 120px;
  justify-content: center;
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  @media (max-width: 877px) {
    width: 100%;
    margin-bottom: 30px;
  }
  @media (max-width: 400px) {
    margin-top: 90px;
    h1 {
      margin-top: 40px;
    }
  }
`;
export const UltimateCardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
  @media (max-width: 923px) {
    justify-content: center;
  }
`;
export const CardPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
