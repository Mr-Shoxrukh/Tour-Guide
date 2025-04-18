import styled from "styled-components";

export const GalleryWrapper = styled.div`
  column-count: 4;
  column-gap: 1rem;
  padding: 2rem 0;
  margin-top: 120px;

  @media (max-width: 1200px) {
    column-count: 3;
  }
  @media (max-width: 768px) {
    column-count: 2;
  }
  @media (max-width: 480px) {
    column-count: 1;
  }
`;

export const ImageCard = styled.div`
  margin-bottom: 1rem;
  break-inside: avoid;

  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
    }
  }
`;
