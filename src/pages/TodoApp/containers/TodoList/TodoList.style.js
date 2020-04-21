import styled from "styled-components";

export const Content = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  top: 40px;
  padding: 40px 60px;

  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  overflow-y: scroll;
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

export const ListItem = styled.li`
  padding: 20px;
  margin: 20px;
  border-radius: 6px;

  color: #fff;
  border: 1px solid #0c0f53;
  background-color: rgba(12, 15, 83, 0.6);
`;
