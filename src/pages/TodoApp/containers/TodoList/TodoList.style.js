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

  list-style-type: none;
`;

export const ListItem = styled.li`
  width: 230px;
  padding: 20px 10px;
  margin: 10px;
  border-radius: 6px;

  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-content: center;

  color: #b24264;
  border: 1px solid #b24264;

  font-size: 16px;
  font-weight: 600;
`;

export const ContentButtons = styled.section``;
export const ButtonIcon = styled.button`
  padding: 4px;
  border: none;
  border-radius: 50%;

  background-color: #b24264;

  cursor: pointer;
`;

export const Title = styled.span`
  text-decoration: ${props => (props.Completed ? "line-through " : "none")};
`;
