import styled from "styled-components";
const Keys = styled.div`
  margin-top: 70px;
  width: calc((40px + 12px) * 13);
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
  @media (max-width: 1024px) {
    margin-top: 52px;
    width: calc((40px + 12px) * 9);
  }
  @media (max-width: 860px) {
    margin-top: -10px;
    width: calc((40px + 8px) * 8);
  }
  @media (max-width: 440px) {
    button {
      width: 30px;
      height: 30px;
      font-size: 12px;
    }
    width: calc((30px + 5px) * 11);
  }
  @media (max-width: 400px) {
    width: calc((30px + 3px) * 9);
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
