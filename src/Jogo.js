import styled from "styled-components";
import forca1 from "./assets/image/forca6.png";
import {
  GridDisplace,
  GallowsImg,
  StartBtn,
  AnswerProgression,
} from "./components/Jogo-Components/JogoComponents";

const Jogo = () => {
  return (
    <GridDisplace className="grid-displace">
      <GallowsImg>
        <img src={forca1} alt="" />
      </GallowsImg>
      <StartBtn>
        <button type="submit">Escolher Palavra</button>
      </StartBtn>
      <AnswerProgression>
        <h4>Q U A R E N T E N A</h4>
      </AnswerProgression>
    </GridDisplace>
  );
};
export default Jogo;
