import Keys from "./components/Jogo-Components/LetrasComponents";
const Letras = ({ keys, jogada }) => {
  return (
    <Keys>
      {keys.map((letter) => {
        return (
          <button disabled={letter.choice} key={letter.letter} onClick={(e) => jogada(e)} data-test="letter">
            {letter.letter}
          </button>
        );
      })}
    </Keys>
  );
};
export default Letras;