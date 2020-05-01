import styled from "styled-components";

export const ContentHeader = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  width: 100%;
  min-width: 300px;
  height: 80px;
  padding: 0 30px;
  top: 0;
  z-index: 99;

  background-color: #3944a2;
  box-shadow: 2px 2px 6px 0 #0b0f53;

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 20px 0;
    height: 130px;
  }

  @media (max-width: 360px) {
    height: 180px;
  }
`;
