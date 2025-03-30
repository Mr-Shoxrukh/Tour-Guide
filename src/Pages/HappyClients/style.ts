import styled from "styled-components";

export const Clients__wrapper = styled.section`
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  gap: 40px;
`;
export const ClienstImages = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  img {
    width: 100%;
    border-radius: 6px;
    margin-top: 33px;
  }
  h1 {
    font-size: 35px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 0;
  }
  p {
    font-size: 16px;
    color: rgb(120 120 120);
    padding: 0;
  }
`;
export const SatisfiedClients = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0;
  }
  img {
    border-radius: 6px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
