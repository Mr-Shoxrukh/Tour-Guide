import styled from "styled-components";

export const About__wrapper = styled.section`
  width: 100%;
`;
export const About__content = styled.div`
  width: 100%;
  margin-top: 70px;
  background-color: white;
  /* padding: 20px; */
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AboutTitle = styled.div`
  h1 {
    width: 100%;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  p {
    width: 580px;
    font-size: 20px;
    line-height: 1.5;
    opacity: 50%;
    margin-top: 30px;
  }
`;
export const Benifiets = styled.div`
  padding: 40px 0 0 0;
  width: 750px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
`;
export const BenifietBox = styled.div`
  display: flex;
  width: 350px;
  gap: 10px;
  align-items: center;
  padding: 27px 15px;
  background-color: #f4efca;
  border-radius: 16px;
  p {
    margin: 0;
    font-size: 20px;
    color: #f66432;
    opacity: 100%;
    font-weight: bold;
  }
`;
export const AboutImage = styled.div`
  max-width: 450px;
  img {
    width: 100%;
    border-radius: 20px;
    margin-top: 60px;
  }
`;
export const Results = styled.div`
  width: 100%;
  height: 130px;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ResBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;

  align-items: center;
  gap: 20px;
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-left: 20px;
  }
  p {
    opacity: 50%;
  }
`;
export const WhyGuideTour = styled.div`
  width: 100%;
  margin-top: 30px;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;
export const TourTitle = styled.div`
  padding: 30px 0;
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    line-height: 1.5;
    opacity: 50%;
    margin-top: 30px;
  }
`;
export const Cards__Wrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 25px;
  border-radius: 20px;
`;
export const Cards__content = styled.div`
  max-width: 415px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #eeeeee;
  padding: 20px;
  border-radius: 10px;
  gap: 1.5rem;
`;
export const CardTitle = styled.div`
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    opacity: 50%;
  }
`;
