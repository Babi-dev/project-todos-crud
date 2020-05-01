import styled from "styled-components";

export const Content = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  top: 40px;
  padding: 40px 20px;

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

  color: #fff;
  border: 1px solid #5f72e5;

  font-size: 16px;
  font-weight: bold;
`;

export const ContentButtons = styled.section`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-content: center;
  gap: 5px;
`;

export const ButtonIcon = styled.button`
  padding: 6px;
  border: none;
  border-radius: 50%;

  background-color: ${props => (props.primary ? "#459978" : "#EB1C38")};

  cursor: pointer;
`;

export const CheckBox = styled.input`
  position: relative;

  width: 40px;
  height: 20px;
  border-radius: 10px;

  background-color: #eeecfb;
  box-shadow: inset 0px 0px 4px 2px #aba2eb;

  appearance: none;
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;

    width: 20px;
    height: 20px;
    top: 0px;
    left: 0px;
    border-radius: 50%;

    background-color: #eb1c38;

    transform: scale(1.1);
    transition: all 400ms;
  }

  :checked {
    background-color: #7abca1;
    box-shadow: inset 0px 0px 4px 2px #57997e;
  }

  :checked::before {
    left: 20px;
    background-color: #459978;
    box-shadow: inset 0px 0px 4px 2px #318261;
  }
`;

export const Title = styled.span`
  font-size: 18px;
  text-decoration: ${props => (props.Completed ? "line-through" : "none")};
`;

export const BackDrop = styled.div`
  position: fixed;
  z-index: 888;

  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;

  background-color: #000;
  opacity: 0.5;
`;

export const ContentModal = styled.section`
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  width: 400px;
  height: 200px;
  top: calc(50vh - 100px);
  left: calc(50vh - 200px);
  border-radius: 10px;

  background-color: #3944a2;
  border: 1px solid #5f72e5;
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 6px;
  border-radius: 50%;
  border: none;

  background-color: #5f72e5;

  cursor: pointer;

  :hover {
    background-color: #0b0f53;
  }
`;
