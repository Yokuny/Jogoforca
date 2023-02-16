import styled from "styled-components";
const ChuteContainer = styled.div`
  padding: 56px 0px;
  display: flex;
  align-items: center;
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
`;
const Chute = () => {
  return (
    <ChuteContainer>
      <FieldForm>
        <label htmlFor="chute">Já sei a palavra!</label>
        <input type="text" minLength={4} maxLength={16} />
        <button type="submit">Chutar</button>
      </FieldForm>
    </ChuteContainer>
  );
};
export default Chute;
