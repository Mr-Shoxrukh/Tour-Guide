import styled from "styled-components";

export const GalleryWrapper = styled.section`
  width: 100%;
  height: auto;
  margin: 100px 0 0 0;
  border-radius: 20px;
  display: flex;
  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }
`;
