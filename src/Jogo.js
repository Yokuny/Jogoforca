import styled from "styled-components";
import forca1 from "./assets/image/forca1.png";
const GridDisplace = styled.div`
  &.grid-displace {
    display: grid;
    width: 80%;
    height: 60%;
    padding: 50px;
    box-sizing: border-box;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      "img img . incio inicio"
      "img img . . ."
      "img img . . ."
      "img img letters letters letters";
    gap: 10px;
  }
`;
const ForcaImg = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  background-color: cyan;
  grid-area: img;
  img {
    width: 90%;
    height: 80%;
  }
`;

const StartBtn = styled.div`
  background-color: gray;
  grid-area: inicio;
  button {
    width: 100px;
  }
`;
const AnswerProgression = styled.div`
  grid-area: letters;
  background-color: yellowgreen;
  button {
    width: 100px;
  }
`;
const Jogo = () => {
  return (
    <GridDisplace className="grid-displace">
      <ForcaImg>
        <img src={forca1} alt="" />
      </ForcaImg>
      <StartBtn>
        <button type="submit">Start</button>
      </StartBtn>
      <AnswerProgression>
        <h4>ass</h4>
      </AnswerProgression>
    </GridDisplace>
  );
};
export default Jogo;
