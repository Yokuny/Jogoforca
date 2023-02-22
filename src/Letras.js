import Keys from "./components/Jogo-Components/LetrasComponents";
const Letras = ({ keys, jogada }) => {
  return (
    <Keys>
      {keys.map((letter) => {
        return (
          <button disabled={letter.choice} key={letter.letter} onClick={(e) => jogada(e)}>
            {letter.letter}
          </button>
        );
      })}
    </Keys>
  );
};
export default Letras;