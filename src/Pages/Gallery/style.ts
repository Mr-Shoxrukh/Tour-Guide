import styled from "styled-components";

export const GalleryWrapper = styled.section`
  width: 100%;
  margin: 100px 0 0 0;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  img:nth-child(8) {
    grid-column-start: 3;
    grid-column-end: 4;
  }
`;
