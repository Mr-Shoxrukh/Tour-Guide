import styled from "styled-components";

export const About__wrapper = styled.section`
  width: 100%;
`;
export const About__content = styled.div`
  width: 100%;
  margin-top: 110px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 20px;
    img {
      display: none;
    }
  }
`;
export const AboutTitle = styled.div`
  max-width: 800px;
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
  p {
    max-width: 100%;
    width: 100%;
    font-size: 20px;
    line-height: 1.5;
    opacity: 50%;
    margin-top: 30px;
  }
`;
export const Benifiets = styled.div`
  width: 100%;
  padding: 40px 0 0 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  row-gap: 20px;
  @media (max-width: 840px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
export const BenifietBox = styled.div`
  display: flex;
  max-width: 350px;
  width: 100%;
  gap: 10px;
  align-items: center;
  padding: 27px 15px;
  background-color: #f4efca;
  border-radius: 16px;

  p {
    width: 100%;
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
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    flex-direction: column;
    row-gap: 80px;
    margin: 0;
    padding: 0;
  }
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
  padding: 20px 0;
  border-radius: 20px;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  @media (max-width: 936px) {
    padding: 0;
    justify-content: space-between;
  }
  @media (max-width: 895px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }
`;
export const TourTitle = styled.div`
  padding: 30px 0;
  h1 {
    font-size: 40px;
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 25px;
  border-radius: 20px;
  @media (max-width: 877px) {
    display: flex;
  }
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
