import styled from "styled-components";
const GameLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ScreenLayout = ({ children }) => {
  return <GameLayout>{children}</GameLayout>;
};
export default ScreenLayout;
