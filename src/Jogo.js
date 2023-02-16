import forca0 from "./assets/image/forca0.png";
import forca1 from "./assets/image/forca1.png";
import forca2 from "./assets/image/forca2.png";
import forca3 from "./assets/image/forca3.png";
import forca4 from "./assets/image/forca4.png";
import forca5 from "./assets/image/forca5.png";
import forca6 from "./assets/image/forca6.png";
import {
  GridDisplace,
  GallowsImg,
  StartBtn,
  AnswerProgression,
} from "./components/Jogo-Components/JogoComponents";

const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

const Jogo = ({ palavra, startGame, misplayAmount }) => {
  let letras = [];
  for (let i = 0; i < palavra.length; i++) {
    letras.push(palavra[i]);
  }
  return (
    <GridDisplace className="grid-displace">
      <GallowsImg>
        <img src={forca[misplayAmount]} alt="" />
      </GallowsImg>
      <StartBtn>
        <button onClick={startGame} type="submit">
          Escolher Palavra
        </button>
      </StartBtn>
      <AnswerProgression>
        {letras.map((word, index) => {
          return <h4 key={`word${index}`}>{word.toUpperCase()}</h4>;
        })}
      </AnswerProgression>
    </GridDisplace>
  );
};
export default Jogo;
