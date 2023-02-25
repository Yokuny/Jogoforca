import styled from "styled-components";
const ChuteContainer = styled.div`
  padding: 56px 0px;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 38px 0px;
  }
`;
const FieldForm = styled.form`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  label {
    font-weight: 400;
    font-size: 20px;
    white-space: nowrap;
  }
  input {
    width: min(80%, 353px);
    height: 40px;

    font-size: 20px;
    font-weight: 400;
    text-align: center;

    border: 1px solid #cccccc;
    border-radius: 3px;
    background: #ffffff;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  }
  input:focus {
    border: 1px solid transparent;
    outline: 1px solid transparent;
  }
  button {
    width: 100px;
    height: 40px;

    font-size: 16px;
    font-weight: 700;
    color: #3c76a1;

    background: #e1ecf4;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
  }
  button:hover {
    cursor: pointer;
    background: #c9e0f2;
  }
  button:disabled,
  input:disabled {
    cursor: not-allowed;
    background: #9faab5;
  }
  @media (max-width: 1024px) {
    label {
      font-size: 16px;
    }
    input {
      height: 36px;
      font-size: 16px;
    }
    button {
      height: 36px;
      font-size: 14px;
    }
  }
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
  }
`;
const Chute = ({ input }) => {
  return (
    <ChuteContainer>
      <FieldForm>
        <label htmlFor="chute">Já sei a palavra!</label>
        <input disabled={input} type="text" minLength={4} maxLength={16} data-test="guess-input" />
        <button disabled={input} type="submit" data-test="guess-button">
          Chutar
        </button>
      </FieldForm>
    </ChuteContainer>
  );
};
export default Chute;
