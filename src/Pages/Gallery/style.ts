import styled from "styled-components";

export const GalleryWrapper = styled.section`
  width: 100%;
  border-radius: 20px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  img:nth-child(8) {
    grid-column-start: 3;
    grid-column-end: 4;
  }
`;
