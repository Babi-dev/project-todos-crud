import styled from "styled-components";

export const Content = styled.form`
  display: flex;
  position: relative;

  @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputContent = styled.section`
  display: flex;
`;

export const Input = styled.input`
  width: 240px;
  height: 34px;
  padding: 0 10px;

  border-radius: 4px;
  border: 1px solid #5f72e5;
  background-color: transparent;
  color: #fff;

  font-size: 16px;

  ::placeholder {
    color: #fff;
  }
`;

export const ErrMessage = styled.small`
  margin-top: 4px;
  margin-left: 4px;
  font-weight: bold;
  color: #b24264;
`;

export const Button = styled.button`
  width: 120px;
  height: 34px;
  margin-left: 10px;

  border: none;
  border-radius: 4px;
  background-color: #5f72e5;
  color: #fff;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  :hover {
    background-color: #0c0f53;
  }

  @media (max-width: 360px) {
    margin: 10px;
  }
`;
