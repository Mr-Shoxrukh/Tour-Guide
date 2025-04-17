import styled from "styled-components";
import { Box } from "@mui/material";

export const GalleryWrapper = styled(Box)`
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px; // 👈 ustunlar orasidagi bo‘shliq
  padding: 16px;

  @media (min-width: 600px) {
    gap: 24px;
  }

  @media (min-width: 900px) {
    gap: 32px;
  }
`;

export const Column = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;

  @media (min-width: 600px) {
    width: 48%;
  }

  @media (min-width: 900px) {
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
