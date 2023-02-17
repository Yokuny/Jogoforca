import styled from "styled-components";
const Keys = styled.div`
  margin-top: 73px;
  width: calc((40px + 12px) * 13);
  //mudar width para a responsividade
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
    background: #e1ecf4;

    font-size: 16px;
    font-weight: 700;
    color: #39739d;

    transition: all 0.2s ease-in-out;
  }
  button:hover {
    background: #c9e0f5;
  }
  button:disabled {
    cursor: not-allowed;
    background: #9faab5;
  }
`;
export default Keys;
