import Keys from "./components/Jogo-Components/LetrasComponents";
const Letras = ({ keys, jogada }) => {
  return (
    <Keys>
      {keys.map((letter, index) => {
        return (
          <button disabled={letter.choice} key={`${letter.letter}${index}`} onClick={jogada}>
            {letter.letter.toUpperCase()}
          </button>
        );
      })}
    </Keys>
  );
};
export default Letras;
